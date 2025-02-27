import { createContext } from 'react';

const AlertDialogContext = createContext({
  isOpen: false,
  status: 'info', // "success" | "warning" | "error" | "info"
  title: '',
  message: '',
  onOpen: () => {},
  onClose: () => {},
});

export default AlertDialogContext;
