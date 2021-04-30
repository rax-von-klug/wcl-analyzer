import { Flex, ChakraProvider } from '@chakra-ui/react';
import * as React from 'react';
import theme from './theme';
import { Logo } from './components/core/Logo';
import { PageContent } from './components/core/PageContent';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" height="100vh">
        <Flex align="center" bg="#222431" borderBottom="1px solid #36384a" color="white" px="6" minH="16">
          <Flex justify="space-between" align="center" w="full">
            <Logo display={{ base: 'none', lg: 'block' }} flexShrink={0} h="5" marginEnd="10" />
          </Flex>
        </Flex>
        { /* <PageHeader /> */ }
        <PageContent />
      </Flex>
    </ChakraProvider>
  )
}

export default App;