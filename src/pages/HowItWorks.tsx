import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Users, CheckCircle, UserCircle, MessageCircle, Briefcase, ArrowRight, X } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Section, SectionHeader } from '@/components/ui/section';
import { StepCard } from '@/components/ui/step-card';

const businessSteps = [
  {
    title: 'Search with intent',
    description: 'Find marketing experts using domain-specific filters.',
    icon: <Search className="w-5 h-5" />,
  },
  {
    title: 'Connect before you commit',
    description: 'Have real conversations to align on requirements and fit.',
    icon: <MessageCircle className="w-5 h-5" />,
  },
  {
    title: 'Align scope & expectations',
    description: 'Get clarity on approach, deliverables, and engagement before hiring.',
    icon: <CheckCircle className="w-5 h-5" />,
  },
  {
    title: 'Hire with confidence',
    description: 'Make informed decisions without RFPs or sales pressure.',
    icon: <Briefcase className="w-5 h-5" />,
  },
];

const expertSteps = [
  {
    title: 'Create a focused profile',
    description: 'Showcase real expertise and experience.',
    icon: <UserCircle className="w-5 h-5" />,
  },
  {
    title: 'Get matched by relevance',
    description: 'Visibility is based on fit — not paid rankings or promotion.',
    icon: <Search className="w-5 h-5" />,
  },
  {
    title: 'Have meaningful conversations',
    description: 'Discuss real requirements, not generic briefs.',
    icon: <MessageCircle className="w-5 h-5" />,
  },
  {
    title: 'Engage on aligned projects',
    description: 'Work with clients who understand your value and expectations.',
    icon: <Briefcase className="w-5 h-5" />,
  },
];

const whatWeDontDo = [
  "We don't sell services",
  "We don't push packages",
  "We don't sell leads",
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const HowItWorks = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-primary/3" />
        
        <div className="container-custom relative z-10 py-20 lg:py-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              How MarTechAdda{' '}
              <span className="gradient-text">Works</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg lg:text-xl text-muted-foreground"
            >
              A clearer path from discovery to decision — for businesses and experts alike.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* For Businesses */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="flex items-center gap-4 mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground"
            >
              <Users className="w-7 h-7" />
            </motion.div>
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-sm text-muted-foreground uppercase tracking-wide font-medium"
              >
                For Businesses
              </motion.p>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
                Hire marketing experts with clarity — not guesswork
              </h2>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4 mb-8"
          >
            {businessSteps.map((step, index) => (
              <motion.div key={step.title} variants={fadeInUp}>
                <StepCard
                  number={index + 1}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                  delay={0}
                />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/experts">
                Find marketing experts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Divider */}
      <div className="container-custom">
        <div className="h-px bg-border" />
      </div>

      {/* For Marketing Professionals */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="flex items-center gap-4 mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-secondary-foreground"
            >
              <UserCircle className="w-7 h-7" />
            </motion.div>
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-sm text-muted-foreground uppercase tracking-wide font-medium"
              >
                For Marketing Professionals
              </motion.p>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
                Get discovered for capability — not ad spend
              </h2>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4 mb-8"
          >
            {expertSteps.map((step, index) => (
              <motion.div key={step.title} variants={fadeInUp}>
                <StepCard
                  number={index + 1}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                  delay={0}
                />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <Button variant="secondary" size="lg" asChild>
              <Link to="/register">
                Create your profile
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* What We Don't Do */}
      <Section className="bg-muted/30">
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeader
            title="What We Don't Do"
            subtitle="Clear boundaries. Honest intent."
          />
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {whatWeDontDo.map((item) => (
              <motion.div
                key={item}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full"
              >
                <X className="w-4 h-4 text-destructive" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground mt-8"
          >
            This reinforces our commitment to neutrality.
          </motion.p>
        </div>
      </Section>

      {/* Why This Works Link */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-6"
          >
            Because clarity should come before commitment.
          </motion.p>
          
          <Button variant="hero-outline" size="lg" asChild>
            <Link to="/why-this-works">
              Why this works
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default HowItWorks;
