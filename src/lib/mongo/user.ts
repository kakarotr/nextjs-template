import { User } from '@/lib/types/auth'
import client from './index'

export const findUserByEmail = async (email: string) => {
  return await client.db('nextjs-task')
        .collection('users')
        .findOne<User>({ email })
}