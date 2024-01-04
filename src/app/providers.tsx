'use client'

import { ReactNode } from 'react'
import theme from '@/theme/theme'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }: { children: ReactNode }) {
	return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
