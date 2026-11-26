import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3,
  TrendingUp,
  Database,
  FileSpreadsheet,
  Code2,
  Layers,
  Sparkles,
  Search,
  ArrowRight,
  Workflow,
  LayoutGrid,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  ExternalLink,
} from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import { skillCategories } from '../data/skills';
import type { Skill, SkillCategory } from '../types';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  BarChart3,
  TrendingUp,
  Database,
  FileSpreadsheet,
  Code2,
  Layers,
};

const categoryTheme: Record<
  string,
  { color: string; bg: string; border: string; glow: string; textAccent: string }
> = {
  'data-analytics': {
    color: '#3B82F6',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    glow: 'rgba(59, 130, 246, 0.15)',
    textAccent: 'text-blue-400',
  },
  'business-intelligence': {
    color: '#22D3EE',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    glow: 'rgba(34, 211, 238, 0.15)',
    textAccent: 'text-cyan-400',
  },
  database: {
    color: '#818CF8',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/30',
    glow: 'rgba(129, 140, 248, 0.15)',
    textAccent: 'text-indigo-400',
  },
  excel: {
    color: '#10B981',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    glow: 'rgba(16, 185, 129, 0.15)',
    textAccent: 'text-emerald-400',
  },
  programming: {
    color: '#EC4899',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/30',
    glow: 'rgba(236, 72, 153, 0.15)',
    textAccent: 'text-pink-400',
  },
  additional: {
    color: '#F59E0B',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    glow: 'rgba(245, 158, 11, 0.15)',
    textAccent: 'text-amber-400',
  },
};

// Lifecycle steps for the Pipeline Workflow view
const lifecycleSteps = [
  {
    step: '01',
    phase: 'Ingestion & Database',
    tools: 'SQL, PostgreSQL, BigQuery',
    color: '#818CF8',
    icon: Database,
    description:
      'Connecting to transactional stores, writing performant extraction queries, multi-table joins, and shaping raw feeds.',
  },
  {
    step: '02',
    phase: 'Cleaning & Transformation',
    tools: 'Power Query, Pandas, Excel',
    color: '#3B82F6',
    icon: Sparkles,
    description:
      'Imputing missing values, removing anomalies, schema validation, and engineering clean, standardized analysis tables.',
  },
  {
    step: '03',
    phase: 'Exploration & Analysis',
    tools: 'Python (NumPy, Seaborn), Excel',
    color: '#EC4899',
    icon: Code2,
    description:
      'Conducting descriptive analytics, distribution skewness checks, cohort segmentation, and variance investigations.',
  },
  {
    step: '04',
    phase: 'BI Dashboards & Modeling',
    tools: 'Power BI, DAX, Excel Slicers',
    color: '#22D3EE',
    icon: BarChart3,
    description:
      'Star schema data modeling, calculated DAX metrics, dynamic slicers, drill-through cards, and interactive layouts.',
  },
  {
    step: '05',
    phase: 'Executive Decision Storytelling',
    tools: 'KPI Reporting, Executive Decks',
    color: '#10B981',
    icon: TrendingUp,
    description:
      'Translating quantitative data into actionable business recommendations, commercial strategies, and operational ROI.',
  },
];

const SkillsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'bento' | 'pipeline'>('bento');

  // Filter skills based on search query and category
  const filteredCategories = useMemo(() => {
    return skillCategories
      .map((cat) => {
        // If category filter is active and doesn't match, return null
        if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
          return null;
        }

        // Filter skills inside category by search query
        const matchingSkills = cat.skills.filter((skill) => {
          if (!searchQuery.trim()) return true;
          const query = searchQuery.toLowerCase();
          return (
            skill.name.toLowerCase().includes(query) ||
            skill.description.toLowerCase().includes(query) ||
            skill.tools?.some((t) => t.toLowerCase().includes(query)) ||
            skill.snippet?.toLowerCase().includes(query) ||
            skill.appliedIn?.toLowerCase().includes(query)
          );
        });

        if (matchingSkills.length === 0) return null;

        return {
          ...cat,
          skills: matchingSkills,
        };
      })
      .filter(Boolean) as SkillCategory[];
  }, [selectedCategory, searchQuery]);

  const totalFilteredCount = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, [filteredCategories]);

  return (
    <>
      <Helmet>
        <title>Technical Skills &amp; Stack | Bablu</title>
        <meta
          name="description"
          content="Comprehensive technical skills of Bablu: SQL queries, Power BI dashboards, advanced Excel MIS reporting, and Python data manipulation."
        />
        <link rel="canonical" href="https://bablushakya.dev/skills" />
      </Helmet>

      <section className="section-padding bg-[#070B14] min-h-screen">
        <Container>
          <SectionHeading
            eyebrow="Technical Capabilities"
            title="Analytics Skills &amp; Capabilities Matrix"
            subtitle="Explore practical competencies across database querying, data transformation, interactive dashboarding, and business decision support."
          />

          {/* ════════════════════ TOP EXECUTIVE STAT STRIP ════════════════════ */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-5xl mx-auto">
            <div className="card-base p-4 sm:p-5 bg-[#0C1222] border border-slate-800 rounded-2xl flex items-center gap-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center flex-shrink-0">
                <Database size={20} />
              </div>
              <div>
                <span className="mono text-xl sm:text-2xl font-bold text-white block">6 Domains</span>
                <span className="text-[11px] text-slate-400 block -mt-0.5 font-medium">
                  End-to-End Analytics Stack
                </span>
              </div>
            </div>

            <div className="card-base p-4 sm:p-5 bg-[#0C1222] border border-slate-800 rounded-2xl flex items-center gap-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center flex-shrink-0">
                <BarChart3 size={20} />
              </div>
              <div>
                <span className="mono text-xl sm:text-2xl font-bold text-white block">25+ Skills</span>
                <span className="text-[11px] text-slate-400 block -mt-0.5 font-medium">
                  Practical Competencies
                </span>
              </div>
            </div>

            <div className="card-base p-4 sm:p-5 bg-[#0C1222] border border-slate-800 rounded-2xl flex items-center gap-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <span className="mono text-xl sm:text-2xl font-bold text-white block">100%</span>
                <span className="text-[11px] text-slate-400 block -mt-0.5 font-medium">
                  Project-Evidenced
                </span>
              </div>
            </div>

            <div className="card-base p-4 sm:p-5 bg-[#0C1222] border border-slate-800 rounded-2xl flex items-center gap-3.5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center flex-shrink-0">
                <TrendingUp size={20} />
              </div>
              <div>
                <span className="mono text-xl sm:text-2xl font-bold text-white block">UAE Ready</span>
                <span className="text-[11px] text-slate-400 block -mt-0.5 font-medium">
                  Dubai &amp; Abu Dhabi Open
                </span>
              </div>
            </div>
          </div>

          {/* ════════════════════ CONTROLS & FILTER BAR ════════════════════ */}
          <div className="max-w-6xl mx-auto mb-10 space-y-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#0B101D] border border-slate-800 shadow-md">
              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <Search
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search skills, tools, formulas..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* View Switcher: Bento Matrix vs Pipeline View */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 self-stretch md:self-auto justify-center">
                <button
                  onClick={() => setViewMode('bento')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    viewMode === 'bento'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <LayoutGrid size={14} />
                  <span>Bento Matrix</span>
                </button>
                <button
                  onClick={() => setViewMode('pipeline')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    viewMode === 'pipeline'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Workflow size={14} />
                  <span>Lifecycle Pipeline</span>
                </button>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold flex-shrink-0 transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <span>All Capabilities</span>
                <span className="px-1.5 py-0.5 rounded-md bg-black/30 text-[10px] mono">
                  25
                </span>
              </button>

              {skillCategories.map((cat) => {
                const Icon = iconMap[cat.icon] || BarChart3;
                const isSelected = selectedCategory === cat.id;
                const theme = categoryTheme[cat.id];

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold flex-shrink-0 transition-all ${
                      isSelected
                        ? 'text-white border shadow-sm'
                        : 'bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                    style={
                      isSelected
                        ? {
                            backgroundColor: `${theme.color}25`,
                            borderColor: theme.color,
                          }
                        : {}
                    }
                  >
                    <Icon size={14} style={{ color: theme.color }} />
                    <span>{cat.title}</span>
                    <span className="px-1.5 py-0.5 rounded-md bg-black/30 text-[10px] mono">
                      {cat.skills.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ════════════════════ VIEW 1: BENTO MATRIX VIEW ════════════════════ */}
          {viewMode === 'bento' && (
            <div className="space-y-12 max-w-6xl mx-auto">
              {filteredCategories.length === 0 ? (
                <div className="text-center py-16 p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
                  <Search size={32} className="mx-auto text-slate-400 mb-3" />
                  <p className="font-heading text-lg font-bold text-white mb-1">
                    No matching skills found
                  </p>
                  <p className="text-xs text-slate-400 mb-4">
                    Try searching for another keyword like &quot;SQL&quot;, &quot;DAX&quot;, &quot;Excel&quot;, or &quot;Cleaning&quot;.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                filteredCategories.map((cat) => {
                  const Icon = iconMap[cat.icon] || BarChart3;
                  const theme = categoryTheme[cat.id] || {
                    color: '#3B82F6',
                    bg: 'bg-blue-500/10',
                    border: 'border-blue-500/30',
                    glow: 'rgba(59, 130, 246, 0.15)',
                    textAccent: 'text-blue-400',
                  };

                  return (
                    <motion.div
                      key={cat.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5"
                    >
                      {/* Category Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"
                            style={{
                              backgroundColor: `${theme.color}18`,
                              color: theme.color,
                            }}
                          >
                            <Icon size={20} />
                          </div>
                          <div>
                            <h2 className="font-heading text-lg sm:text-xl font-bold text-white">
                              {cat.title}
                            </h2>
                            <span className="mono text-[11px] text-slate-400 block">
                              {cat.skills.length} Key Competencies Verified
                            </span>
                          </div>
                        </div>

                        <span
                          className="mono text-xs px-2.5 py-1 rounded-lg border font-semibold hidden sm:inline-block"
                          style={{
                            backgroundColor: `${theme.color}10`,
                            borderColor: `${theme.color}30`,
                            color: theme.color,
                          }}
                        >
                          {cat.id.toUpperCase()}
                        </span>
                      </div>

                      {/* Responsive Grid Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {cat.skills.map((skill: Skill) => (
                          <div
                            key={skill.name}
                            className="card-base group relative p-5 bg-[#0C1222] border border-slate-800/90 hover:border-slate-700 rounded-2xl flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                            style={{
                              boxShadow: `0 8px 24px -10px ${theme.glow}`,
                            }}
                          >
                            {/* Card Top: Indicator & Title */}
                            <div>
                              <div className="flex items-start justify-between gap-3 mb-2.5">
                                <div className="flex items-center gap-2">
                                  <span
                                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                                    style={{ backgroundColor: theme.color }}
                                  />
                                  <h3 className="font-heading text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                                    {skill.name}
                                  </h3>
                                </div>
                                <span className="mono text-[10px] text-slate-400 uppercase tracking-wider">
                                  CORE
                                </span>
                              </div>

                              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                                {skill.description}
                              </p>

                              {/* Mini Code / Syntax Preview Pill */}
                              {skill.snippet && (
                                <div className="mb-4 p-2.5 rounded-xl bg-slate-950/90 border border-slate-800/80 font-mono text-[11px] text-slate-300 flex items-center gap-2 overflow-hidden shadow-inner">
                                  <Terminal
                                    size={12}
                                    className="flex-shrink-0"
                                    style={{ color: theme.color }}
                                  />
                                  <span className="truncate">{skill.snippet}</span>
                                </div>
                              )}
                            </div>

                            {/* Card Bottom: Tools & Applied In Project */}
                            <div className="space-y-3 pt-3 border-t border-slate-800/80">
                              {/* Tools Chips */}
                              {skill.tools && (
                                <div className="flex flex-wrap gap-1.5">
                                  {skill.tools.map((t) => (
                                    <span
                                      key={t}
                                      className="mono text-[10px] px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                                    >
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              )}

                              {/* Applied In Link / Badge */}
                              <div className="flex items-center justify-between text-[11px] pt-1">
                                {skill.projectUrl ? (
                                  <Link
                                    to={skill.projectUrl}
                                    className="inline-flex items-center gap-1.5 font-medium text-blue-400 hover:text-cyan-300 transition-colors group/link"
                                  >
                                    <CheckCircle2 size={13} className="text-emerald-400 flex-shrink-0" />
                                    <span className="truncate">{skill.appliedIn}</span>
                                    <ArrowRight
                                      size={11}
                                      className="group-hover/link:translate-x-0.5 transition-transform"
                                    />
                                  </Link>
                                ) : (
                                  <div className="inline-flex items-center gap-1.5 text-slate-400">
                                    <CheckCircle2 size={13} className="text-emerald-400 flex-shrink-0" />
                                    <span>{skill.appliedIn || 'Applied in Project Work'}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })
              )}
            </div>
          )}

          {/* ════════════════════ VIEW 2: LIFECYCLE PIPELINE VIEW ════════════════════ */}
          {viewMode === 'pipeline' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto space-y-6"
            >
              <div className="p-6 rounded-2xl bg-[#0B101D] border border-slate-800 text-center mb-8">
                <span className="mono text-xs font-semibold text-blue-400 uppercase tracking-widest block mb-2">
                  — Analytical Methodology
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
                  End-to-End Data Analytics Workflow
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
                  How raw, messy operational data is transformed into validated executive strategy across 5 structured phases.
                </p>
              </div>

              <div className="space-y-4">
                {lifecycleSteps.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.step}
                      className="card-base p-6 bg-[#0C1222] border border-slate-800 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative overflow-hidden group hover:border-slate-700 transition-colors"
                    >
                      <div
                        className="absolute left-0 top-0 bottom-0 w-1.5"
                        style={{ backgroundColor: item.color }}
                      />

                      <div className="flex items-start sm:items-center gap-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-mono font-bold text-sm shadow-md"
                          style={{ backgroundColor: `${item.color}25`, color: item.color }}
                        >
                          <Icon size={22} />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="mono text-xs font-bold" style={{ color: item.color }}>
                              PHASE {item.step}
                            </span>
                            <span className="text-slate-600">•</span>
                            <h4 className="font-heading text-base sm:text-lg font-bold text-white">
                              {item.phase}
                            </h4>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col md:items-end flex-shrink-0">
                        <span className="mono text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                          Primary Tools
                        </span>
                        <span className="mono text-xs font-semibold px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-200">
                          {item.tools}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* ════════════════════ PHILOSOPHY & PROJECT CTA ════════════════════ */}
          <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0B1224] to-[#070B14] border border-blue-500/25 shadow-xl">
            <div className="md:col-span-8 space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-blue-400" />
                <h4 className="font-heading text-base font-bold text-white">
                  No Arbitrary Skill Percentages
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Rather than displaying fabricated proficiency meters (such as &quot;90% SQL&quot;), competencies are verified through actual queries, interactive Power BI dashboards, and structured business case studies.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-start md:justify-end">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-md shadow-blue-500/20 hover:scale-105 transition-all"
              >
                <span>View Real Case Studies</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SkillsPage;
