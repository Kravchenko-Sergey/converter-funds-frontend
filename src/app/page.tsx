'use client'

import {
	Center,
	Flex,
	Heading,
	Text,
	UnorderedList,
	ListItem,
	Button,
	Card,
	CardHeader,
	CardBody,
	Divider
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

export default function Home() {
	const router = useRouter()

	return (
		<Flex pl={60} pr={60} position={'relative'}>
			<Flex direction='column'>
				<Flex pt={8} pb={8} w={'100%'} align={'center'}>
					<Heading as='h1' size='md' flex={'1 1 20%'}>
						CONVERTERFUNDS
					</Heading>
					<Flex flex={'1 1 60%'} gap={8} justifyContent={'right'}>
						<Text>О Сервисе</Text>
						<Text>Преимущества</Text>
						<Text>Нам доверяют</Text>
						<Text>Возможности</Text>
					</Flex>
					<Flex flex={'1 1 20%'} gap={8} justifyContent={'center'}>
						<Text
							onClick={() => {
								router.push('/portfolio')
							}}
						>
							Войти
						</Text>
						<Text>Регистрация</Text>
					</Flex>
				</Flex>
				<Divider w={'200%'} position={'absolute'} top={88} right={-60} />
				<Flex h={'88vh'} alignItems={'center'}>
					<Flex direction={'column'} ml={48} gap={16}>
						<Heading as='h1' size='xl' flex={'1 1 20%'}>
							Учет и контороль ваших инвестиций
						</Heading>
						<UnorderedList spacing={4}>
							<ListItem fontSize='16px'>
								Добавляйте купленные акции и облигации
							</ListItem>
							<ListItem fontSize='16px'>Следите за портфелем</ListItem>
							<ListItem fontSize='16px'>Анализируйте доходность</ListItem>
						</UnorderedList>
						<Button
							pr={8}
							pl={8}
							pb={1}
							width={'fit-content'}
							borderRadius={24}
						>
							Начать пользоваться бесплатно
						</Button>
					</Flex>
				</Flex>
				<Flex pb={24} direction={'column'} align={'center'}>
					<Heading mb={16} size='lg'>
						Почему нам доверяют
					</Heading>
					<Flex gap={4}>
						<Card>
							<CardHeader>
								<Heading h={8} size='md'>
									Более девяти лет работы
								</Heading>
							</CardHeader>
							<CardBody>
								<Text>
									Более 100 млрд. рублей активов находится в портфелях наших
									пользователей
								</Text>
							</CardBody>
						</Card>
						<Card>
							<CardHeader>
								<Heading h={8} size='md'>
									Команда профессионалов
								</Heading>
							</CardHeader>
							<CardBody>
								<Text>
									Каждый разработчик сервиса имеет брокерский счет и опыт на
									бирже
								</Text>
							</CardBody>
						</Card>
						<Card>
							<CardHeader>
								<Heading h={8} size='md'>
									Полная анонимность
								</Heading>
							</CardHeader>
							<CardBody>
								<Text>
									Мы не требуем никаких документов и не храним ваши персональные
									данные
								</Text>
							</CardBody>
						</Card>
						<Card>
							<CardHeader>
								<Heading h={8} size='md'>
									Оперативная поддержка
								</Heading>
							</CardHeader>
							<CardBody>
								<Text>
									Задайте вопрос на web@converterfunds.com и мы гарантированно
									ответим вам в течение 24 часов
								</Text>
							</CardBody>
						</Card>
					</Flex>
				</Flex>
				<Flex pt={16} pb={32} direction={'column'} align={'center'} gap={8}>
					<Heading size='lg'>
						Присоединяйтесь к более чем 300 000 инвесторов!
					</Heading>
					<Button pr={8} pl={8} width={'fit-content'} borderRadius={24}>
						Начать пользоваться бесплатно
					</Button>
				</Flex>
				<Flex pt={8} pb={8} justify={'space-between'}>
					<Text>Converterfunds Intelligent investments</Text>
					<Text>OOO Конвертерфандс ОГРН 1171690041270 ИНН 1655386205</Text>
				</Flex>
			</Flex>
		</Flex>
	)
}
