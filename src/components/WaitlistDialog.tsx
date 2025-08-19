import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(
  'https://rycftadewrklmsswzviy.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5Y2Z0YWRld3JrbG1zc3d6dml5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxODA1MzUsImV4cCI6MjA2ODc1NjUzNX0.IPzOzYrGthMKXkj9glTHZ_T9e-25fbrjjJ6KAh7gwjg' // Replace with your actual anon key from Supabase dashboard
);

const waitlistSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Please enter your full name" })
    .max(100),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .max(150),
  phone: z
    .string()
    .min(7, { message: "Please enter a valid phone number" })
    .max(30),
});

type WaitlistValues = z.infer<typeof waitlistSchema>;

type WaitlistDialogProps = {
  children: React.ReactNode;
};

const WaitlistDialog: React.FC<WaitlistDialogProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<WaitlistValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (values: WaitlistValues) => {
    setIsSubmitting(true);
    try {
      // Insert directly into Supabase
      const { error } = await supabase
        .from('waitlist_signups')
        .insert({
          full_name: values.fullName,
          email: values.email,
          phone: values.phone,
          source: 'blendn-landing',
          user_agent: navigator.userAgent,
          ip: '', // We can't get IP from frontend, but the trigger will still work
        });

      if (error) {
        // Handle duplicate email error gracefully
        if (error.code === '23505') {
          toast({
            title: "You're already on the waitlist!",
            description: "We'll be in touch soon.",
          });
          setOpen(false);
          form.reset();
          return;
        }
        throw error;
      }

      toast({
        title: "Thank you for joining the waitlist!",
        description: "We'll be in touch soon.",
      });
      setOpen(false);
      form.reset();
    } catch (error) {
      console.error('Waitlist submission error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Join the waitlist</DialogTitle>
          <DialogDescription>
            Enter your details and we\'ll notify you when Blendn is ready.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Jane Doe" />
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
                    <Input type="email" {...field} placeholder="jane@example.com" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="+1 555 123 4567" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-2">
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Join waitlist"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;


