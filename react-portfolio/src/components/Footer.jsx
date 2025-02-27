import { Box, Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as='footer' backgroundColor='#18181b' px={4} py={12}>
      <Flex
        justifyContent='center'
        alignItems='center'
        maxWidth='1024px'
        margin='0 auto'
      >
        <Text color='white'>Pete • © 2024</Text>
      </Flex>
    </Box>
  );
};
export default Footer;
