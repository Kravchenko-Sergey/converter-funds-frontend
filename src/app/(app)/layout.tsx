'use client'

import { ReactNode, useState } from 'react'
import { Flex, HStack, Icon } from '@chakra-ui/react'
import Sidebar from '@/components/sidebar'
import { ArrowLeftIcon, ArrowRightIcon, AtSignIcon } from '@chakra-ui/icons'

export default function Layout({ children }: { children: ReactNode }) {
	const [collapse, setCollapse] = useState(true)

	const handleCollapse = () => setCollapse(!collapse)

	return (
		<HStack w='full' h='100vh' bg='white' flexDirection='column' gap={0}>
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
			<HStack as='main' w='full' h='100vh'>
				<Flex
					as='aside'
					w={collapse ? 234 : 20}
					minW={collapse ? 234 : 20}
					h='full'
					bg='white'
					alignItems='center'
					flexDirection='column'
					borderRight='1px solid rgba(0,0,0,.12)'
					transition='ease-in-out .2s'
					position='relative'
				>
					<Flex
						w={6}
						h={6}
						bgColor='gray.100'
						_hover={{ bgColor: 'gray.200', cursor: 'pointer' }}
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
				<Flex as='article'>{children}</Flex>
			</HStack>
		</HStack>
	)
}
