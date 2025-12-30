import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Palette, TrendingUp, Megaphone, FileText, ArrowRight, AlertTriangle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Section, SectionHeader } from '@/components/ui/section';

const structuralIssues = [
  {
    title: 'Marketing Is Treated Like a Commodity',
    description: 'Marketing expertise is complex and contextual, yet listed like products on generic marketplaces.',
  },
  {
    title: 'RFPs Delay Alignment',
    description: 'Time is spent on documents, while real understanding only happens through conversation.',
  },
  {
    title: 'Transparency Comes Too Late',
    description: 'Scope, approach, and fit become clear after commitment — not before.',
  },
];

const expertiseAreas = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Branding',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Strategic Marketing',
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: 'Advertising',
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Marketing Collateral',
  },
];

const WhyThisWorks = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-primary/5" />
        
        <div className="container-custom relative z-10 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Why This{' '}
              <span className="gradient-text">Works</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground">
              The problem isn't marketing talent — it's how hiring decisions are made.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Observation */}
      <Section>
        <SectionHeader
          title="Our Observation"
          subtitle="We believed fixing these three issues would fix hiring itself."
        />
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {structuralIssues.map((issue, index) => (
            <motion.div
              key={issue.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive mb-4">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {issue.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {issue.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Areas of Expertise */}
      <Section className="bg-muted/30">
        <SectionHeader
          title="Areas of Expertise"
          subtitle="MarTechAdda focuses exclusively on core marketing disciplines."
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 text-center card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                {area.icon}
              </div>
              <h3 className="font-display font-semibold text-foreground">
                {area.title}
              </h3>
            </motion.div>
          ))}
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground max-w-2xl mx-auto"
        >
          These represent areas of expertise available on the platform — not services sold by MarTechAdda itself.
        </motion.p>
      </Section>

      {/* Who It's For */}
      <Section>
        <SectionHeader
          title="Who It's For"
        />
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 card-hover"
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              Businesses looking to hire marketing experts with clarity
            </h3>
            <Button variant="hero" size="lg" asChild>
              <Link to="/experts">
                Explore experts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 card-hover"
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              Marketing professionals who want fair, merit-based discovery
            </h3>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/register">
                Create your profile
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          If you value transparency over tactics and fit over force-selling, you'll feel at home here.
        </motion.p>
      </Section>
    </Layout>
  );
};

export default WhyThisWorks;
