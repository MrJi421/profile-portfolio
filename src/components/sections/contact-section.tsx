'use client';

import SectionWrapper from '@/components/layout/section-wrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from "@/hooks/use-toast";
import { Send } from 'lucide-react';
import FadeIn from '@/components/shared/fade-in';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    toast({
      title: "Message Sent! 🚀",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    reset();
  };

  return (
    <SectionWrapper id="contact" className="bg-secondary/30">
      <FadeIn className="max-w-2xl mx-auto text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Get in Touch</h2>
        <p className="text-lg text-foreground/80">
          Have a project in mind, a question, or just want to say hello? Feel free to reach out!
        </p>
      </FadeIn>

      <FadeIn delay={200} className="mt-12 max-w-xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-8 bg-card rounded-xl shadow-2xl">
          <div>
            <Label htmlFor="name" className="text-lg font-medium text-primary">Full Name</Label>
            <Input
              id="name"
              type="text"
              className="mt-2 text-base"
              placeholder="Your Name"
              {...register("name")}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
          </div>
          <div>
            <Label htmlFor="email" className="text-lg font-medium text-primary">Email Address</Label>
            <Input
              id="email"
              type="email"
              className="mt-2 text-base"
              placeholder="you@example.com"
              {...register("email")}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
          </div>
          <div>
            <Label htmlFor="message" className="text-lg font-medium text-primary">Message</Label>
            <Textarea
              id="message"
              className="mt-2 text-base min-h-[120px]"
              placeholder="Your message..."
              {...register("message")}
              aria-invalid={errors.message ? "true" : "false"}
            />
            {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
          </div>
          <Button type="submit" size="lg" className="w-full shadow-md hover:shadow-lg transition-shadow" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
            {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
          </Button>
        </form>
      </FadeIn>
    </SectionWrapper>
  );
};

export default ContactSection;
