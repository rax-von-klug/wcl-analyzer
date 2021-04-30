import { Box, Container, Input, Text, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi';
import * as React from 'react'

export const PageContent = () => {
  return (
    <Box as="main" py="8" flex="1">
      <Container maxW="4xl">
        <Box bg="#222431" p="6" border="1px solid #36384a" shadow="base" w="4xl" >
          <Text fontSize="lg" color="white" fontWeight="semibold" textAlign="center" mb="4">
            Enter the Classic WarcraftLogs url or report code you wish to analyze.
          </Text>
          <InputGroup w="full">
              <InputRightElement>
                <IconButton icon={ <FiSearch /> } aria-label="Fetch Log" colorScheme="#36384a" />
              </InputRightElement>
              <Input bg="#36384a" _hover={{ borderColor: "#36384a" }}
                color="white" borderColor="#36384a" focusBorderColor="#36384a"
                placeholder="https://classic.warcraftlogs.com/reports/<report code>" />
            </InputGroup>
        </Box>
      </Container>
    </Box>
  )
}