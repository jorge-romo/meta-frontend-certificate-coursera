import React from 'react';
import { HStack, IconButton, Link } from '@chakra-ui/react';
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaStackOverflow,
  FaEnvelope,
} from 'react-icons/fa';

const socials = [
  {
    name: 'Email',
    icon: FaEnvelope,
    url: 'mailto: hello@pete.com',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com',
  },
  {
    name: 'Medium',
    icon: FaMedium,
    url: 'https://medium.com',
  },
  {
    name: 'StackOverflow',
    icon: FaStackOverflow,
    url: 'https://stackoverflow.com',
  },
];

const Header = () => {
  return (
    <HStack
      position='fixed'
      top={0}
      right={0}
      left={0}
      px={16}
      py={4}
      zIndex={1}
      backgroundColor='#18181b'
      justifyContent='space-between'
      alignItems='center'
    >
      <HStack gap={6}>
        {socials
          .filter((link) => !!link.url)
          .map((link) => (
            <IconButton
              as='a'
              key={link.name}
              href={link.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              {React.createElement(link.icon, {
                style: { width: '1rem', height: '1rem' },
              })}
              <span>{link.name}</span>
            </IconButton>
          ))}
      </HStack>
      <HStack as='nav' gap={8}>
        <Link href='#projects' color='white'>
          Projects
        </Link>
        <Link href='#contact-me' color='white'>
          Contact Me
        </Link>
      </HStack>
    </HStack>
  );
};
export default Header;
