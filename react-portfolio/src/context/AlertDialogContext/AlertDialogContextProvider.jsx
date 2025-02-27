'use client';

import { useCallback, useState } from 'react';
import AlertDialogContext from './AlertDialogContext';

const AlertDialogProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState('info');
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');

  const open = useCallback((message, type = 'info', title = '') => {
    setStatus(type);
    setMessage(message);
    setTitle(title);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setStatus('info');
    setMessage('');
    setTitle('');
    setIsOpen(false);
  }, []);

  return (
    <AlertDialogContext.Provider
      value={{
        isOpen,
        status,
        title,
        message,
        open,
        close,
      }}
    >
      {children}
    </AlertDialogContext.Provider>
  );
};

export default AlertDialogProvider;
