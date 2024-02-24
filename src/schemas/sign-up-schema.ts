import { z } from 'zod'

export const signUpSchema = () => {
	return z.object({
		email: z
			.string()
			.trim()
			.nonempty('Поле не должно быть пустым')
			.email('Введите корректный Email')
	})
}

export type SignUpFormValues = z.infer<ReturnType<typeof signUpSchema>>
