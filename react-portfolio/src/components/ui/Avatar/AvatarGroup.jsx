'use client';

import { Avatar as ChakraAvatar, Group } from '@chakra-ui/react';

const AvatarGroup = ({ ref, size, variant, borderless, ...rest }) => {
  return (
    <ChakraAvatar.PropsProvider value={{ size, variant, borderless }}>
      <Group gap='0' spaceX='-3' ref={ref} {...rest} />
    </ChakraAvatar.PropsProvider>
  );
};

export default AvatarGroup;
