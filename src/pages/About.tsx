import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Globe,
  Users,
  Target,
  TrendingUp,
  Award,
  Heart,
  Lightbulb,
  Shield,
  BookOpen,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Zap,
  ChevronDown,
} from 'lucide-react';
import { Link } from 'react-router-dom';

// ─── Utility: count-up hook ───────────────────────────────────────────────────
function useCountUp(end: number, duration = 2200, start = 0) {
  const [count, setCount] = useState(start);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) return;
    let startTime: number;
    let frame: number;
    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(start + (end - start) * ease));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [active, end, duration, start]);

  return { count, activate: () => setActive(true) };
}

// ─── Animated section wrapper ─────────────────────────────────────────────────
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' });
  const dirMap = {
    up: { y: 40, x: 0 },
    left: { y: 0, x: -40 },
    right: { y: 0, x: 40 },
    none: { y: 0, x: 0 },
  };
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dirMap[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ─── Stat card with count-up ──────────────────────────────────────────────────
interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ value, suffix = '', label, icon, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px 0px' });
  const { count, activate } = useCountUp(value);

  useEffect(() => {
    if (inView) activate();
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      {/* Accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-2xl" />

      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <div>
          <div className="text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
            {count}
            <span className="text-blue-600">{suffix}</span>
          </div>
          <div className="mt-1 text-sm font-medium text-slate-500 leading-tight">{label}</div>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Value card ───────────────────────────────────────────────────────────────
interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  color: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, delay = 0, color }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group flex gap-5 p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div
        className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${color} text-white shadow-sm`}
      >
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

// ─── Initiative card ──────────────────────────────────────────────────────────
interface InitiativeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
  delay?: number;
}

const InitiativeCard: React.FC<InitiativeCardProps> = ({
  icon,
  title,
  description,
  tag,
  delay = 0,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-2xl p-7 border border-slate-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
        {tag}
      </span>
      <div className="mb-4 w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>

      <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        Learn more <ArrowRight size={14} />
      </div>
    </motion.div>
  );
};

// ─── Timeline entry ───────────────────────────────────────────────────────────
interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const TimelineEntry: React.FC<{ item: TimelineItem; index: number }> = ({ item, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px 0px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`flex gap-6 md:gap-10 items-start ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
    >
      {/* Content */}
      <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-left`}>
        <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-2">
          {item.year}
        </span>
        <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
      </div>

      {/* Dot */}
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="w-5 h-5 rounded-full bg-blue-600 border-4 border-blue-100 shadow-md z-10" />
        {index < 4 && <div className="w-0.5 h-16 bg-gradient-to-b from-blue-200 to-transparent mt-1" />}
      </div>

      {/* Spacer for alternating layout on desktop */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
};

// ─── DATA ─────────────────────────────────────────────────────────────────────

const STATS = [
  { value: 10000, suffix: '+', label: 'Lives Transformed', icon: <Users size={20} /> },
  { value: 50, suffix: '+', label: 'Global Programs Delivered', icon: <Globe size={20} /> },
  { value: 30, suffix: '+', label: 'Countries Reached', icon: <MapPin size={20} /> },
  { value: 500, suffix: '+', label: 'Industry Mentors', icon: <Award size={20} /> },
];

const VALUES = [
  {
    icon: <Heart size={20} />,
    title: 'Purpose-Driven Growth',
    description:
      'Every initiative we build is rooted in genuine human development — not metrics alone, but meaningful transformation.',
    color: 'bg-rose-500',
  },
  {
    icon: <Shield size={20} />,
    title: 'Integrity & Trust',
    description:
      'We operate with radical transparency, holding ourselves accountable to the communities we serve.',
    color: 'bg-blue-600',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'Innovation at Scale',
    description:
      'We harness emerging technologies and methodologies to amplify our impact far beyond traditional limits.',
    color: 'bg-amber-500',
  },
  {
    icon: <Users size={20} />,
    title: 'Community First',
    description:
      'Our network thrives because we invest deeply in relationships, collaboration, and collective empowerment.',
    color: 'bg-emerald-500',
  },
  {
    icon: <Target size={20} />,
    title: 'Outcome Excellence',
    description:
      'We set audacious goals and execute with precision — delivering results that create lasting, measurable change.',
    color: 'bg-violet-600',
  },
  {
    icon: <Globe size={20} />,
    title: 'Global Inclusivity',
    description:
      'We believe world-class opportunities should be accessible to every motivated individual, regardless of geography.',
    color: 'bg-cyan-600',
  },
];

const INITIATIVES = [
  {
    icon: <Rocket size={20} />,
    title: 'PGT Leaders Academy',
    description:
      'A flagship cohort-based leadership programme that develops the next generation of purposeful, globally-aware change-makers.',
    tag: 'Flagship Programme',
  },
  {
    icon: <BookOpen size={20} />,
    title: 'Global Mentorship Network',
    description:
      'Curated 1:1 mentorship from 500+ industry veterans across 30+ countries, enabling career acceleration at every stage.',
    tag: 'Mentorship',
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'Impact Accelerator',
    description:
      'Supporting high-potential social entrepreneurs with resources, coaching, and a global network to scale ideas that matter.',
    tag: 'Entrepreneurship',
  },
  {
    icon: <Zap size={20} />,
    title: 'PGT Skills Exchange',
    description:
      'A live, interactive platform where professionals teach, learn, and collaborate — turning knowledge into community capital.',
    tag: 'Learning',
  },
  {
    icon: <Star size={20} />,
    title: 'Youth Ambassador Programme',
    description:
      'Empowering student leaders across campuses worldwide to be the local face of PGT\'s global mission.',
    tag: 'Youth',
  },
  {
    icon: <Globe size={20} />,
    title: 'PGT Global Summits',
    description:
      'Annual flagship events bringing together thought leaders, practitioners, and change-makers for dialogue and action.',
    tag: 'Events',
  },
];

const TIMELINE: TimelineItem[] = [
  {
    year: '2018',
    title: 'The Founding Vision',
    description:
      'PGT Global Network was established with a bold mandate: make world-class growth opportunities accessible to every motivated person on the planet.',
  },
  {
    year: '2019',
    title: 'First 1,000 Lives Reached',
    description:
      'Launched our inaugural cohort-based leadership programme, reaching 1,000+ participants across 8 countries in year one.',
  },
  {
    year: '2021',
    title: 'Mentor Network Expansion',
    description:
      'Built a curated mentor pool of 200+ industry leaders and expanded our digital reach to 20 new countries amid global disruption.',
  },
  {
    year: '2023',
    title: '10,000+ Community Members',
    description:
      'Crossed 10,000 active community members, launched the PGT Impact Accelerator, and opened regional hubs across three continents.',
  },
  {
    year: '2025',
    title: 'Platform Transformation',
    description:
      'Launched the production-grade digital platform powering seamless programme delivery, mentorship matching, and real-time impact tracking at global scale.',
  },
];

// ─── MAIN ABOUT PAGE ──────────────────────────────────────────────────────────
const About: React.FC = () => {
  const heroRef = useRef(null);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[92vh] flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 px-4"
      >
        {/* Background mesh */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Purpose-Driven Growth Since 2018
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6"
          >
            We Exist to{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Transform
            </span>{' '}
            Lives
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            PGT Global Network is a purpose-driven organization building the world's most
            impactful ecosystem for growth, leadership, and human potential — connecting
            motivated individuals to the opportunities they deserve.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/30 hover:shadow-blue-800/40 hover:-translate-y-0.5"
            >
              Explore Our Work <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 backdrop-blur-sm"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 flex flex-col items-center gap-1 text-xs"
        >
          <span>Scroll to explore</span>
          <ChevronDown size={16} className="animate-bounce" />
        </motion.div>
      </section>

      {/* ── IMPACT STATS ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">
              Our Reach
            </span>
            <h2 className="mt-3 text-4xl font-extrabold text-slate-900">
              Impact at a Glance
            </h2>
            <p className="mt-3 text-slate-500 max-w-lg mx-auto">
              Numbers that represent real lives changed, communities strengthened, and futures
              rewritten.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <StatCard key={stat.label} {...stat} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ─────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Mission */}
          <FadeIn direction="left">
            <div className="relative">
              {/* Decorative element */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-2xl -z-10" />

              <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">
                Our Mission
              </span>
              <h2 className="mt-3 text-4xl font-extrabold text-slate-900 leading-tight">
                Unlocking Human{' '}
                <span className="text-blue-600">Potential</span>, Globally
              </h2>
              <p className="mt-5 text-slate-600 leading-relaxed text-lg">
                We exist to democratize access to world-class leadership development, mentorship,
                and purposeful career growth — ensuring that geography, background, or circumstance
                is never a barrier to realizing one's full potential.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Bridge the global opportunity gap',
                  'Cultivate purpose-driven leaders',
                  'Build high-trust, high-impact communities',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Right: Vision */}
          <FadeIn direction="right" delay={0.15}>
            <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 text-white overflow-hidden shadow-2xl shadow-blue-900/30">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <span className="text-xs font-bold text-blue-200 tracking-widest uppercase">
                  Our Vision
                </span>
                <h3 className="mt-3 text-3xl font-extrabold leading-tight">
                  A World Where Growth Is a{' '}
                  <span className="text-blue-200">Universal Right</span>
                </h3>
                <p className="mt-5 text-blue-100 leading-relaxed">
                  By 2030, PGT Global Network will have touched 1 million lives across 100+
                  countries — creating an interconnected generation of leaders who build
                  businesses, institutions, and communities that endure.
                </p>

                <div className="mt-8 flex items-center gap-4 border-t border-white/20 pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-extrabold">1M+</div>
                    <div className="text-xs text-blue-200 mt-0.5">Lives by 2030</div>
                  </div>
                  <div className="w-px h-10 bg-white/20" />
                  <div className="text-center">
                    <div className="text-3xl font-extrabold">100+</div>
                    <div className="text-xs text-blue-200 mt-0.5">Countries</div>
                  </div>
                  <div className="w-px h-10 bg-white/20" />
                  <div className="text-center">
                    <div className="text-3xl font-extrabold">∞</div>
                    <div className="text-xs text-blue-200 mt-0.5">Impact</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">
              Our Story
            </span>
            <h2 className="mt-3 text-4xl font-extrabold text-slate-900">
              How We Got Here
            </h2>
          </FadeIn>

          {/* Timeline — center-line layout */}
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line (desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-blue-100 to-transparent -translate-x-1/2" />

            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <TimelineEntry key={item.year} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">
              What We Stand For
            </span>
            <h2 className="mt-3 text-4xl font-extrabold text-slate-900">Our Core Values</h2>
            <p className="mt-3 text-slate-500 max-w-lg mx-auto">
              These principles guide every decision, programme, and partnership we make.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((value, i) => (
              <ValueCard key={value.title} {...value} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ───────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">
              Leadership
            </span>
            <h2 className="mt-3 text-4xl font-extrabold text-slate-900">
              The Team Behind the Mission
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">
              Built by practitioners who have walked the path — and are committed to opening it
              for millions more.
            </p>
          </FadeIn>

          {/* Founder card — prominent, full-width feel */}
          <FadeIn delay={0.1}>
            <div className="relative bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-10 md:p-14 overflow-hidden shadow-2xl mb-8">
              {/* Background texture */}
              <div className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                  backgroundSize: '32px 32px',
                }} />
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

              <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center md:items-start">
                {/* Avatar placeholder */}
                <div className="flex-shrink-0">
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-xl shadow-blue-900/40 text-white text-5xl font-extrabold select-none">
                    P
                  </div>
                  {/* Credibility badges */}
                  <div className="flex gap-2 mt-4 justify-center md:justify-start">
                    <span className="text-xs bg-blue-500/20 text-blue-300 border border-blue-400/20 px-2.5 py-1 rounded-full">
                      Founder
                    </span>
                    <span className="text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-400/20 px-2.5 py-1 rounded-full">
                      CEO
                    </span>
                  </div>
                </div>

                {/* Bio */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-extrabold text-white mb-1">Pranav Gujar</h3>
                  <p className="text-blue-300 font-medium mb-5">
                    Founder & CEO, PGT Global Network
                  </p>
                  <p className="text-slate-300 leading-relaxed max-w-2xl">
                    Pranav founded PGT Global Network on the conviction that purposeful growth
                    should be a universal right, not a privileged exception. A serial
                    entrepreneur and community builder, he has spent over a decade building
                    platforms and programmes that connect ambitious individuals to the
                    opportunities, mentors, and networks they need to thrive. Under his
                    leadership, PGT has grown from a bold idea into a globally recognised
                    ecosystem impacting thousands of lives across 30+ countries.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                    {[
                      'Leadership Development',
                      'Social Entrepreneurship',
                      'Community Building',
                      'Strategic Partnerships',
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-slate-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3 justify-center md:justify-start">
                    <a
                      href="https://www.linkedin.com/company/pgt-global-network"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white transition-colors duration-200"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href="mailto:office@pgtglobalnetwork.com"
                      className="w-9 h-9 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white transition-colors duration-200"
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Credibility bar */}
          <FadeIn delay={0.15}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Years of Operation', value: '7+', icon: <Calendar size={16} /> },
                { label: 'Industry Awards', value: '12+', icon: <Award size={16} /> },
                { label: 'Partner Organisations', value: '80+', icon: <CheckCircle size={16} /> },
                { label: 'Active Communities', value: '50+', icon: <Users size={16} /> },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center text-center p-5 rounded-2xl bg-slate-50 border border-slate-100"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-3">
                    {item.icon}
                  </div>
                  <div className="text-2xl font-extrabold text-slate-900">{item.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── INITIATIVES ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">
              What We Do
            </span>
            <h2 className="mt-3 text-4xl font-extrabold text-slate-900">
              Key Initiatives & Programmes
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">
              Six high-impact pillars through which PGT delivers its mission across the globe.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INITIATIVES.map((item, i) => (
              <InitiativeCard key={item.title} {...item} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ── GLOBAL PRESENCE ──────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-10 md:p-16 overflow-hidden">
            {/* Decorative globe */}
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border-[40px] border-blue-100/50 opacity-60" />
            <div className="absolute -right-10 -top-10 w-52 h-52 rounded-full border-[30px] border-blue-100/40 opacity-40" />

            <FadeIn>
              <div className="max-w-2xl relative z-10">
                <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">
                  Global Presence
                </span>
                <h2 className="mt-3 text-4xl font-extrabold text-slate-900 leading-tight">
                  A Truly Borderless{' '}
                  <span className="text-blue-600">Ecosystem</span>
                </h2>
                <p className="mt-5 text-slate-600 leading-relaxed">
                  From Mumbai to Nairobi, Lagos to London — PGT Global Network operates in
                  30+ countries, with active chapters, programmes, and community hubs that
                  make our mission tangible at the local level.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { label: 'Active Countries', value: '30+' },
                    { label: 'Community Chapters', value: '50+' },
                    { label: 'Languages Served', value: '15+' },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <div className="text-3xl font-extrabold text-blue-600">{item.value}</div>
                      <div className="text-xs text-slate-500 mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Join the Movement
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
              Ready to Grow with{' '}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Purpose?
              </span>
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Become part of a global community of ambitious individuals, passionate mentors, and
              purpose-driven leaders shaping the world of tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/30 hover:-translate-y-0.5"
              >
                Explore Programmes <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>

            {/* Trust line */}
            <p className="mt-8 text-slate-500 text-sm flex items-center justify-center gap-2">
              <Shield size={14} className="text-slate-400" />
              Trusted by 10,000+ individuals across 30+ countries
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default About;