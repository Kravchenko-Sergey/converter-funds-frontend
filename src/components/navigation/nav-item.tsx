import { Box, Heading, Link, ListIcon, Text } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import type { IconType } from 'react-icons'

type Item = {
	type: string
	title: string
	icon: IconType
	path: string
}

type NavItemProps = {
	item: Item
	collapse: boolean
}

export default function NavItem({ item, collapse }: NavItemProps) {
	const pathname = usePathname()
	const { type, title, icon, path } = item

	if (type === 'link') {
		return (
			<Box display='flex' alignItems='center' my={6} justifyContent='center' marginLeft={collapse ? 5 : 0}>
				<Link
					href={path}
					gap={1}
					display='flex'
					alignItems='center'
					fontWeight='medium'
					w='full'
					color={pathname === path ? 'gray.800' : 'gray.400'}
					_hover={{ textDecoration: 'none', color: 'gray.600' }}
					justifyContent={!collapse ? 'center' : ''}
				>
					<ListIcon as={icon} w={6} h={6} margin={0} />
					{collapse && <Text marginLeft={2}>{title}</Text>}
				</Link>
			</Box>
		)
	}

	return (
		<Heading
			color='gray.400'
			fontWeight='medium'
			textTransform='uppercase'
			fontSize='sm'
			borderTopWidth={1}
			borderColor='gray.100'
			pt={collapse ? 8 : 0}
			my={6}
		>
			<Text display={collapse ? 'flex' : 'none'}>{title}</Text>
		</Heading>
	)
}
