import {
	Box,
	Button,
	Heading,
	Link,
	ListIcon,
	ListItem,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	UnorderedList,
	useColorModeValue,
	useDisclosure
} from '@chakra-ui/react'
import { usePathname, useRouter } from 'next/navigation'
import type { IconType } from 'react-icons'
import { useRef } from 'react'

type Item = {
	title: string
	icon: IconType
	path?: string
}

type NavItemProps = {
	item: Item
	collapse: boolean
}

export default function NavItem({ item, collapse }: NavItemProps) {
	const router = useRouter()
	const pathname = usePathname()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef = useRef(null)

	const { title, icon, path } = item

	if (title === 'Updates') {
		return (
			<>
				<Modal onClose={onClose} finalFocusRef={btnRef} isOpen={isOpen} scrollBehavior={'inside'}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Service updates</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Text fontSize='md'>
								We are pleased to announce that our service has become even more convenient, faster and new features
								have appeared.
							</Text>
							<Text mt={4} mb={4} fontWeight={700}>
								January 2024
							</Text>
							<UnorderedList>
								<ListItem>Added a dark theme</ListItem>
							</UnorderedList>
						</ModalBody>
						<ModalFooter>
							<Button onClick={onClose}>Close</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
				<Box
					as='button'
					display='flex'
					alignItems='center'
					my={6}
					marginLeft={collapse ? 5 : 0}
					gap={1}
					fontWeight='medium'
					w='full'
					color={pathname === path ? '#1976d2' : '#96a5be'}
					_hover={{ textDecoration: 'none', color: 'gray.600' }}
					justifyContent={!collapse ? 'center' : ''}
					ref={btnRef}
					onClick={onOpen}
				>
					<ListIcon as={icon} w={6} h={6} margin={0} />
					{collapse && <Text marginLeft={2}>{title}</Text>}
				</Box>
			</>
		)
	}

	return (
		<Box
			display='flex'
			alignItems='center'
			my={6}
			marginLeft={collapse ? 5 : 0}
			gap={1}
			fontWeight='medium'
			w='full'
			color={pathname === path ? '#1976d2' : '#96a5be'}
			_hover={{ textDecoration: 'none', color: 'gray.600' }}
			justifyContent={!collapse ? 'center' : ''}
			onClick={() => {
				router.push(`${path}`)
			}}
		>
			<ListIcon as={icon} w={6} h={6} margin={0} />
			{collapse && <Text marginLeft={2}>{title}</Text>}
		</Box>
	)
}
