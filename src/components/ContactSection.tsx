import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Send, RefreshCw } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Graphic Designing",
  "Video Editing",
  "Ad Creation",
  "App Development",
  "Web Development",
  "Digital Marketing",
];

const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  service: z.string().min(1, "Please select a service"),
  captcha: z.string().min(1, "Please solve the captcha"),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate random math captcha
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return { num1, num2, answer: num1 + num2 };
  };

  const [captcha, setCaptcha] = useState(generateCaptcha);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      captcha: "",
    },
  });

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    form.setValue("captcha", "");
  };

  const onSubmit = async (data: FormValues) => {
    // Validate captcha
    if (parseInt(data.captcha) !== captcha.answer) {
      form.setError("captcha", { message: "Incorrect answer. Please try again." });
      refreshCaptcha();
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert({
          name: data.name.trim(),
          email: data.email.trim(),
          service: data.service,
        });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      form.reset();
      refreshCaptcha();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 md:py-32 px-4 relative">
      <div className="max-w-2xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <SectionLabel label="Contact" />
          <h2 className="gradient-text inline-block mb-6">Get In Touch</h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-primary rounded-full" />
            <div className="h-2 w-2 rounded-full bg-secondary" />
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-primary rounded-full" />
          </div>
          <p className="text-lead max-w-2xl mx-auto">
            Feel free to reach out if you'd like to connect or have any questions.
          </p>
        </div>

        {/* Contact form */}
        <div className="glass-card p-8 rounded-2xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your name"
                        className="bg-background/50 border-border/50 focus:border-primary"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-background/50 border-border/50 focus:border-primary"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Service dropdown */}
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Service of Interest</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-background border-border">
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Captcha */}
              <FormField
                control={form.control}
                name="captcha"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Security Check</FormLabel>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                        <span className="text-lg font-mono font-semibold text-foreground">
                          {captcha.num1} + {captcha.num2} = ?
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={refreshCaptcha}
                        className="p-2 rounded-lg hover:bg-muted transition-colors"
                        aria-label="Refresh captcha"
                      >
                        <RefreshCw className="w-5 h-5 text-muted-foreground" />
                      </button>
                    </div>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter the answer"
                        className="bg-background/50 border-border/50 focus:border-primary mt-2"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold py-6 rounded-full glow-effect transition-all duration-300 hover:scale-[1.02]"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Form>

          {/* Direct email option */}
          <div className="mt-8 pt-6 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground mb-2">Or email me directly</p>
            <a
              href="mailto:shiekhtariq007@gmail.com"
              className="inline-flex items-center gap-2 text-primary hover:underline transition-colors"
            >
              <Mail className="w-4 h-4" />
              shiekhtariq007@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
