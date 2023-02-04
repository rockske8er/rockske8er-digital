import {
  Box,
  chakra,
  Link,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { LinkIcon } from '../../Link/LinkIcon'

interface FeaturesProps {}

// eslint-disable-next-line no-empty-pattern
export function Features({}: FeaturesProps) {
  const hbgh = useColorModeValue('gray.100', 'brand.500')
  const hbg = useColorModeValue('gray.50', 'brand.400')
  const tcl = useColorModeValue('gray.900', 'gray.50')

  return (
    <>
      <SimpleGrid
        columns={{
          base: 1,
          md: 3,
          lg: 5,
        }}
        pos="relative"
        gap={{
          base: 6,
          sm: 8,
        }}
        px={5}
        py={6}
        p={{
          sm: 8,
        }}
      >
        <LinkIcon
          title="Sistemas Web"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              // eslint-disable-next-line react/no-unknown-property
              stroke-w="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          }
        >
          Criação de Sistemas web
        </LinkIcon>

        <LinkIcon
          title="Gerenciamento de Midias Sociais"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              // eslint-disable-next-line react/no-unknown-property
              stroke-w="2"
              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
            />
          }
        >
          Gerenciamento de Midias Sociais
        </LinkIcon>

        <LinkIcon
          title="Landpages"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              // eslint-disable-next-line react/no-unknown-property
              stroke-w="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          }
        >
          Criação de landpages
        </LinkIcon>

        <LinkIcon
          title="Blogs"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              // eslint-disable-next-line react/no-unknown-property
              stroke-w="2"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          }
        >
          Criação de Blogs
        </LinkIcon>

        <LinkIcon
          title="Desenvovimento de Apps"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              // eslint-disable-next-line react/no-unknown-property
              stroke-w="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          }
        >
          Criação de Apps
        </LinkIcon>
      </SimpleGrid>
      <Box
        px={{
          base: 5,
          sm: 8,
        }}
        py={5}
        bg={hbg}
        display={{
          sm: 'flex',
        }}
      >
        <Stack
          direction={{
            base: 'row',
          }}
          spacing={{
            base: 6,
            sm: 10,
          }}
        >
          <Box display="flow-root">
            <Link
              m={-3}
              p={3}
              display="flex"
              alignItems="center"
              rounded="md"
              fontSize="md"
              color={tcl}
              _hover={{
                bg: hbgh,
              }}
            >
              <chakra.svg
                flexShrink={0}
                h={6}
                w={6}
                color="gray.400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  // eslint-disable-next-line react/no-unknown-property
                  stroke-w="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  // eslint-disable-next-line react/no-unknown-property
                  stroke-w="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </chakra.svg>
              <chakra.span ml={3}>Saiba Mais</chakra.span>
            </Link>
          </Box>

          <Box display="flow-root">
            <Link
              m={-3}
              p={3}
              display="flex"
              alignItems="center"
              rounded="md"
              fontSize="md"
              color={tcl}
              _hover={{
                bg: hbgh,
              }}
            >
              <chakra.svg
                flexShrink={0}
                h={6}
                w={6}
                color="gray.400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  // eslint-disable-next-line react/no-unknown-property
                  stroke-w="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </chakra.svg>
              <chakra.span ml={3}>Fale conosco</chakra.span>
            </Link>
          </Box>
        </Stack>
      </Box>
    </>
  )
}
