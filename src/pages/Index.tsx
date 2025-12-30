import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, TrendingUp, Megaphone, FileText, ArrowRight, Search, UserCircle, CheckCircle, Users } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Section, SectionHeader } from '@/components/ui/section';
import { ServiceTile } from '@/components/ui/service-tile';
import { StepCard } from '@/components/ui/step-card';
import { AnimatedCounter } from '@/components/ui/animated-counter';

const serviceCategories = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Branding',
    description: 'Build identities that inspire trust',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Strategic Marketing',
    description: 'Turn insights into measurable growth',
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: 'Advertising',
    description: 'Reach audiences that convert',
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Collateral Marketing',
    description: 'Transform attention into lasting impact',
  },
];

const painPoints = [
  {
    title: 'Relevant marketing expertise is hard to find',
    description: 'Marketing specialists are buried inside generic platforms that weren\'t built for marketing discovery.',
  },
  {
    title: 'RFPs delay real conversations',
    description: 'Time is spent on pitches and paperwork before meaningful alignment even begins.',
  },
  {
    title: 'Clarity arrives too late',
    description: 'Capability, scope, and fit often become clear only after decisions are already made.',
  },
];

const hiringSteps = [
  { icon: <Search className="w-5 h-5" />, title: 'Search', description: 'Find marketing experts' },
  { icon: <Users className="w-5 h-5" />, title: 'Connect', description: 'Have real conversations' },
  { icon: <CheckCircle className="w-5 h-5" />, title: 'Align', description: 'Get clarity upfront' },
  { icon: <UserCircle className="w-5 h-5" />, title: 'Hire', description: 'Make confident decisions' },
];

const Index = () => {
  const [isExpertMode, setIsExpertMode] = useState(false);

  return (
    <Layout>
      {/* SEO Meta */}
      <title>MarTechAdda - Hire Marketing Experts Without RFPs or Guesswork</title>
      <meta name="description" content="Discover and hire marketing experts with clarity. MarTechAdda is a marketing-only platform for transparent hiring decisions. No RFPs, no pitches, no guesswork." />
      
      {/* Hero Section */}
      <section className="relative hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-secondary/5" />
        
        <div className="container-custom relative z-10 py-20 lg:py-32">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight"
            >
              Hire marketing experts —<br />
              <span className="gradient-text">without RFPs, pitches, or guesswork.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-4"
            >
              Tell us what you're looking for. We'll guide the rest.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm text-muted-foreground"
            >
              Built for businesses and marketing professionals.
            </motion.p>
          </div>

          {/* Dual Path Hero */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Find Experts Path */}
            <AnimatePresence mode="wait">
              {!isExpertMode && (
                <motion.div
                  key="seeker"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-lg"
                >
                  <div className="flex items-center gap-2 mb-6">
                    <Search className="w-5 h-5 text-primary" />
                    <h2 className="font-display font-semibold text-lg text-foreground">
                      Find Marketing Experts
                    </h2>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-6">I'm looking for</p>
                  
                  <div className="space-y-3">
                    {serviceCategories.map((service, index) => (
                      <ServiceTile
                        key={service.title}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        delay={index * 0.1}
                        onClick={() => {}}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Expert Path */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-lg"
            >
              <AnimatePresence mode="wait">
                {!isExpertMode ? (
                  <motion.div
                    key="expert-cta"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex items-center gap-2 mb-6">
                      <UserCircle className="w-5 h-5 text-secondary" />
                      <h2 className="font-display font-semibold text-lg text-foreground">
                        Are You a Marketing Expert?
                      </h2>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">
                      Get discovered for your capability — not ad spend. Join our platform and connect with businesses looking for your expertise.
                    </p>
                    
                    <Button
                      variant="secondary"
                      size="lg"
                      className="w-full group"
                      onClick={() => setIsExpertMode(true)}
                    >
                      Showcase your expertise
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="expert-select"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <UserCircle className="w-5 h-5 text-secondary" />
                        <h2 className="font-display font-semibold text-lg text-foreground">
                          Expert Entry
                        </h2>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsExpertMode(false)}
                        className="text-muted-foreground"
                      >
                        Back
                      </Button>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      I want to showcase my expertise in
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {serviceCategories.map((service, index) => (
                        <ServiceTile
                          key={service.title}
                          icon={service.icon}
                          title={service.title}
                          description="Select to continue"
                          delay={index * 0.1}
                          onClick={() => {}}
                        />
                      ))}
                    </div>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      You can add or edit categories anytime during onboarding.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <Section id="problem" className="bg-muted/30">
        <SectionHeader
          title="Why hiring marketing services still feels harder than it should."
          subtitle="Marketing talent is everywhere — yet hiring the right expert still feels slow, confusing, and risky."
        />
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 card-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center text-destructive mb-4">
                <span className="font-bold">{index + 1}</span>
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            The result? Time wasted, unclear expectations, and mismatched partnerships.
          </p>
          <Link
            to="/why-this-works"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            Learn why this keeps happening
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* Solution Section */}
      <Section id="solution">
        <SectionHeader
          title="A clearer way to discover and hire marketing expertise."
          subtitle="MarTechAdda is designed for clarity before commitment."
        />
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {[
            'Marketing-only expert discovery',
            'Conversations before commitments',
            'Clear scope and expectations upfront',
          ].map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-3 p-4 bg-accent/10 rounded-xl"
            >
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <span className="font-medium text-foreground">{benefit}</span>
            </motion.div>
          ))}
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground font-medium"
        >
          No paid rankings. No featured listings. No clutter.
        </motion.p>
      </Section>

      {/* Dual Role Pathways */}
      <Section className="bg-muted/30">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* For Businesses */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 card-hover"
          >
            <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground mb-6">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              For Businesses
            </h3>
            <p className="text-muted-foreground mb-6">
              Hire marketing experts with confidence
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/experts">
                Find marketing experts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          {/* For Marketing Professionals */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 card-hover"
          >
            <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-secondary-foreground mb-6">
              <UserCircle className="w-7 h-7" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              For Marketing Professionals
            </h3>
            <p className="text-muted-foreground mb-6">
              Get discovered for capability, not ad spend
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/register">
                Create your profile
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* How Hiring Works */}
      <Section id="how-it-works">
        <SectionHeader
          title="From discovery to decision — without friction"
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {hiringSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center"
            >
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-primary-foreground mx-auto mb-4">
                {step.icon}
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
              
              {/* Connector line */}
              {index < hiringSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-border" />
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="hero-outline" size="lg" asChild>
            <Link to="/how-it-works">
              See how MarTechAdda works
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Innovation Proof - Counters */}
      <Section className="bg-muted/30">
        <div className="grid sm:grid-cols-3 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-5xl lg:text-6xl font-display font-bold text-primary mb-2">
              <AnimatedCounter end={24} suffix="h" />
            </div>
            <p className="text-muted-foreground font-medium">Start projects in hours</p>
            <p className="text-sm text-muted-foreground mt-1">Skip traditional RFP delays</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="text-5xl lg:text-6xl font-display font-bold text-secondary mb-2">
              <AnimatedCounter end={92} suffix="%" />
            </div>
            <p className="text-muted-foreground font-medium">Expert match accuracy</p>
            <p className="text-sm text-muted-foreground mt-1">Powered by smart search & filters</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="text-5xl lg:text-6xl font-display font-bold text-accent mb-2">
              <AnimatedCounter end={100} prefix="" suffix="+" />
            </div>
            <p className="text-muted-foreground font-medium">Vetted experts</p>
            <p className="text-sm text-muted-foreground mt-1">Ready to collaborate instantly</p>
          </motion.div>
        </div>
        
        <p className="text-center text-xs text-muted-foreground mt-8">
          Based on early platform data and internal analysis.
        </p>
      </Section>

      {/* Closing CTA */}
      <Section id="cta">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-8"
          >
            Ready to hire — or be hired — with clarity?
          </motion.h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/experts">
                Find Marketing Experts
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/register">
                Showcase Your Expertise
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
