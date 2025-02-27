import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, Heading, Input, Textarea, VStack } from '@chakra-ui/react';
import { useAlertDialogContext } from '../context/AlertDialogContext';
import FullScreenSection from './FullScreenSection';
import FormField from './ui/FormField';
import Select from './ui/Select';

const contactMeFormSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    reason: z.string(),
    message: z.string().optional(),
  })
  .required();

const contactReasons = [
  'General Inquiry',
  'Collaboration',
  'Feedback',
  'Other',
].map((reason) => ({
  label: reason,
  value: reason,
}));

const ContactMeSection = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: zodResolver(contactMeFormSchema), // Apply the zodResolver
    defaultValues: {
      name: '',
      email: '',
      reason: '',
      message: '',
    },
  });
  const { open } = useAlertDialogContext();

  const onSubmit = (_data) => {
    /**
     * Implement the submit function here
     * You can use the api calls here.
     */

    open('Thanks for contacting me');
  };

  return (
    <FullScreenSection
      as='form'
      id='contact-me'
      onSubmit={handleSubmit(onSubmit)}
      backgroundColor='#512DA8'
    >
      <Heading as='h2' size='2xl' marginBottom={4}>
        Contact me
      </Heading>
      <VStack gap={6}>
        <FormField
          label='Name'
          invalid={!!errors.name}
          errorText={errors.name?.message}
        >
          <Input {...register('name')} />
        </FormField>
        <FormField
          label='Email'
          invalid={!!errors.email}
          errorText={errors.email?.message}
        >
          <Input {...register('email')} />
        </FormField>
        <FormField
          label='Type of enquiry'
          invalid={!!errors.reason}
          errorText={errors.reason?.message}
        >
          <Controller
            name='reason'
            control={control}
            render={({ field }) => (
              <Select
                name={field.name}
                value={field.value}
                onValueChange={(value) => field.onChange(value)}
                onInteractOutside={() => field.onBlur()}
                options={contactReasons}
              />
            )}
          />
        </FormField>
        <FormField
          label='Message'
          invalid={!!errors.message}
          errorText={errors.message?.message}
        >
          <Textarea {...register('message')} rows={6} />
        </FormField>
        <Button
          type='submit'
          colorPalette='purple'
          width='full'
          isLoading={isLoading}
        >
          Submit
        </Button>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
