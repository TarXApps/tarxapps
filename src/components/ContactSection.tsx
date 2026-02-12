import { useState, useEffect, useRef } from "react";
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

const useInView = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
};

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
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: formRef, isInView: formInView } = useInView();

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return { num1, num2, answer: num1 + num2 };
  };

  const [captcha, setCaptcha] = useState(generateCaptcha);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", service: "", captcha: "" },
  });

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    form.setValue("captcha", "");
  };

  const onSubmit = async (data: FormValues) => {
    if (parseInt(data.captcha) !== captcha.answer) {
      form.setError("captcha", { message: "Incorrect answer. Please try again." });
      refreshCaptcha();
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert({ name: data.name.trim(), email: data.email.trim(), service: data.service });

      if (error) throw error;

      toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
      form.reset();
      refreshCaptcha();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 md:py-40 px-4 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <div
          ref={headerRef}
          className={`mb-20 text-center transition-all duration-700 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionLabel label="Contact" />
          <h2 className="gradient-text inline-block mb-6">Get In Touch</h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-primary rounded-full" />
            <div className="h-2 w-2 rounded-full bg-secondary" />
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-primary rounded-full" />
          </div>
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Let's build something meaningful together.
          </p>
          <p className="text-lead max-w-xl mx-auto">
            Ready to elevate your brand? I'd love to hear about your vision and explore how we can bring it to life.
          </p>
        </div>

        <div
          ref={formRef}
          className={`glass-card p-8 rounded-2xl transition-all duration-700 delay-200 ${
            formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" className="bg-background/50 border-border/50 focus:border-primary" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your.email@example.com" className="bg-background/50 border-border/50 focus:border-primary" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="service" render={({ field }) => (
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
                        <SelectItem key={service} value={service}>{service}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="captcha" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Security Check</FormLabel>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                      <span className="text-lg font-mono font-semibold text-foreground">
                        {captcha.num1} + {captcha.num2} = ?
                      </span>
                    </div>
                    <button type="button" onClick={refreshCaptcha} className="p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Refresh captcha">
                      <RefreshCw className="w-5 h-5 text-muted-foreground" />
                    </button>
                  </div>
                  <FormControl>
                    <Input type="number" placeholder="Enter the answer" className="bg-background/50 border-border/50 focus:border-primary mt-2" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <Button type="submit" disabled={isSubmitting} className="w-full gradient-cta text-foreground font-semibold py-6 rounded-full transition-all duration-300 hover:scale-[1.02]">
                {isSubmitting ? "Sending..." : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Form>

          <div className="mt-8 pt-6 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground mb-2">Or email me directly</p>
            <a href="mailto:shiekhtariq007@gmail.com" className="inline-flex items-center gap-2 text-primary hover:underline transition-colors">
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
