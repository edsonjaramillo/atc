'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { type z } from 'zod';

import { Button } from '@/app/components/ui/Button';
import { Form } from '@/app/components/ui/Form';
import { Input, InputGroup, Textarea } from '@/app/components/ui/Input';
import { Label } from '@/app/components/ui/Label';
import { Text } from '@/app/components/ui/Text';
import { zContactFormSchema } from '@/app/validation/contact.validation';

const toastId = 'contact-form-toast';
type FormSchema = z.infer<typeof zContactFormSchema>;

async function onSubmit() {
  // async function onSubmit(_: FormSchema) {
  toast.info('Sending message...', { id: toastId });
  toast.success('Message sent!', { id: toastId });
}

// function onInvalid(errors: FieldErrors<FormSchema>) {
function onInvalid() {
  toast.error('Please fix the errors in the form.', { id: toastId });
}

export function ContactForm() {
  const methods = useForm<FormSchema>({ resolver: zodResolver(zContactFormSchema) });
  const { formState, handleSubmit } = methods;
  const { isSubmitting } = formState;
  return (
    <div className="py-8">
      <div className="mb-8 space-y-1">
        <Text as="h2" size="4xl" className="font-bold">
          Contact Us
        </Text>
        <Text as="p" color="neutral">
          We&apos;ll get back to you as soon as we can.
        </Text>
      </div>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit, onInvalid)}>
          <InputGroup>
            <Label field="name">Name</Label>
            <Input field="name" type="text" autoComplete="name" required />
          </InputGroup>
          <InputGroup>
            <Label field="organization">Organization</Label>
            <Input field="organization" type="text" required />
          </InputGroup>
          <InputGroup>
            <Label field="destination">Destination</Label>
            <Input field="destination" type="text" required />
          </InputGroup>
          <InputGroup>
            <Label field="email">Email</Label>
            <Input field="email" type="email" autoComplete="email" required />
          </InputGroup>
          <InputGroup>
            <Label field="phoneNumber">Phone Number</Label>
            <Input field="phoneNumber" type="tel" autoComplete="tel" required />
          </InputGroup>
          <InputGroup>
            <Label field="message">Message</Label>
            <Textarea field="message" required />
          </InputGroup>
          <Button type="submit" className="ml-auto" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </Form>
      </FormProvider>
    </div>
  );
}
