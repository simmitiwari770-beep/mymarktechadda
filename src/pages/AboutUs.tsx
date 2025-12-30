import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Shield, Scale, Target, ArrowRight, CheckCircle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Section, SectionHeader } from '@/components/ui/section';

const principles = [
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Merit Over Promotion',
    description: 'Experts cannot buy visibility. Discovery is based on relevance, not spend.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Verification Before Visibility',
    description: 'Providers are reviewed for real capability — not buzzwords.',
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: 'Neutral by Design',
    description: "We don't sell services or push packages. Our role is to enable better choices.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Marketing-Only Focus',
    description: 'No mixed categories. No generic listings. Only marketing expertise.',
  },
];

const whyWeExist = [
  'Marketing expertise is scattered across generic platforms, making relevant discovery difficult.',
  'Hiring depends on traditional RFPs and pitches, delaying real conversations and alignment.',
  'Clarity on capability, scope, and fit comes too late, forcing high-risk decisions.',
];

const AboutUs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-secondary/5" />
        
        <div className="container-custom relative z-10 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              We built MarTechAdda to fix how businesses{' '}
              <span className="gradient-text">discover and hire marketing expertise.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Hiring marketing services today is confusing, slow, and biased — but it doesn't have to be.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Platform */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            MarTechAdda is a marketing-focused discovery and hiring platform that helps businesses find the right experts, have the right conversations, and make confident hiring decisions — without RFPs, overselling, or guesswork.
          </p>
        </motion.div>
      </Section>

      {/* Why We Exist */}
      <Section className="bg-muted/30">
        <SectionHeader
          title="Why We Exist"
          subtitle="The hiring process is broken — not the talent."
        />
        
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-muted-foreground mb-8">
            Across businesses of all sizes, we kept seeing the same three problems:
          </p>
          
          <div className="space-y-4">
            {whyWeExist.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl"
              >
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive shrink-0">
                  <span className="font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-foreground">{point}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground font-medium mt-8"
          >
            The result isn't bad marketing talent — it's bad hiring decisions.
          </motion.p>
        </div>
      </Section>

      {/* What We're Building */}
      <Section>
        <SectionHeader
          title="What We're Building"
          subtitle="A marketing-only platform for better hiring decisions."
        />
        
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-muted-foreground mb-8">
            MarTechAdda focuses on clarity before commitment. We help users:
          </p>
          
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              'Find marketing experts using domain-specific search and filters.',
              'Connect directly to align on requirements and fit.',
              'Hire with clearer scope and confidence.',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-accent/10 rounded-xl"
              >
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground">
            We intentionally focus on the decision stage — where most hiring mistakes are made.
          </p>
        </div>
      </Section>

      {/* Our Principles */}
      <Section className="bg-muted/30">
        <SectionHeader
          title="Our Principles"
          subtitle="Why We're Different"
        />
        
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                {principle.icon}
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {principle.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-8"
        >
          These principles shape every product decision we make.
        </motion.p>
      </Section>

      {/* Our Role in the Ecosystem */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6"
          >
            Our Role in the Ecosystem
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-8"
          >
            We don't execute marketing. We enable confident hiring.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 mb-8"
          >
            <p className="text-muted-foreground leading-relaxed">
              MarTechAdda is not an agency. We are not a lead-selling marketplace.
              <br /><br />
              We exist between confusion and commitment — helping both sides align before work begins.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section className="bg-muted/30">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-6"
          >
            If hiring marketing experts feels harder than it should, we built MarTechAdda to make it clearer.
          </motion.h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/experts">
                Explore experts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/how-it-works">
                Learn how it works
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default AboutUs;
