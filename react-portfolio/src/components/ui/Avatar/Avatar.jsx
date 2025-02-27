'use client';

import { Avatar as ChakraAvatar } from '@chakra-ui/react';
import AvatarFallback from './AvatarFallback';

const Avatar = ({
  ref,
  children,
  name,
  src,
  srcSet,
  loading,
  icon,
  fallback,
  ...rest
}) => {
  return (
    <ChakraAvatar.Root ref={ref} {...rest}>
      <AvatarFallback name={name} icon={icon}>
        {fallback}
      </AvatarFallback>
      <ChakraAvatar.Image src={src} srcSet={srcSet} loading={loading} />
      {children}
    </ChakraAvatar.Root>
  );
};

export default Avatar;
