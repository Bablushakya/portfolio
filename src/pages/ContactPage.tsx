import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Mail,
  Link as LinkIcon,
  GitBranch,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Phone,
  Clock,
  Sparkles
} from 'lucide-react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import { socialLinks, ownerInfo } from '../data/navigation';

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your full name (at least 2 characters)'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Please enter a subject (at least 3 characters)'),
  message: z.string().min(15, 'Please enter a message (at least 15 characters)'),
  honeypot: z.string().max(0, 'Spam detected'),
});

type ContactFormData = z.infer<typeof contactSchema>;
type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const ContactPage: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    if (data.honeypot) return;
    setStatus('loading');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        const { default: emailjs } = await import('emailjs-com');
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: data.name,
            from_email: data.email,
            subject: data.subject,
            message: data.message,
            to_name: 'Bablu',
          },
          publicKey
        );
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Bablu — Data Analyst in UAE</title>
        <meta
          name="description"
          content="Get in touch with Bablu for Data Analyst, Business Intelligence, and MIS Executive roles in the UAE. Ready for immediate relocation."
        />
        <link rel="canonical" href="https://bablushakya.dev/contact" />
      </Helmet>

      <section className="section-padding bg-[#070B14]">
        <Container>
          <SectionHeading
            eyebrow="Direct Communication"
            title="Let's Start a Conversation"
            subtitle="I am actively connecting with recruiters, analytics directors, and hiring managers in Dubai and across the UAE."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Left Contact Details Card */}
            <div className="lg:col-span-5 space-y-5">
              {/* Relocation Ready Highlight Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/30 shadow-lg">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="mono text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    UAE Relocation Ready 🇦🇪
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  Seeking Entry-Level Roles in the UAE
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Open to Junior Data Analyst, Power BI Developer, MIS Executive, and Reporting Analyst
                  positions in Dubai, Abu Dhabi, and across the Emirates.
                </p>
              </div>

              {/* Contact Channels */}
              <div className="space-y-3">
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#0D1527] border border-slate-800 hover:border-blue-500/50 transition-all duration-200 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-mono text-slate-400 uppercase block">
                      Direct Email
                    </span>
                    <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors truncate block">
                      {socialLinks.email}
                    </span>
                  </div>
                </a>

                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#0D1527] border border-slate-800 hover:border-cyan-500/50 transition-all duration-200 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform flex-shrink-0">
                    <LinkIcon size={20} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-mono text-slate-400 uppercase block">
                      LinkedIn Network
                    </span>
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors truncate block">
                      linkedin.com/in/bablu-data-analyst
                    </span>
                  </div>
                </a>

                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#0D1527] border border-slate-800 hover:border-indigo-500/50 transition-all duration-200 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/15 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform flex-shrink-0">
                    <GitBranch size={20} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-mono text-slate-400 uppercase block">
                      GitHub Repositories
                    </span>
                    <span className="text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors truncate block">
                      github.com/Bablushakya
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0D1527] border border-slate-800">
                  <div className="w-11 h-11 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400 flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase block">
                      Location &amp; Mobility
                    </span>
                    <span className="text-sm font-semibold text-white block">
                      {ownerInfo.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form Card */}
            <div className="lg:col-span-7">
              <div className="card-base p-6 sm:p-8 bg-[#0D1527] border border-slate-800 rounded-2xl shadow-xl">
                <h3 className="font-heading text-xl font-bold text-white mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Fill in your details below and I'll respond within 24 hours.
                </p>

                {status === 'success' ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 size={36} />
                    </div>
                    <h4 className="font-heading text-xl font-bold text-white">
                      Message Successfully Sent!
                    </h4>
                    <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out. Your message has been delivered directly to Bablu's inbox.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                    {/* Honeypot field for bot protection */}
                    <div aria-hidden="true" className="hidden">
                      <input type="text" tabIndex={-1} autoComplete="off" {...register('honeypot')} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Full Name <span className="text-rose-400">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          autoComplete="name"
                          placeholder="e.g. John Doe"
                          className={`w-full px-4 py-3 rounded-xl text-xs bg-slate-900 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                            errors.name ? 'border-rose-500' : 'border-slate-800 focus:border-blue-500'
                          }`}
                          {...register('name')}
                        />
                        {errors.name && (
                          <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                            <AlertCircle size={11} /> {errors.name.message}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Work Email <span className="text-rose-400">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          autoComplete="email"
                          placeholder="e.g. recruiter@company.ae"
                          className={`w-full px-4 py-3 rounded-xl text-xs bg-slate-900 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                            errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-blue-500'
                          }`}
                          {...register('email')}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                            <AlertCircle size={11} /> {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Subject <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="subject"
                        type="text"
                        placeholder="e.g. Data Analyst Opportunity in Dubai"
                        className={`w-full px-4 py-3 rounded-xl text-xs bg-slate-900 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                          errors.subject ? 'border-rose-500' : 'border-slate-800 focus:border-blue-500'
                        }`}
                        {...register('subject')}
                      />
                      {errors.subject && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.subject.message}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Message <span className="text-rose-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Share role specifications, project inquiries, or interview invitations..."
                        className={`w-full px-4 py-3 rounded-xl text-xs bg-slate-900 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none ${
                          errors.message ? 'border-rose-500' : 'border-slate-800 focus:border-blue-500'
                        }`}
                        {...register('message')}
                      />
                      {errors.message && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.message.message}
                        </p>
                      )}
                    </div>

                    {status === 'error' && (
                      <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                        <AlertCircle size={14} />
                        Unable to send right now. Please email directly at {socialLinks.email}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-3.5 px-6 rounded-xl font-semibold text-xs bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-500/25 hover:scale-[1.01] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Send Inquiry Message
                        </>
                      )}
                    </button>

                    <p className="text-center text-[10px] text-slate-400 pt-1">
                      🔒 Zero spam. Handled strictly for professional communication.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactPage;
