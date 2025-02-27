import { Box } from '@chakra-ui/react';

const FullScreenSection = ({
  children,
  backgroundColor,
  color = 'black',
  ...boxProps
}) => {
  return (
    <Box
      backgroundColor={backgroundColor}
      color={color}
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Box
        width='100%'
        maxWidth='1280px'
        color='white'
        paddingTop={20}
        paddingBottom={8}
        paddingX={4}
        {...boxProps}
        minHeight='100vh'
      >
        {children}
      </Box>
    </Box>
  );
};

export default FullScreenSection;
