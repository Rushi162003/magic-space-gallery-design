
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Contact Us</h1>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Get in touch with us for your interior design needs. We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl font-semibold mb-6">Send Us A Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Enter message subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Enter your message"
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-2xl font-semibold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="bg-accent/30 p-6 rounded-lg">
                  <h3 className="font-medium text-lg mb-3">Office Address</h3>
                  <p className="text-muted-foreground">
                    123 Design Street<br />
                    Pune, Maharashtra 411001<br />
                    India
                  </p>
                </div>

                <div className="bg-accent/30 p-6 rounded-lg">
                  <h3 className="font-medium text-lg mb-3">Contact Details</h3>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      <span className="font-medium">Email:</span> mangeshjahdale58@gmail.com
                    </p>
                    <p className="text-muted-foreground">
                      <div className="font-medium">Phone: +91 92849 74111</div>
                      <div className="font-medium">Phone: +91 97669 74736</div>
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Office Hours:</span> 9:00 AM - 6:00 PM (Mon - Sat)
                    </p>
                  </div>
                </div>

                <div className="bg-accent/30 p-6 rounded-lg">
                  <h3 className="font-medium text-lg mb-3">Connect With Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="p-2 rounded-full bg-primary text-primary-foreground hover:opacity-80 transition-opacity">FB</a>
                    <a href="https://www.instagram.com/magic_space_interior/" className="p-2 rounded-full bg-primary text-primary-foreground hover:opacity-80 transition-opacity">IG</a>
                    <a href="#" className="p-2 rounded-full bg-primary text-primary-foreground hover:opacity-80 transition-opacity">LI</a>
                    <a href="#" className="p-2 rounded-full bg-primary text-primary-foreground hover:opacity-80 transition-opacity">YT</a>
                  </div>
                </div>
              </div>

              {/* Simple Map Placeholder - Would be replaced with an actual map in a real site */}
              <div className="mt-6 bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Map Location Would Display Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
