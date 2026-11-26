import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin,
  ChevronRight,
  Download,
  Mail,
  ExternalLink,
  BarChart3,
  Database,
  TrendingUp,
  FileSpreadsheet,
  Code2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import { getFeaturedProjects } from '../data/projects';
import { socialLinks } from '../data/navigation';

const heroChartData = [
  { month: 'Jan', revenue: 420, profit: 110 },
  { month: 'Feb', revenue: 390, profit: 100 },
  { month: 'Mar', revenue: 510, profit: 170 },
  { month: 'Apr', revenue: 480, profit: 160 },
  { month: 'May', revenue: 530, profit: 170 },
  { month: 'Jun', revenue: 610, profit: 220 },
  { month: 'Jul', revenue: 580, profit: 200 },
  { month: 'Aug', revenue: 650, profit: 240 },
];

const expensePieData = [
  { name: 'Operations', value: 35, color: '#3B82F6' },
  { name: 'Marketing', value: 25, color: '#22D3EE' },
  { name: 'Technology', value: 20, color: '#6366F1' },
  { name: 'Admin', value: 20, color: '#F59E0B' },
];

const kpiCards = [
  { label: 'Core Tools', value: 'SQL & BI', sub: 'Power BI · Excel · Python', color: '#3B82F6', change: '+Expertise' },
  { label: 'Analytic Projects', value: '4+ Live', sub: 'Financial, Churn, Real Estate', color: '#22D3EE', change: 'Interactive' },
  { label: 'Academic CGPA', value: '7.9', sub: 'B.Tech Info Technology', color: '#6366F1', change: 'Grad: Aug 2026' },
  { label: 'Internship', value: '6 Months', sub: 'Ziion Technology Data Analyst', color: '#10B981', change: 'Verified' },
];

const techBadges = [
  'SQL',
  'Microsoft Power BI',
  'Advanced Excel',
  'Python (Pandas/Seaborn)',
  'Data Cleaning & ETL',
  'Interactive Dashboards',
  'KPI Monitoring',
  'MIS Reporting',
  'Business Intelligence',
];

const HomePage: React.FC = () => {
  const featuredProjects = getFeaturedProjects().slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Bablu Shakya | Data Analyst &amp; Business Intelligence Portfolio</title>
        <meta
          name="description"
          content="Bablu Shakya — Data Analyst & Business Intelligence Professional. Turning complex data into clear dashboards and actionable insights. Open to UAE relocation."
        />
        <link rel="canonical" href="https://bablushakya.dev" />
      </Helmet>

      {/* ════════════════════ HERO SECTION ════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-[128px] pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Relocation / Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wide"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
                <span>Open to UAE Opportunities · Relocation Ready 🇦🇪</span>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                  Turning Data into <br />
                  <span className="text-gradient">Actionable Insights.</span>
                </h1>
                <p className="font-heading text-lg sm:text-xl font-semibold text-slate-200 mt-4">
                  Data Analyst &amp; Business Intelligence Specialist
                </p>
              </motion.div>

              {/* Supporting Copy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl"
              >
                I help organizations make smarter, faster decisions by converting messy datasets
                into clean data models, intuitive Power BI dashboards, and strategic business reports.
              </motion.p>

              {/* Skills Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex flex-wrap gap-2 pt-1"
              >
                {['SQL', 'Power BI', 'Microsoft Excel', 'Python', 'KPI Reporting'].map((tool) => (
                  <span
                    key={tool}
                    className="mono text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-blue-400 shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </motion.div>

              {/* Location Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-2 text-xs font-medium text-slate-400"
              >
                <MapPin size={14} className="text-blue-400" />
                <span>India · Ready to Relocate to Dubai / Abu Dhabi, UAE</span>
              </motion.div>

              {/* Call to Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-wrap items-center gap-4 pt-3"
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-500/25 hover:scale-105 transition-all duration-200"
                >
                  Explore My Projects
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/resume"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-slate-200 hover:text-white shadow-sm hover:scale-105 transition-all duration-200"
                >
                  <Download size={16} className="text-cyan-400" />
                  View Resume
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <Mail size={16} />
                  Let's Connect
                </Link>
              </motion.div>
            </div>

            {/* Right Column: High-Tech Analytics Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-2xl bg-[#0D1527] border border-blue-500/20 p-5 sm:p-6 shadow-2xl shadow-blue-950/50 backdrop-blur-xl">
                {/* Dashboard top window header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="ml-2 text-xs font-mono text-slate-400">
                      Live Analytics Workspace
                    </span>
                  </div>
                  <span className="mono text-[11px] px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/30 text-blue-400 font-semibold flex items-center gap-1.5">
                    <Sparkles size={12} />
                    BI Preview
                  </span>
                </div>

                {/* 4 Mini KPI cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                  {kpiCards.map((kpi) => (
                    <div
                      key={kpi.label}
                      className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono text-slate-400 uppercase">
                          {kpi.label}
                        </span>
                      </div>
                      <p
                        className="font-heading text-lg font-bold"
                        style={{ color: kpi.color }}
                      >
                        {kpi.value}
                      </p>
                      <span className="text-[10px] text-slate-400 truncate mt-0.5">
                        {kpi.sub}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Revenue vs Profit Trend Chart */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200">
                        Revenue vs. Profit Growth Curve
                      </h4>
                      <p className="text-[10px] text-slate-400">
                        Monthly aggregated financial performance
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-[10px] mono">
                      <span className="flex items-center gap-1 text-blue-400">
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                        Revenue
                      </span>
                      <span className="flex items-center gap-1 text-cyan-400">
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                        Net Profit
                      </span>
                    </div>
                  </div>

                  <ResponsiveContainer width="100%" height={160}>
                    <AreaChart data={heroChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="heroRev" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="heroProf" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#22D3EE" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="#22D3EE" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                      <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#64748B' }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 10, fill: '#64748B' }} axisLine={false} tickLine={false} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#0F172A',
                          borderColor: '#334155',
                          borderRadius: 8,
                          fontSize: 12,
                          color: '#F8FAFC'
                        }}
                      />
                      <Area type="monotone" dataKey="revenue" stroke="#3B82F6" fill="url(#heroRev)" strokeWidth={2.5} />
                      <Area type="monotone" dataKey="profit" stroke="#22D3EE" fill="url(#heroProf)" strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Bottom Expense Distribution */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 flex-shrink-0">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={expensePieData}
                            cx="50%"
                            cy="50%"
                            innerRadius={18}
                            outerRadius={28}
                            paddingAngle={3}
                            dataKey="value"
                          >
                            {expensePieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200">
                        Cost Driver Allocation
                      </h4>
                      <p className="text-[10px] text-slate-400">
                        Operational vs tech expenditure breakdown
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-end text-[10px] mono">
                    {expensePieData.map((item) => (
                      <span
                        key={item.name}
                        className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 flex items-center gap-1.5"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        {item.name} {item.value}%
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ════════════════════ TECH TICKER ════════════════════ */}
      <section className="py-4 bg-[#0A101D] border-y border-slate-800">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {techBadges.map((badge, idx) => (
              <span
                key={badge}
                className="mono text-xs font-medium text-slate-400 flex items-center gap-3 hover:text-blue-400 transition-colors"
              >
                {idx > 0 && <span className="text-blue-500/40">•</span>}
                {badge}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════ ABOUT BENTO ════════════════════ */}
      <section className="section-padding bg-[#070B14]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story column */}
            <div className="lg:col-span-5 space-y-5">
              <span className="mono text-xs font-semibold text-blue-400 uppercase tracking-widest block">
                — Professional Profile
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                From Data to <span className="text-gradient">Strategic Decisions.</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                I am Bablu Shakya, a B.Tech Information Technology graduate with focused expertise in
                Data Analytics, Business Intelligence and MIS Reporting.
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                My hands-on experience spans building SQL query suites for database extraction, developing
                executive Power BI dashboards, creating automated Excel reporting frameworks, and analyzing
                trends to identify growth bottlenecks.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 group"
                >
                  Read my complete analytical story
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* 6 Capabilities Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: BarChart3,
                  title: 'Data Cleaning & EDA',
                  desc: 'Systematic outlier detection, missing value handling, and exploratory analysis to guarantee data accuracy.',
                  color: '#3B82F6',
                },
                {
                  icon: TrendingUp,
                  title: 'Power BI Dashboards',
                  desc: 'Interactive DAX measures, dynamic filtering, relationship modeling, and cross-report drill-throughs.',
                  color: '#22D3EE',
                },
                {
                  icon: Database,
                  title: 'SQL & Database Queries',
                  desc: 'Complex joins, window functions, CTEs, aggregations, and performance-tuned extraction pipelines.',
                  color: '#6366F1',
                },
                {
                  icon: FileSpreadsheet,
                  title: 'Excel & MIS Reporting',
                  desc: 'Advanced Pivot tables, XLOOKUP, dynamic slicers, and automated periodic executive summaries.',
                  color: '#10B981',
                },
                {
                  icon: Code2,
                  title: 'Python Data Science',
                  desc: 'Pandas DataFrames, NumPy array manipulation, and statistical data visualization with Matplotlib & Seaborn.',
                  color: '#EC4899',
                },
                {
                  icon: ShieldCheck,
                  title: 'Business Acumen & KPIs',
                  desc: 'Translating analytical metrics directly into bottom-line revenue improvements and retention strategies.',
                  color: '#F59E0B',
                },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div
                  key={title}
                  className="card-base card-hover p-5 bg-[#0D1527] border border-slate-800 rounded-xl"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3.5"
                    style={{ backgroundColor: `${color}18` }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  <h3 className="font-heading text-base font-bold text-white mb-1.5">
                    {title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ════════════════════ FEATURED PROJECTS (WITH NON-OVERLAPPING CLEAN HEADERS) ════════════════════ */}
      <section className="section-padding bg-[#0A101E]">
        <Container>
          <SectionHeading
            eyebrow="Portfolio Case Studies"
            title="Featured Analytics Projects"
            subtitle="Demonstrating real-world problem solving, analytical methodology, interactive dashboards, and business recommendations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="card-base card-hover flex flex-col bg-[#0D1527] border border-slate-800 rounded-2xl overflow-hidden group shadow-lg"
              >
                {/* Visual Preview Banner - CLEAN WITHOUT OVERLAPPING FLOATING BADGES */}
                <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden border-b border-slate-800">
                  <img
                    src={project.image}
                    alt={`${project.title} dashboard preview`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Clean Status & Category Bar (No text collisions) */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`mono text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${
                          project.status === 'completed'
                            ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                            : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                        }`}
                      >
                        {project.status === 'completed' ? '✓ Completed' : '⟳ In Progress'}
                      </span>
                      <span className="mono text-[10px] text-slate-400 uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 border border-slate-700/60 font-medium">
                        {project.category.replace('-', ' ')}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mt-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Tool Tags & Link */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tools.slice(0, 4).map((tool) => (
                        <span
                          key={tool}
                          className="mono text-[10px] font-medium px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/80 text-blue-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center justify-between w-full pt-3 border-t border-slate-800 text-xs font-semibold text-blue-400 hover:text-cyan-400 transition-colors"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white shadow-md hover:scale-105 transition-all duration-200"
            >
              View All 5 Analytics Projects
              <ArrowRight size={16} className="text-blue-400" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ════════════════════ RECRUITER CTA ════════════════════ */}
      <section className="section-padding bg-[#070B14]">
        <Container>
          <div className="relative rounded-3xl bg-gradient-to-br from-blue-900/30 via-slate-900 to-[#0B1222] border border-blue-500/30 p-10 sm:p-16 text-center overflow-hidden shadow-2xl">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />

            <span className="mono text-xs font-bold text-blue-400 tracking-widest uppercase block mb-3">
              — Connect &amp; Collaborate
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Looking for a Dedicated <br />
              <span className="text-gradient">Data Analyst in the UAE?</span>
            </h2>
            <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed mb-8">
              I am actively interviewing for entry-level Data Analyst, BI Analyst, and MIS Executive
              roles across Dubai and the UAE. Available for relocation immediately.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-xl shadow-blue-600/30 hover:scale-105 transition-all duration-200"
              >
                <Mail size={16} />
                Get In Touch Today
              </Link>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white hover:scale-105 transition-all duration-200"
              >
                <ExternalLink size={16} className="text-blue-400" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
