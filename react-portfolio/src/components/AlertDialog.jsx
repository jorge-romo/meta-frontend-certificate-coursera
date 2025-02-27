import {
  Button,
  Dialog as ChakraDialog,
  CloseButton,
  Portal,
} from '@chakra-ui/react';
import { useAlertDialogContext } from '../context/AlertDialogContext';

function AlertDialog() {
  const { isOpen, title, message, close } = useAlertDialogContext();

  const handleOpenChange = (e) => {
    if (!e.open) {
      close();
    }
  };

  return (
    <ChakraDialog.Root
      lazyMount
      role='alertdialog'
      open={isOpen}
      onOpenChange={handleOpenChange}
    >
      <Portal>
        <ChakraDialog.Backdrop />
        <ChakraDialog.Positioner>
          <ChakraDialog.Content asChild={false}>
            <ChakraDialog.Header>
              <ChakraDialog.Title>{title}</ChakraDialog.Title>
              <ChakraDialog.CloseTrigger
                position='absolute'
                top='2'
                insetEnd='2'
                asChild
              >
                <CloseButton size='sm' />
              </ChakraDialog.CloseTrigger>
            </ChakraDialog.Header>
            <ChakraDialog.Body>{message}</ChakraDialog.Body>
            <ChakraDialog.Footer>
              <ChakraDialog.CloseTrigger asChild>
                <Button variant='outline'>Close</Button>
              </ChakraDialog.CloseTrigger>
            </ChakraDialog.Footer>
          </ChakraDialog.Content>
        </ChakraDialog.Positioner>
      </Portal>
    </ChakraDialog.Root>
  );
}

export default AlertDialog;
