import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Download,
  FileText,
  CheckCircle2,
  MapPin,
  Mail,
  Briefcase,
  GraduationCap,
  Sparkles,
  ExternalLink,
  Code2,
  BarChart3
} from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import { ownerInfo, socialLinks } from '../data/navigation';

const resumeVersions = [
  {
    id: 'data-analyst-cv',
    title: 'Data Analyst Resume (General / Primary)',
    focus: 'SQL Data Extraction, Power BI Visualizations & Business Reporting',
    description:
      'Ideal for Data Analyst and Junior Analytics roles. Emphasizes end-to-end data lifecycle from SQL joins and cleaning to KPI monitoring and actionable insights.',
    tags: ['SQL', 'Power BI', 'Excel', 'Python', 'KPIs', 'EDA'],
    fileName: 'Bablu-Shakya-Resume.pdf',
    highlight: true,
  },
  {
    id: 'bi-reporting-cv',
    title: 'Business Intelligence & Reporting CV',
    focus: 'DAX Measures, Dashboard Architecture & Executive Summaries',
    description:
      'Tailored for BI Analyst and Reporting Specialist positions. Showcases dashboard architecture, automated reporting rhythms, and stakeholder data storytelling.',
    tags: ['Power BI', 'DAX', 'Executive Reporting', 'Dashboard Architecture'],
    fileName: 'Bablu-Shakya-Resume.pdf',
    highlight: false,
  },
  {
    id: 'mis-executive-cv',
    title: 'MIS Executive & Analytics CV',
    focus: 'Advanced Excel, Pivot Modeling, Slicers & Data Integrity',
    description:
      'Tailored for MIS Executive and Operations Analytics openings. Highlights complex Excel workflows, XLOOKUP modeling, error auditing, and automated reporting.',
    tags: ['Advanced Excel', 'Pivot Tables', 'MIS Automation', 'Data Reconciliation'],
    fileName: 'Bablu-Shakya-Resume.pdf',
    highlight: false,
  },
];

const ResumePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Resume &amp; CV Formats | Bablu Shakya Portfolio</title>
        <meta
          name="description"
          content="Download Bablu Shakya's verified resumes: Data Analyst, BI Specialist, and MIS Executive CV formats. Open to UAE relocation."
        />
        <link rel="canonical" href="https://bablushakya.dev/resume" />
      </Helmet>

      <section className="section-padding bg-[#070B14]">
        <Container>
          <SectionHeading
            eyebrow="Curriculum Vitae"
            title="Professional Resume &amp; Profiles"
            subtitle="Explore my verified qualifications, technical competencies, internship experience, and download tailored CV formats."
          />

          {/* Quick Profile Summary Header Card */}
          <div className="card-base p-6 sm:p-8 bg-[#0D1527] border border-blue-500/20 rounded-2xl max-w-4xl mx-auto mb-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold">
                  <span>Available for immediate relocation to UAE 🇦🇪</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                  {ownerInfo.name}
                </h3>
                <p className="text-sm font-semibold text-blue-400">
                  {ownerInfo.headline}
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-blue-400" />
                    {ownerInfo.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail size={14} className="text-blue-400" />
                    {socialLinks.email}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <a
                  href="/resume/Bablu-Shakya-Resume.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-500/25 hover:scale-105 transition-all duration-200"
                >
                  <Download size={16} />
                  Download Master PDF
                </a>
              </div>
            </div>
          </div>

          {/* 3 Tailored Resume Cards */}
          <div className="max-w-4xl mx-auto mb-14">
            <h3 className="font-heading text-xl font-bold text-white mb-2">
              Role-Specific Tailored CVs
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Recruiters can select the version aligned with their target job opening:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resumeVersions.map((item, idx) => (
                <div
                  key={item.id}
                  className={`card-base p-6 rounded-2xl flex flex-col justify-between bg-[#0D1527] border transition-all duration-200 ${
                    item.highlight
                      ? 'border-blue-500/40 shadow-lg shadow-blue-500/10'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400">
                        <FileText size={20} />
                      </div>
                      {item.highlight && (
                        <span className="mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30">
                          Primary
                        </span>
                      )}
                    </div>

                    <h4 className="font-heading text-base font-bold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="mono text-[11px] text-cyan-400 font-semibold mb-3">
                      {item.focus}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="mono text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`/resume/${item.fileName}`}
                    download
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white border border-slate-700 hover:border-blue-500 transition-all duration-200"
                  >
                    <Download size={14} />
                    Download CV
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Resume Viewport Section */}
          <div className="max-w-4xl mx-auto card-base p-6 sm:p-8 bg-[#0D1527] border border-slate-800 rounded-2xl">
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-800">
              <div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Executive Profile Summary
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Structured overview of qualifications ready for HR &amp; Hiring Managers
                </p>
              </div>
              <span className="mono text-xs px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-medium">
                Verified Information
              </span>
            </div>

            {/* Core Competencies Matrix */}
            <div className="mb-8">
              <h4 className="font-heading text-xs uppercase tracking-wider text-blue-400 font-bold mb-4 flex items-center gap-2">
                <BarChart3 size={15} />
                Technical &amp; Analytical Competencies
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  'SQL Queries, Joins, CTEs',
                  'Microsoft Power BI & DAX',
                  'Advanced Excel (Pivots/XLOOKUP)',
                  'Python (Pandas, Matplotlib)',
                  'Data Cleaning & Transformation',
                  'KPI & Executive Dashboarding',
                  'MIS Automated Reporting',
                  'Data Storytelling & Insights',
                ].map((skill) => (
                  <div
                    key={skill}
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center gap-2"
                  >
                    <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="mb-8">
              <h4 className="font-heading text-xs uppercase tracking-wider text-blue-400 font-bold mb-4 flex items-center gap-2">
                <Briefcase size={15} />
                Work Experience &amp; Training
              </h4>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className="font-bold text-sm text-white">
                      Data Analyst Intern — Ziion Technology
                    </span>
                    <span className="mono text-xs text-blue-400 font-medium">
                      Jan 2026 – Jun 2026 · Chandigarh, India
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Collaborated on real-world datasets, structured SQL data extraction, performed
                    systematic data cleaning, and supported business reporting pipelines.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className="font-bold text-sm text-white">
                      Data Analytics Training — IDEMA
                    </span>
                    <span className="mono text-xs text-cyan-400 font-medium">
                      Aug 2026 · Specialized Analytical Program
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Intensive analytics curriculum covering Power BI dashboard development, relational
                    database queries, and translating analytical findings to business stakeholders.
                  </p>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h4 className="font-heading text-xs uppercase tracking-wider text-blue-400 font-bold mb-4 flex items-center gap-2">
                <GraduationCap size={15} />
                Education Background
              </h4>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="font-bold text-sm text-white">
                    Bachelor of Technology (B.Tech) in Information Technology
                  </span>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Malout Institute of Management and Information Technology (MIMIT)
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="mono text-xs font-bold text-blue-400 block">
                    CGPA: 7.9
                  </span>
                  <span className="text-xs text-slate-400">
                    Graduation: August 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ResumePage;
