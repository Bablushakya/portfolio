import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  BarChart3,
  TrendingUp,
  Database,
  FileSpreadsheet,
  Code2,
  Layers,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import { skillCategories } from '../data/skills';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  BarChart3,
  TrendingUp,
  Database,
  FileSpreadsheet,
  Code2,
  Layers,
};

const categoryTheme: Record<string, { color: string; bg: string; border: string }> = {
  'data-analytics': { color: '#3B82F6', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  'business-intelligence': { color: '#22D3EE', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
  'database': { color: '#6366F1', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20' },
  'excel': { color: '#10B981', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  'programming': { color: '#EC4899', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
  'additional': { color: '#F59E0B', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
};

const SkillsPage: React.FC = () => {
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

      <section className="section-padding bg-[#070B14]">
        <Container>
          <SectionHeading
            eyebrow="Technical Capabilities"
            title="Analytics Skills &amp; Stack"
            subtitle="Practical competencies across data extraction, exploratory analysis, dashboard design, and business decision support."
          />

          <div className="space-y-14 max-w-6xl mx-auto">
            {skillCategories.map((cat) => {
              const Icon = iconMap[cat.icon] || BarChart3;
              const theme = categoryTheme[cat.id] || {
                color: '#3B82F6',
                bg: 'bg-blue-500/10',
                border: 'border-blue-500/20',
              };

              return (
                <div key={cat.id} className="space-y-5">
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 pb-3 border-b border-slate-800">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${theme.color}15`, color: theme.color }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <h2 className="font-heading text-xl font-bold text-white">
                        {cat.title}
                      </h2>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="card-base card-hover p-5 bg-[#0D1527] border border-slate-800 rounded-xl flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: theme.color }}
                            />
                            <h3 className="font-heading text-base font-bold text-white">
                              {skill.name}
                            </h3>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {skill.description}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                          <CheckCircle2 size={13} className="text-emerald-400" />
                          <span>Applied in Project Work</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Philosophy Note */}
          <div className="mt-16 max-w-3xl mx-auto p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center text-xs text-slate-400">
            <span className="font-bold text-white">No Arbitrary Skill Percentages:</span> Rather than displaying arbitrary percentages (e.g. "90% SQL"), capabilities are evidenced through real project case studies, query scripts, and interactive Power BI dashboards.
          </div>
        </Container>
      </section>
    </>
  );
};

export default SkillsPage;
