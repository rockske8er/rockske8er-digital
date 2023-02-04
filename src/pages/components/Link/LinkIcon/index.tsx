import { Box, chakra, Link, useColorModeValue } from '@chakra-ui/react'

import React, { ReactNode } from 'react'

type LinkIconProps = {
  icon: any
  title: string
  children: ReactNode
}

export const LinkIcon = ({ children, icon, title }: LinkIconProps) => {
  const ic = useColorModeValue('brand.600', 'brand.50')
  const hbg = useColorModeValue('gray.50', 'brand.400')
  const tcl = useColorModeValue('gray.900', 'gray.50')
  const dcl = useColorModeValue('gray.500', 'gray.50')
  return (
    <Link
      m={-3}
      p={3}
      display="flex"
      alignItems="start"
      rounded="lg"
      _hover={{
        bg: hbg,
      }}
    >
      <chakra.svg
        flexShrink={0}
        h={6}
        w={6}
        color={ic}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        {icon}
      </chakra.svg>
      <Box ml={4}>
        <chakra.p fontSize="sm" fontWeight="700" color={tcl}>
          {title}
        </chakra.p>
        <chakra.p mt={1} fontSize="sm" color={dcl}>
          {children}
        </chakra.p>
      </Box>
    </Link>
  )
}
