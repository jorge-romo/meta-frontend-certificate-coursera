'use client';

import { Avatar as ChakraAvatar } from '@chakra-ui/react';

function getInitials(name) {
  const names = name.trim().split(' ');
  const firstName = names[0] != null ? names[0] : '';
  const lastName = names.length > 1 ? names[names.length - 1] : '';
  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0);
}

const AvatarFallback = ({ ref, children, name, icon, ...rest }) => {
  return (
    <ChakraAvatar.Fallback ref={ref} {...rest}>
      {children}
      {name != null && children == null && <>{getInitials(name)}</>}
      {name == null && children == null && (
        <ChakraAvatar.Icon asChild={!!icon}>{icon}</ChakraAvatar.Icon>
      )}
    </ChakraAvatar.Fallback>
  );
};

export default AvatarFallback;
