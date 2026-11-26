import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Link as LinkIcon, GitBranch, MapPin, ArrowUpRight } from 'lucide-react';
import { socialLinks, ownerInfo, navItems } from '../data/navigation';
import type { NavItem } from '../types';
import Container from './ui/Container';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-[#060911]">
      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/20">
                BS
              </div>
              <span className="font-heading text-xl font-bold text-white">
                Bablu Shakya
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Turning complex raw data into interactive dashboards, KPI monitoring, and strategic business decisions.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium pt-1">
              <MapPin size={14} className="text-blue-400" />
              <span>India · Open to UAE Relocation 🇦🇪</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="mono text-xs font-bold text-white uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item: NavItem) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/resume"
                  className="text-xs font-semibold text-blue-400 hover:text-cyan-300 transition-colors"
                >
                  Resume Formats (CV)
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-4">
            <h4 className="mono text-xs font-bold text-white uppercase tracking-widest mb-4">
              Direct Channels
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${socialLinks.email}`}
                className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Mail size={14} className="text-blue-400" />
                <span>{socialLinks.email}</span>
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <LinkIcon size={14} className="text-cyan-400" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight size={12} className="text-slate-500" />
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-indigo-400 transition-colors"
              >
                <GitBranch size={14} className="text-indigo-400" />
                <span>GitHub Repositories</span>
                <ArrowUpRight size={12} className="text-slate-500" />
              </a>
            </div>

            <div className="mt-6 p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
              Targeting roles: Data Analyst, BI Analyst, MIS Executive, Reporting Specialist in UAE.
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {currentYear} Bablu Shakya. All rights reserved.</p>
          <p className="mono text-[11px] text-slate-400">
            SQL · Power BI · Excel · Python · MIS Reporting
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
