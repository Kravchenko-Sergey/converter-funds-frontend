import { z } from 'zod'
import { passwordRegex } from '../consts/regex'

export const signInSchema = () => {
	return z.object({
		login: z.string().trim().nonempty('Поле не должно быть пустым'),
		password: z
			.string()
			.nonempty('Поле не должно быть пустым')
			.regex(passwordRegex, 'Введите корректный пароль')
			.trim()
			.min(6, 'Минимум 6 символов'),
		rememberMe: z.boolean()
	})
}

export type SignInFormValues = z.infer<ReturnType<typeof signInSchema>>
