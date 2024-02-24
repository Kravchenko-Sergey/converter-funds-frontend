'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
	Flex,
	Heading,
	Text,
	UnorderedList,
	ListItem,
	Button,
	Card,
	CardHeader,
	CardBody,
	Divider,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	Input,
	Checkbox
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignInFormValues, signInSchema } from '@/schemas/sign-in-schema'

export default function Home() {
	const [isShowSignInModal, setIsShowSignInModal] = useState(false)
	const [isShowSignUpModal, setIsShowSignUpModal] = useState(false)

	const trustedCards = [
		{
			title: 'Более девяти лет работы',
			text: 'Более 100 млрд. рублей активов находится в портфелях нашихпользователей'
		},
		{
			title: 'Команда профессионалов',
			text: 'Каждый разработчик сервиса имеет брокерский счет и опыт на бирже'
		},
		{
			title: 'Полная анонимность',
			text: 'Мы не требуем никаких документов и не храним ваши персональные данные'
		},
		{
			title: 'Оперативная поддержка',
			text: 'Задайте вопрос на web@converterfunds.com и мы гарантированно ответим вам в течение 24 часов'
		}
	]

	const handleSignInModal = () => {
		setIsShowSignInModal(true)
	}

	const handleSignUpModal = () => {
		setIsShowSignUpModal(true)
	}

	const handleCloseSignInModal = () => {
		setIsShowSignInModal(false)
	}

	const handleCloseSignUpModal = () => {
		setIsShowSignUpModal(false)
	}

	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
			rememberMe: false
		},
		resolver: zodResolver(signInSchema())
	})

	function onSubmit(data: SignInFormValues) {
		console.log(data)
	}

	return (
		<>
			<Flex pl={60} pr={60} position='relative'>
				<Flex direction='column'>
					<Flex pt={8} pb={8} w='100%' align='center'>
						<Heading as='h1' size='md' flex='1 1 20%'>
							CONVERTERFUNDS
						</Heading>
						<Flex flex='1 1 60%' gap={8} justifyContent='right'>
							<Text>О Сервисе</Text>
							<Text>Преимущества</Text>
							<Text>Нам доверяют</Text>
							<Text>Возможности</Text>
						</Flex>
						<Flex flex='1 1 20%' gap={8} justifyContent='center'>
							<Text onClick={handleSignInModal}>Войти</Text>
							<Text onClick={handleSignUpModal}>Регистрация</Text>
						</Flex>
					</Flex>
					<Divider w='200%' position='absolute' top={88} right={-60} />
					<Flex h='88vh' alignItems='center'>
						<Flex direction='column' ml={48} gap={16}>
							<Heading as='h1' size='xl' flex='1 1 20%'>
								Учет и контороль ваших инвестиций
							</Heading>
							<UnorderedList spacing={4}>
								<ListItem fontSize='16px'>
									Добавляйте купленные акции и облигации
								</ListItem>
								<ListItem fontSize='16px'>Следите за портфелем</ListItem>
								<ListItem fontSize='16px'>Анализируйте доходность</ListItem>
							</UnorderedList>
							<Button pr={8} pl={8} width='fit-content' borderRadius={24}>
								Начать пользоваться бесплатно
							</Button>
						</Flex>
					</Flex>
					<Flex pb={24} direction='column' align='center'>
						<Heading mb={16} size='lg'>
							Почему нам доверяют
						</Heading>
						<Flex gap={4}>
							{trustedCards.map((card) => (
								<Card key={card.title}>
									<CardHeader>
										<Heading h={8} size='md'>
											{card.title}
										</Heading>
									</CardHeader>
									<CardBody>
										<Text>{card.text}</Text>
									</CardBody>
								</Card>
							))}
						</Flex>
					</Flex>
					<Flex pt={16} pb={32} direction='column' align='center' gap={8}>
						<Heading size='lg'>
							Присоединяйтесь к более чем 300 000 инвесторов!
						</Heading>
						<Button px={8} width='fit-content' borderRadius={24}>
							Начать пользоваться бесплатно
						</Button>
					</Flex>
					<Flex py={8} justify='space-between'>
						<Text>Converterfunds Intelligent investments</Text>
						<Text>OOO Конвертерфандс ОГРН 1171690041270 ИНН 1655386205</Text>
					</Flex>
				</Flex>
			</Flex>
			{isShowSignInModal && (
				<Modal
					isOpen={isShowSignInModal}
					onClose={handleCloseSignInModal}
					isCentered
				>
					<ModalOverlay />
					<ModalContent>
						<form onSubmit={handleSubmit(onSubmit)}>
							<ModalBody
								py={8}
								display='flex'
								flexDirection='column'
								alignItems='center'
								gap={8}
							>
								<Heading size='md'>Вход</Heading>
								<Flex
									w='full'
									h='61px'
									mb={-4}
									direction='column'
									justify='space-between'
								>
									<Controller
										control={control}
										name='login'
										render={({ field: { value, onChange, onBlur } }) => (
											<Input
												value={value}
												onChange={onChange}
												onBlur={onBlur}
												placeholder='Логин'
												borderColor={errors.login && 'red'}
											/>
										)}
									/>
									{errors.login && (
										<Text color='red'>{errors.login.message}</Text>
									)}
								</Flex>
								<Flex w='full' h='61px' mb={-4} direction='column'>
									<Controller
										control={control}
										name='password'
										render={({ field: { value, onChange, onBlur } }) => (
											<Input
												value={value}
												onChange={onChange}
												onBlur={onBlur}
												placeholder='Пароль'
												borderColor={errors.login && 'red'}
											/>
										)}
									/>
									{errors.password && (
										<Text color='red'>{errors.password.message}</Text>
									)}
								</Flex>
								<Button type='submit' w='full' px={16}>
									Войти
								</Button>
								<Flex w='full' justify='space-between'>
									<Controller
										control={control}
										name='rememberMe'
										render={({ field: { value, onChange, onBlur } }) => (
											<Checkbox
												checked={value}
												onChange={onChange}
												onBlur={onBlur}
											>
												Запомнить меня
											</Checkbox>
										)}
									/>
									<Text>Забыли пароль?</Text>
								</Flex>
							</ModalBody>
						</form>
					</ModalContent>
				</Modal>
			)}
			{isShowSignUpModal && (
				<Modal
					isOpen={isShowSignUpModal}
					onClose={handleCloseSignUpModal}
					isCentered
				>
					<ModalOverlay />
					<ModalContent>
						<form>
							<ModalBody
								pt={8}
								pb={8}
								display='flex'
								flexDirection='column'
								alignItems='center'
								gap={8}
							>
								<Heading size='md'>Регистрация</Heading>
								<Controller
									control={control}
									name='login'
									render={({ field: { value, onChange, onBlur } }) => (
										<Input
											value={value}
											onChange={onChange}
											onBlur={onBlur}
											placeholder='Эл. почта'
										/>
									)}
								/>
								<Button type='submit' w='full' pr={16} pl={16}>
									Зарегистрироваться
								</Button>

								<Text>Уже есть аккаунт?</Text>
								<Text>
									Используя ConverterFunds, вы соглашаетесь с условиями
									использования сервиса
								</Text>
							</ModalBody>
						</form>
					</ModalContent>
				</Modal>
			)}
		</>
	)
}
