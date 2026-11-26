import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Filter, Sparkles } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import { getProjectsByCategory } from '../data/projects';
import type { ProjectCategory } from '../types';

const categories: { label: string; value: ProjectCategory }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Power BI', value: 'power-bi' },
  { label: 'SQL', value: 'sql' },
  { label: 'Excel', value: 'excel' },
  { label: 'Python', value: 'python' },
  { label: 'Business Analytics', value: 'business-analytics' },
];

const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const filtered = getProjectsByCategory(activeCategory);

  return (
    <>
      <Helmet>
        <title>Projects | Bablu Shakya — Data Analyst &amp; BI Portfolio</title>
        <meta
          name="description"
          content="Explore data analytics projects by Bablu Shakya: Financial Performance Dashboard, Customer Churn Analysis, UAE Real Estate Market Analysis, and E-commerce Profitability."
        />
        <link rel="canonical" href="https://bablushakya.dev/projects" />
      </Helmet>

      <section className="section-padding bg-[#070B14]">
        <Container>
          <SectionHeading
            eyebrow="Practical Case Studies"
            title="Data Analytics Portfolio"
            subtitle="Hands-on analytics projects demonstrating data cleaning, relational queries, interactive dashboards, and business recommendations."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400 mr-2">
              <Filter size={13} />
              <span>Filter:</span>
            </div>
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105'
                      : 'bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="card-base card-hover flex flex-col bg-[#0D1527] border border-slate-800 rounded-2xl overflow-hidden group shadow-lg"
                >
                  {/* Visual Preview Image - NO OVERLAPPING BADGES */}
                  <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden border-b border-slate-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Clean Non-Overlapping Status Header */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span
                            className={`mono text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${
                              project.status === 'completed'
                                ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                                : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                            }`}
                          >
                            {project.status === 'completed' ? '✓ Completed' : '⟳ In Progress'}
                          </span>
                          {project.featured && (
                            <span className="mono text-[10px] font-bold px-2 py-1 rounded-md bg-blue-500/15 text-blue-300 border border-blue-500/30 flex items-center gap-1">
                              <Sparkles size={11} /> Featured
                            </span>
                          )}
                        </div>

                        <span className="mono text-[10px] text-slate-400 uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 border border-slate-700/60 font-medium">
                          {project.category.replace('-', ' ')}
                        </span>
                      </div>

                      <h3 className="font-heading text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed mt-2.5">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tools Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="mono text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700/80 text-blue-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      {/* Case Study Link */}
                      <Link
                        to={`/projects/${project.id}`}
                        className="inline-flex items-center justify-between w-full pt-3 border-t border-slate-800 text-xs font-semibold text-blue-400 hover:text-cyan-400 transition-colors"
                      >
                        <span>View Interactive Case Study</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-400 text-sm">
              No projects found in this category.
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default ProjectsPage;
