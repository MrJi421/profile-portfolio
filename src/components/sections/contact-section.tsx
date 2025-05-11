'use client';

import SectionWrapper from '@/components/layout/section-wrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useForm, type SubmitHandler } from 'react-hook-form';
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
    // IMPORTANT: Replace with your actual Google Form ID
    // This is the ID found in your Google Form's URL.
    // For example, if your form URL is https://docs.google.com/forms/d/e/1FAIpQLSc_xxxxxxxxxxxxxxxxx_yyyyyyyyxxxxxx/viewform
    // The ID is 1FAIpQLSc_xxxxxxxxxxxxxxxxx_yyyyyyyyxxxxxx
    const googleFormId = "YOUR_GOOGLE_FORM_ID_PLACEHOLDER"; // User needs to replace this

    // IMPORTANT: Replace with your actual entry IDs from your Google Form
    // To find these:
    // 1. Open your Google Form.
    // 2. Click the three dots (More options) menu in the top right.
    // 3. Select "Get pre-filled link".
    // 4. Fill in sample data for each field (e.g., "Test Name" for Name field).
    // 5. Click "Get link" at the bottom.
    // 6. Click "Copy link".
    // 7. Paste the link into a text editor. It will look something like:
    //    https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID_PLACEHOLDER/viewform?usp=pp_url&entry.123456789=Test+Name&entry.987654321=test@example.com&entry.112233445=Test+Message
    //    The `entry.XXXXXXX` parts are your field entry IDs.
    const nameEntryId = "entry.YOUR_NAME_FIELD_ID_PLACEHOLDER"; // Replace with actual ID for Name
    const emailEntryId = "entry.YOUR_EMAIL_FIELD_ID_PLACEHOLDER"; // Replace with actual ID for Email
    const messageEntryId = "entry.YOUR_MESSAGE_FIELD_ID_PLACEHOLDER"; // Replace with actual ID for Message

    const submitUrl = `https://docs.google.com/forms/d/e/${googleFormId}/formResponse`;

    const formData = new URLSearchParams();
    formData.append(nameEntryId, data.name);
    formData.append(emailEntryId, data.email);
    formData.append(messageEntryId, data.message);

    try {
      await fetch(submitUrl, {
        method: 'POST',
        mode: 'no-cors', // Google Forms don't typically return CORS headers. 'no-cors' allows submission.
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      // With mode: 'no-cors', we can't check response.ok or status.
      // We assume success if fetch doesn't throw an error (e.g. network error).
      toast({
        title: "Message Sent! 🚀",
        description: "Thanks for reaching out. Your message has been submitted.",
      });
      reset(); // Reset form fields
    } catch (error) {
      console.error("Error submitting to Google Form:", error);
      toast({
        title: "Submission Error 😔",
        description: "Could not send your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    }
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
