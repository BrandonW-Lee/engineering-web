'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { Textarea } from '../ui/textarea';

const FormSchema = z.object({
  name: z.string().min(3, {
    message: 'Name must be at least 3 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
});

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(data) {
    toast({
      title: 'Your message has been sent!',
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Jacob Cho" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="jacob@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message (optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="I'd like to know more about..."
                  rows={10}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          <Send className="mr-2 h-4 w-4" />
          Send
        </Button>
      </form>
    </Form>
  );
}
