import { List, ListItem } from '@chakra-ui/react'
import NavItem from '@/components/navigation/nav-item'
import { FaBriefcase } from 'react-icons/fa6'
import { BsPieChartFill } from 'react-icons/bs'
import { FaClipboardList } from 'react-icons/fa'
import { FaLifeRing } from 'react-icons/fa'
import { FaUserCircle } from 'react-icons/fa'
import { FaBell } from 'react-icons/fa'
import { RiLogoutBoxRFill } from 'react-icons/ri'

type NavigationProps = {
	collapse: boolean
}

export default function Navigation({ collapse }: NavigationProps) {
	const items = [
		{
			title: 'Portfolio',
			icon: FaBriefcase,
			path: '/portfolio'
		},
		{
			title: 'Analytics',
			icon: BsPieChartFill,
			path: '/analytics'
		},
		{
			title: 'Transactions',
			icon: FaClipboardList,
			path: '/transactions'
		},
		{
			title: 'Help',
			icon: FaLifeRing,
			path: '/help'
		},
		{
			title: 'Profile',
			icon: FaUserCircle,
			path: '/profile'
		},
		{
			title: 'Updates',
			icon: FaBell
		},
		{
			title: 'Logout',
			icon: RiLogoutBoxRFill,
			path: '/'
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
