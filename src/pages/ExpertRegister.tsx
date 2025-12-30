import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ArrowLeft, User, Mail, Phone, Shield, Briefcase, Palette, TrendingUp, Megaphone, FileText } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const steps = [
  { id: 1, title: 'Account Setup', icon: <User className="w-4 h-4" /> },
  { id: 2, title: 'Verify', icon: <Shield className="w-4 h-4" /> },
  { id: 3, title: 'Confirm Role', icon: <Briefcase className="w-4 h-4" /> },
  { id: 4, title: 'Profile', icon: <User className="w-4 h-4" /> },
];

const categories = [
  { icon: <Palette className="w-5 h-5" />, title: 'Branding' },
  { icon: <TrendingUp className="w-5 h-5" />, title: 'Strategic Marketing' },
  { icon: <Megaphone className="w-5 h-5" />, title: 'Advertising' },
  { icon: <FileText className="w-5 h-5" />, title: 'Marketing Collateral' },
];

const ExpertRegister = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: '', email: '', mobile: '', otp: '', businessName: '', role: '', about: '',
  });

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <Layout>
      <section className="hero-gradient min-h-[calc(100vh-80px)] py-12 lg:py-20">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Create your expert profile in minutes
            </h1>
            <p className="text-muted-foreground">Join as a marketing professional. No listings to buy. No promotions to run.</p>
          </motion.div>

          {/* Progress Stepper */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`stepper-dot ${currentStep > step.id ? 'completed' : currentStep === step.id ? 'active' : ''}`}>
                    {currentStep > step.id ? <Check className="w-4 h-4" /> : step.icon}
                  </div>
                  {index < steps.length - 1 && <div className={`stepper-line mx-2 w-12 sm:w-20 ${currentStep > step.id ? 'active' : ''}`} />}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {steps.map(step => (
                <span key={step.id} className={`text-xs ${currentStep >= step.id ? 'text-primary' : 'text-muted-foreground'}`}>{step.title}</span>
              ))}
            </div>
          </div>

          {/* Form Steps */}
          <motion.div key={currentStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="max-w-lg mx-auto bg-card border border-border rounded-2xl p-8">
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="font-display text-xl font-semibold text-foreground">Let's start with the basics</h2>
                <div className="space-y-4">
                  <div><Label>Full Name</Label><Input placeholder="Your full name" value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} className="mt-1" /></div>
                  <div><Label>Work Email</Label><Input type="email" placeholder="you@company.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="mt-1" /></div>
                  <div><Label>Mobile Number</Label><Input placeholder="+91 98765 43210" value={formData.mobile} onChange={e => setFormData({...formData, mobile: e.target.value})} className="mt-1" /></div>
                </div>
                <p className="text-xs text-muted-foreground">We don't sell or share your contact details.</p>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6 text-center">
                <h2 className="font-display text-xl font-semibold text-foreground">Verify to continue</h2>
                <p className="text-muted-foreground">Enter the OTP sent to your email/mobile</p>
                <Input placeholder="Enter 6-digit OTP" maxLength={6} value={formData.otp} onChange={e => setFormData({...formData, otp: e.target.value})} className="text-center text-2xl tracking-widest" />
                <p className="text-xs text-muted-foreground">This helps us keep MarTechAdda credible and spam-free.</p>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="font-display text-xl font-semibold text-foreground">You're joining as a Marketing Expert</h2>
                <p className="text-muted-foreground text-sm">Select your primary category:</p>
                <div className="grid grid-cols-2 gap-3">
                  {categories.map(cat => (
                    <button key={cat.title} onClick={() => setSelectedCategory(cat.title)} className={`p-4 rounded-xl border text-left transition-all ${selectedCategory === cat.title ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/30'}`}>
                      <div className="text-primary mb-2">{cat.icon}</div>
                      <span className="font-medium text-sm text-foreground">{cat.title}</span>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground text-center">You can add more categories later</p>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="font-display text-xl font-semibold text-foreground">Create Your Profile</h2>
                <div className="space-y-4">
                  <div><Label>Business Name</Label><Input placeholder="Your business or brand name" value={formData.businessName} onChange={e => setFormData({...formData, businessName: e.target.value})} className="mt-1" /></div>
                  <div><Label>Your Role</Label><Input placeholder="e.g., Founder, Creative Director" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className="mt-1" /></div>
                  <div><Label>About You</Label><Textarea placeholder="Tell potential clients about your expertise..." rows={4} value={formData.about} onChange={e => setFormData({...formData, about: e.target.value})} className="mt-1" /></div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              <Button variant="ghost" onClick={prevStep} disabled={currentStep === 1}><ArrowLeft className="w-4 h-4 mr-2" />Back</Button>
              <Button variant="hero" onClick={nextStep}>{currentStep === 4 ? 'Submit Profile' : 'Continue'}<ArrowRight className="w-4 h-4 ml-2" /></Button>
            </div>
          </motion.div>

          <p className="text-center text-xs text-muted-foreground mt-6 max-w-md mx-auto">
            You're creating a professional profile — not signing a contract. You stay in control at every step.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default ExpertRegister;
