'use server'

import zod from 'zod'
import { FormState } from '@/lib/types'
import { User } from '@/lib/types/auth'
import { signIn } from '@/auth'
import { redirect } from 'next/navigation'
import { CredentialsError } from '@/lib/types/error'

const signInSchema = zod.object({
  email: zod
      .string({ required_error: '请填写电子邮箱' })
      .min(1, '请填写电子邮箱')
      .email('无效的邮箱'),
  password: zod
      .string({ required_error: '请填写密码' })
      .min(1, '请填写密码')
      .min(6, '密码必须大于6个字符')
})

export const login = async (prevState: FormState<User>, formData: FormData): Promise<FormState<User>> => {
  const validateFields = signInSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password')
  })
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: 'Failed to login'
    }
  }
  try {
    await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false
    })
  } catch (e) {
    return {
      message: (e as CredentialsError).message
    }
  }
  redirect('/overview')
}
