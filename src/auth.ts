import NextAuth from 'next-auth'
import client from '@/lib/mongo'
import Credentials from 'next-auth/providers/credentials'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import { findUserByEmail } from '@/lib/mongo/user'
import { CredentialsError } from '@/lib/types/error'

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(client),
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      authorize: async (credentials) => {
        const { email, password } = credentials
        const user = await findUserByEmail(email as string)
        if (user === null) {
          throw new CredentialsError('无效的邮箱')
        }
        if (user.password !== password) {
          throw new CredentialsError('无效的密码')
        }
        return user
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
      }
      return token
    }
  }
})
