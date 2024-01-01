import { Box } from '@chakra-ui/react'
import Navigation from '@/components/navigation/navigation'

type SidebarProps = {
	collapse: boolean
}

export default function Sidebar({ collapse }: SidebarProps) {
	return (
		<Box w='full' p={2}>
			<Navigation collapse={collapse} />
		</Box>
	)
}
