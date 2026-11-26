import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  Building,
  Award
} from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import { experiences } from '../data/experience';
import { education } from '../data/education';

const ExperiencePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Experience &amp; Education | Bablu Shakya Portfolio</title>
        <meta
          name="description"
          content="Professional experience and academic background of Bablu Shakya: Data Analyst Intern at Ziion Technology, IDEMA Data Analytics Training, and B.Tech IT degree."
        />
        <link rel="canonical" href="https://bablushakya.dev/experience" />
      </Helmet>

      <section className="section-padding bg-[#070B14]">
        <Container>
          <SectionHeading
            eyebrow="Career Journey"
            title="Experience &amp; Training"
            subtitle="Hands-on analytics internship experience, industry training, and academic foundations in Information Technology."
          />

          {/* Verification Banner */}
          <div className="max-w-3xl mx-auto mb-12 p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-3">
            <AlertTriangle size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 leading-relaxed">
              <span className="font-bold text-amber-300">Professional Credibility Note:</span>{' '}
              All internship and academic credentials reflect verified records. Training dates and specific course curriculum items are marked for confirmation before official deployment.
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400">
                <Briefcase size={20} />
              </div>
              <h2 className="font-heading text-xl font-bold text-white">
                Practical Experience &amp; Analytics Training
              </h2>
            </div>

            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="card-base p-6 sm:p-8 bg-[#0D1527] border border-slate-800 rounded-2xl relative overflow-hidden"
              >
                {/* Accent top border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${
                    exp.type === 'internship'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-400'
                      : 'bg-gradient-to-r from-cyan-400 to-indigo-500'
                  }`}
                />

                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className={`mono text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                          exp.type === 'internship'
                            ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
                            : 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                        }`}
                      >
                        {exp.type === 'internship' ? 'Professional Internship' : 'Industry Training'}
                      </span>
                      {exp.type === 'training' && (
                        <span className="mono text-[10px] px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                          Verify Date
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-semibold text-blue-400 flex items-center gap-1.5 mt-0.5">
                      <Building size={14} />
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-slate-400 space-y-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-slate-400" />
                      {exp.startDate} – {exp.endDate || 'Present'}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-2.5 mb-6">
                  {exp.description.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 size={15} className="text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-1.5 items-center">
                  <span className="text-[11px] font-mono text-slate-400 mr-2">Key Skills:</span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="mono text-[10px] font-medium px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Education Section */}
            <div className="pt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400">
                  <GraduationCap size={20} />
                </div>
                <h2 className="font-heading text-xl font-bold text-white">
                  Formal Education
                </h2>
              </div>

              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="card-base p-6 sm:p-8 bg-[#0D1527] border border-slate-800 rounded-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500" />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-800">
                    <div>
                      <span className="mono text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 uppercase tracking-wider block w-fit mb-1.5">
                        Undergraduate Degree
                      </span>
                      <h3 className="font-heading text-xl font-bold text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-semibold text-purple-400 mt-0.5">
                        {edu.field}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1.5">
                      <span className="mono text-xs font-bold px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/40">
                        CGPA: {edu.cgpa}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1.5">
                        <Calendar size={13} />
                        Graduation: {edu.graduation}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {edu.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <Award size={15} className="text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ExperiencePage;
