import { Heading, Text } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';
import { Avatar } from './ui/Avatar';

const greeting = 'Hello, I am Pete!';
const bio = 'A frontend developer\nspecialised in React';

const AboutMeSection = () => {
  return (
    <FullScreenSection
      id='about-me'
      backgroundColor='#2a4365'
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      paddingTop={8}
    >
      <Avatar
        name='Pete'
        src='https://i.pravatar.cc/150?img=7'
        size='2xl'
        margin={4}
      />
      <Heading as='h2' size='md' marginBottom={4}>
        {greeting}
      </Heading>
      <Text as='p' textStyle='4xl' whiteSpace='pre-line' fontWeight='semibold'>
        {bio}
      </Text>
    </FullScreenSection>
  );
};

export default AboutMeSection;
