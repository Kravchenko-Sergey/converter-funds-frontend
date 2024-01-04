'use client'

import { ReactNode, useState } from 'react'
import { Flex, HStack, Icon, useColorModeValue } from '@chakra-ui/react'
import Sidebar from '@/components/sidebar'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

export default function Layout({ children }: { children: ReactNode }) {
	const [collapse, setCollapse] = useState(true)

	const handleCollapse = () => setCollapse(!collapse)

	const bg = useColorModeValue('white', '#2c3040')
	const bgMain = useColorModeValue('#f7f9fb', '#21232f')
	const bgCollapse = useColorModeValue('#f7f9fb', '#21232f')

	return (
		<HStack w='full' h='100vh' bg={bg} flexDirection='column' gap={0}>
			<HStack as='header' w='full' h={74} borderBottom='1px solid rgba(0,0,0,.12)'>
				<Flex
					w={collapse ? 234 : 20}
					minW={collapse ? 234 : 20}
					h={74}
					borderRight='1px solid rgba(0,0,0,.12)'
					justifySelf='self-start'
					transition='ease-in-out .2s'
				></Flex>
			</HStack>
			<HStack as='main' w='full' h='100vh' gap={0}>
				<Flex
					as='aside'
					w={collapse ? 234 : 20}
					minW={collapse ? 234 : 20}
					h='full'
					bg={bg}
					alignItems='center'
					flexDirection='column'
					borderRight='1px solid rgba(0,0,0,.12)'
					transition='ease-in-out .2s'
					position='relative'
				>
					<Flex
						w={6}
						h={6}
						bgColor={bgCollapse}
						_hover={{ bgColor: 'gray.500', cursor: 'pointer' }}
						borderRadius={50}
						alignItems='center'
						justifyContent='center'
						position='absolute'
						top={-3}
						right={-3}
						onClick={handleCollapse}
					>
						<Icon as={collapse ? ArrowLeftIcon : ArrowRightIcon} w={3} h={3} />
					</Flex>
					<Sidebar collapse={collapse} />
				</Flex>
				<Flex as='article' w='full' h='100vh' pr={4} pl={4} bgColor={bgMain}>
					{children}
				</Flex>
			</HStack>
		</HStack>
	)
}
