import { Features } from '@/components/Features'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box w={'full'} height="full" minH={'full'} flex={1} flexDirection="column">
      <Header />
      <Box mx={'auto'} maxW="7xl">
        <Hero />
        <Features />
      </Box>

      <Footer />
    </Box>
  )
}
