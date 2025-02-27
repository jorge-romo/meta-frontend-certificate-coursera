import { Field as ChakraField } from '@chakra-ui/react';

const FormField = ({
  ref,
  children,
  label,
  helperText,
  errorText,
  optionalText,
  invalid,
  required,
  ...fieldRootProps
}) => {
  return (
    <ChakraField.Root
      ref={ref}
      invalid={invalid}
      required={required}
      {...fieldRootProps}
    >
      {label && (
        <ChakraField.Label>
          {label}
          <ChakraField.RequiredIndicator fallback={optionalText} />
        </ChakraField.Label>
      )}
      {children}
      {helperText && (
        <ChakraField.HelperText>{helperText}</ChakraField.HelperText>
      )}
      {errorText && <ChakraField.ErrorText>{errorText}</ChakraField.ErrorText>}
    </ChakraField.Root>
  );
};

export default FormField;
