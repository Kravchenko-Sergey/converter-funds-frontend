import { List, ListItem } from '@chakra-ui/react'
import NavItem from '@/components/navigation/nav-item'
import { FaBriefcase } from 'react-icons/fa6'
import { BsPieChartFill } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'

type NavigationProps = {
	collapse: boolean
}

export default function Navigation({ collapse }: NavigationProps) {
	const items = [
		{
			type: 'link',
			title: 'Portfolio',
			icon: FaBriefcase,
			path: '/portfolio'
		},
		{
			type: 'link',
			title: 'Analytics',
			icon: BsPieChartFill,
			path: '/analytics'
		},
		{
			type: 'link',
			title: 'Profile',
			icon: FaUserCircle,
			path: '/profile'
		}
	]

	return (
		<List>
			{items.map((item, index) => (
				<ListItem key={index}>
					<NavItem item={item} collapse={collapse} />
				</ListItem>
			))}
		</List>
	)
}
