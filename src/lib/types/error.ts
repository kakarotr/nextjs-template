import { CredentialsSignin } from 'next-auth'

export class CredentialsError extends CredentialsSignin {
  message: string

  constructor(message: string) {
    super()
    this.message = message
  }
}