import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Award,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Building,
  Sparkles,
  FileBadge
} from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';

interface CertItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  status: 'verified' | 'in-progress' | 'coursework';
  credentialId?: string;
  skills: string[];
  description: string;
}

const certificationsList: CertItem[] = [
  {
    id: 'cert-idema',
    title: 'Data Analytics & Business Intelligence Training',
    issuer: 'IDEMA Training Institute',
    date: 'Enrolled Aug 2026',
    status: 'in-progress',
    credentialId: 'Pending Verification upon Completion',
    skills: ['Power BI', 'SQL Extraction', 'Data Cleaning', 'Dashboarding'],
    description:
      'Rigorous practical training focused on real business datasets, data modeling, KPI tracking, and automated reporting systems.',
  },
  {
    id: 'cert-powerbi-dax',
    title: 'Microsoft Power BI & DAX for Business Analysts',
    issuer: 'Specialized Analytics Coursework',
    date: '2026',
    status: 'coursework',
    credentialId: 'Coursework Verified',
    skills: ['DAX Calculations', 'Power Query M', 'Interactive Dashboards', 'Drill-through'],
    description:
      'In-depth study of calculated measures, time intelligence, star schema modeling, and dashboard UX for enterprise management.',
  },
  {
    id: 'cert-sql-db',
    title: 'SQL for Data Science & Relational Databases',
    issuer: 'Database & Analytics Training',
    date: '2026',
    status: 'coursework',
    credentialId: 'Academic & Project Based',
    skills: ['Complex Joins', 'Window Functions', 'CTEs', 'Data Aggregations'],
    description:
      'Hands-on query development, indexing strategies, multi-table joins, subqueries, and database performance optimization.',
  },
  {
    id: 'cert-excel-mis',
    title: 'Advanced Microsoft Excel for MIS & Financial Reporting',
    issuer: 'Practical Business Reporting Suite',
    date: '2026',
    status: 'coursework',
    credentialId: 'Project Verified',
    skills: ['Pivot Tables', 'XLOOKUP/VLOOKUP', 'Data Validation', 'Slicers'],
    description:
      'Creating dynamic executive spreadsheets, multi-sheet reconciliation, data cleaning formulas, and interactive MIS summary views.',
  },
];

const CertificationsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Certifications &amp; Credentials | Bablu Shakya</title>
        <meta
          name="description"
          content="Verified certificates, specialized training, and practical credentials in Power BI, SQL, Excel, and Data Analytics by Bablu Shakya."
        />
        <link rel="canonical" href="https://bablushakya.dev/certifications" />
      </Helmet>

      <section className="section-padding bg-[#070B14]">
        <Container>
          <SectionHeading
            eyebrow="Verified Credentials"
            title="Certifications &amp; Training"
            subtitle="Professional certifications, technical training programs, and specialized analytics coursework."
          />

          {/* Ethics / Integrity Notice Banner */}
          <div className="max-w-4xl mx-auto mb-10 p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3.5 shadow-md">
            <ShieldCheck size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 leading-relaxed">
              <span className="font-bold text-white block mb-0.5">
                Authenticity &amp; Credential Standard:
              </span>
              In accordance with strict professional ethics, all certificates and ongoing credentials
              represent genuine coursework, verifiable training, and academic foundations. No fabricated
              certificates are published.
            </div>
          </div>

          {/* Grid of Certificates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certificationsList.map((cert) => (
              <div
                key={cert.id}
                className="card-base p-6 sm:p-7 bg-[#0D1527] border border-slate-800 rounded-2xl flex flex-col justify-between hover:border-blue-500/30 transition-all duration-200 shadow-lg"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400">
                      <FileBadge size={22} />
                    </div>
                    <span
                      className={`mono text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${
                        cert.status === 'verified'
                          ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                          : cert.status === 'in-progress'
                          ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                          : 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
                      }`}
                    >
                      {cert.status === 'verified'
                        ? '✓ Verified'
                        : cert.status === 'in-progress'
                        ? '⟳ In Progress'
                        : 'Practical Coursework'}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white mb-1.5 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-400 mb-2 flex items-center gap-1.5">
                    <Building size={13} />
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="mono text-[10px] font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    {cert.date}
                  </span>
                  <span className="mono text-[11px] text-slate-300 font-medium">
                    {cert.credentialId}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default CertificationsPage;
