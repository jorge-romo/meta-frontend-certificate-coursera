'use client';

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from '@chakra-ui/react';
// import { ColorModeProvider } from './color-mode';

const customConfig = defineConfig({
  theme: {},
});

const system = createSystem(defaultConfig, customConfig);

const ChakraUIProvider = ({ children }) => {
  return (
    <ChakraProvider value={system}>
      {/* <ColorModeProvider {...props} /> */}
      {children}
    </ChakraProvider>
  );
};

export default ChakraUIProvider;
