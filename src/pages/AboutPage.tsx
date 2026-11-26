import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Briefcase,
  Target,
  MapPin,
  Mail,
  Link as LinkIcon,
  CheckCircle2,
  Sparkles,
  Download,
  Building,
  Award
} from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import { education } from '../data/education';
import { socialLinks, ownerInfo } from '../data/navigation';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Me | Bablu — Data Analytics &amp; BI</title>
        <meta
          name="description"
          content="Learn about Bablu, a B.Tech IT graduate and Data Analytics professional looking for opportunities in the UAE. Background, education, and career aspirations."
        />
        <link rel="canonical" href="https://bablushakya.dev/about" />
      </Helmet>

      <section className="section-padding bg-[#070B14]">
        <Container>
          <SectionHeading
            eyebrow="Personal Background"
            title="Behind the Data"
            subtitle="The background, analytical methodology, and professional objectives of Bablu."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
            {/* Left Bio Card */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="card-base p-6 sm:p-7 bg-[#0D1527] border border-slate-800 rounded-2xl text-center shadow-xl">
                {/* Visual Avatar */}
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-1 mx-auto mb-5 shadow-lg shadow-blue-500/20">
                  <div className="w-full h-full rounded-[14px] bg-[#070B14] flex items-center justify-center font-heading text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    B
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-1">
                  Bablu
                </h3>
                <p className="text-xs font-semibold text-blue-400 mb-3">
                  Data Analyst · Business Intelligence
                </p>

                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-300 mb-5">
                  <MapPin size={14} className="text-blue-400" />
                  <span>India · Relocating to UAE</span>
                </div>

                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 font-medium mb-6">
                  🇦🇪 Actively seeking opportunities in Dubai &amp; Abu Dhabi
                </div>

                <div className="space-y-2.5">
                  <a
                    href={`mailto:${socialLinks.email}`}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-colors"
                  >
                    <Mail size={14} />
                    Direct Email
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                  >
                    <LinkIcon size={14} />
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Right Narrative Column */}
            <div className="lg:col-span-8 space-y-6">
              {/* Executive Summary */}
              <div className="card-base p-6 sm:p-8 bg-[#0D1527] border border-slate-800 rounded-2xl shadow-lg space-y-4">
                <span className="mono text-xs font-bold text-blue-400 uppercase tracking-wider block">
                  — Summary of Qualifications
                </span>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  I am <strong className="text-white">Bablu</strong>, a B.Tech Information
                  Technology graduate with a strong interest in Data Analytics, Business Intelligence,
                  and business reporting.
                </p>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  My analytical focus centers on leveraging <strong>SQL, Power BI, Advanced Excel, and Python</strong> to
                  explore data, engineer robust models, and craft intuitive dashboards that answer core business questions.
                </p>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  Through my internship at Ziion Technology, specialized analytical training at IDEMA, and independent
                  case studies, I have established practical competencies across data cleaning, exploratory data analysis,
                  dashboard architecture, and executive KPI reporting.
                </p>
              </div>

              {/* Approach & Analytical Philosophy */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="card-base p-6 bg-[#0D1527] border border-slate-800 rounded-xl space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400 mb-3">
                    <Target size={20} />
                  </div>
                  <h4 className="font-heading text-base font-bold text-white">
                    Business Problem First
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Data without business context is just noise. Every query and visualization is built
                    around answering tangible questions: revenue growth, cost containment, and customer retention.
                  </p>
                </div>

                <div className="card-base p-6 bg-[#0D1527] border border-slate-800 rounded-xl space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 mb-3">
                    <Sparkles size={20} />
                  </div>
                  <h4 className="font-heading text-base font-bold text-white">
                    Clarity in Visuals
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Dashboards should be instantly understandable by executives and operations teams alike,
                    using consistent colors, intuitive hierarchies, and zero visual clutter.
                  </p>
                </div>
              </div>

              {/* Education Box */}
              <div className="card-base p-6 sm:p-8 bg-[#0D1527] border border-slate-800 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white">
                      Academic Education
                    </h3>
                    <p className="text-xs text-slate-400">
                      Foundational knowledge in computer science, databases, and algorithms
                    </p>
                  </div>
                </div>

                {education.map((edu) => (
                  <div key={edu.id} className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h4 className="font-heading text-base font-bold text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-xs font-semibold text-purple-400 mt-0.5">
                          {edu.field} — {edu.institution}
                        </p>
                      </div>
                      <span className="mono text-xs font-bold px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30 w-fit">
                        CGPA: {edu.cgpa} · Class of 2026
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {edu.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 size={14} className="text-purple-400 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* UAE Relocation Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900/30 to-cyan-900/20 border border-blue-500/30 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="mono text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    UAE Relocation Commitment
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-white">
                  Ready to Start in the UAE Market
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  I am fully prepared to relocate to the UAE for entry-level Data Analyst, Business Intelligence,
                  or MIS positions. I hold full availability for virtual interviews and prompt onboarding.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutPage;
