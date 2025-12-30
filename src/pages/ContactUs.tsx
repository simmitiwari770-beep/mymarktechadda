import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Instagram, Lock, Send } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

type RoleType = 'seeker' | 'provider' | 'other' | null;

const seekerReasons = [
  'Hiring guidance',
  'Using search & filters',
  'Account or access issue',
  'Payments / invoicing',
  'Other',
];

const providerReasons = [
  'Profile onboarding',
  'Verification & compliance',
  'Discovery & visibility',
  'Payments / payouts',
  'Other',
];

const otherReasons = [
  'Partnerships',
  'Media / press',
  'Feedback / suggestions',
  'Careers',
  'Other',
];

const ContactUs = () => {
  const [selectedRole, setSelectedRole] = useState<RoleType>(null);
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const getReasons = () => {
    switch (selectedRole) {
      case 'seeker':
        return seekerReasons;
      case 'provider':
        return providerReasons;
      case 'other':
        return otherReasons;
      default:
        return [];
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent!",
      description: "We usually respond within 24–48 hours.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
    setSelectedRole(null);
    setSelectedReason(null);
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-secondary/5" />
        
        <div className="container-custom relative z-10 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Contact{' '}
              <span className="gradient-text">Us</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground">
              We're here to help — tell us how
            </p>
            
            <p className="text-muted-foreground mt-4">
              Whether you're hiring, showcasing expertise, or exploring MarTechAdda, reach out and we'll guide you in the right direction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Role Selection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Label className="text-base font-medium text-foreground mb-4 block">
                  I'm contacting you as: <span className="text-destructive">*</span>
                </Label>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { value: 'seeker', label: 'Service Seeker (Business)' },
                    { value: 'provider', label: 'Service Provider (Marketing Expert)' },
                    { value: 'other', label: 'Other / General Inquiry' },
                  ].map((role) => (
                    <button
                      key={role.value}
                      type="button"
                      onClick={() => {
                        setSelectedRole(role.value as RoleType);
                        setSelectedReason(null);
                      }}
                      className={`p-4 rounded-xl border text-sm font-medium transition-all duration-200 ${
                        selectedRole === role.value
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border bg-card text-muted-foreground hover:border-primary/30 hover:bg-muted'
                      }`}
                    >
                      {role.label}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  This helps us route your request faster.
                </p>
              </motion.div>

              {/* Contextual Reasons */}
              <AnimatePresence mode="wait">
                {selectedRole && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Label className="text-base font-medium text-foreground mb-4 block">
                      How can we help?
                    </Label>
                    <div className="flex flex-wrap gap-2">
                      {getReasons().map((reason) => (
                        <button
                          key={reason}
                          type="button"
                          onClick={() => setSelectedReason(reason)}
                          className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${
                            selectedReason === reason
                              ? 'border-accent bg-accent/10 text-accent'
                              : 'border-border bg-card text-muted-foreground hover:border-accent/30 hover:bg-muted'
                          }`}
                        >
                          {reason}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Fields */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="mb-2 block">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="mb-2 block">
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="company" className="mb-2 block">
                    Company / Brand Name <span className="text-muted-foreground">(optional)</span>
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company or brand"
                    className="h-12"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="mb-2 block">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us briefly how we can help."
                    rows={5}
                    className="resize-none"
                  />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={isSubmitting || !selectedRole}
                >
                  {isSubmitting ? 'Sending...' : 'Send message'}
                  <Send className="w-4 h-4" />
                </Button>
                
                <p className="text-sm text-muted-foreground mt-4">
                  We usually respond within 24–48 hours.
                </p>
              </motion.div>

              {/* Trust Note */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl"
              >
                <Lock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Your information is used only to respond to your request. We don't share or sell contact data.
                </p>
              </motion.div>
            </form>

            {/* Other Ways to Reach Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 pt-8 border-t border-border"
            >
              <h2 className="font-display font-semibold text-lg text-foreground mb-6">
                Other ways to reach us
              </h2>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:hello@martechadda.com"
                  className="flex items-center gap-2 px-4 py-3 bg-card border border-border rounded-xl text-foreground hover:border-primary/30 hover:bg-muted transition-all"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">hello@martechadda.com</span>
                </a>
                
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-card border border-border rounded-xl text-foreground hover:border-primary/30 hover:bg-muted transition-all"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-card border border-border rounded-xl text-foreground hover:border-primary/30 hover:bg-muted transition-all"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
