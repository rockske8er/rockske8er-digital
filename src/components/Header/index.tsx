import {
  useColorModeValue,
  useDisclosure,
  useColorMode,
  Button,
  CloseButton,
  VStack,
  chakra,
  Box,
  IconButton,
  HStack,
  Spacer,
  Link,
} from '@chakra-ui/react'

import { Features } from './Features'

import { FaMoon, FaSun } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { AiOutlineMenu, AiFillHome, AiOutlineInbox } from 'react-icons/ai'
import { BsFillCameraVideoFill } from 'react-icons/bs'

export const Header = () => {
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  const bg = useColorModeValue('white', 'gray.800')
  const cl = useColorModeValue('gray.800', 'white')
  const { toggleColorMode: toggleMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const mobileNav = useDisclosure()

  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? 'flex' : 'none'}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
        Dashboard
      </Button>
      <Button
        w="full"
        variant="solid"
        colorScheme="brand"
        leftIcon={<AiOutlineInbox />}
      >
        Inbox
      </Button>
      <Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
        Videos
      </Button>
    </VStack>
  )

  return (
    <chakra.header
      h="full"
      position={'relative'}
      display="flex"
      justifyContent="space-between"
      w="full"
      maxW="7xl"
      zIndex={'base'}
      margin="0 auto"
      px={{
        base: 2,
        sm: 4,
      }}
      py={4}
    >
      <Link display="flex" alignItems="center" href="/">
        Rocke8er.digital
      </Link>
      <Box
        display={{
          base: 'none',
          md: 'flex',
        }}
      >
        <HStack spacing={1}>
          <Box role="group">
            <Button
              bg={bg}
              color="gray.500"
              alignItems="center"
              fontSize="md"
              _hover={{
                color: cl,
              }}
              _focus={{
                boxShadow: 'none',
              }}
              rightIcon={<IoIosArrowDown />}
            >
              Soluções
            </Button>
            <Box
              pos="absolute"
              left={0}
              w="full"
              display="none"
              _groupHover={{
                display: 'block',
              }}
            >
              <Features />
            </Box>
          </Box>
          <Button
            bg={bg}
            color="gray.500"
            display="inline-flex"
            alignItems="center"
            fontSize="md"
            _hover={{
              color: cl,
            }}
            _focus={{
              boxShadow: 'none',
            }}
          >
            Blog
          </Button>
          <Button
            bg={bg}
            color="gray.500"
            display="inline-flex"
            alignItems="center"
            fontSize="md"
            _hover={{
              color: cl,
            }}
            _focus={{
              boxShadow: 'none',
            }}
          >
            Pricing
          </Button>
        </HStack>
      </Box>
      <Box>
        <Spacer />
        <Box display="flex" alignItems="center">
          <HStack spacing={1}>
            <Button colorScheme="brand" variant="ghost" size="sm">
              Fale Conosco
            </Button>
            <Button colorScheme="brand" variant="solid" size="sm">
              Entrar
            </Button>
          </HStack>
          <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            color="current"
            ml={{
              base: '0',
              md: '3',
            }}
            onClick={toggleMode}
            icon={<SwitchIcon />}
          />
          <IconButton
            display={{
              base: 'flex',
              md: 'none',
            }}
            aria-label="Open menu"
            fontSize="20px"
            color="gray.800"
            _dark={{
              color: 'inherit',
            }}
            variant="ghost"
            icon={<AiOutlineMenu />}
            onClick={mobileNav.onOpen}
          />
        </Box>
      </Box>

      {MobileNavContent}
    </chakra.header>
  )
}
