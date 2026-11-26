import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  GitBranch,
  CheckCircle2,
  Lightbulb,
  Target,
  Database,
  Wrench,
  BarChart3,
  AlertTriangle,
  Sparkles
} from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend
} from 'recharts';
import Container from '../components/ui/Container';
import { getProjectById } from '../data/projects';

const PIE_COLORS = ['#3B82F6', '#22D3EE', '#6366F1', '#8B5CF6', '#EC4899'];

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = id ? getProjectById(id) : null;

  if (!project) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#070B14]">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold mb-4 text-white">Project Not Found</h1>
          <Link to="/projects" className="text-sm font-semibold text-blue-400 hover:underline">
            ← Back to Projects Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const renderChart = () => {
    if (!project.chartData || Object.keys(project.chartData).length === 0) return null;

    const data = project.chartData as Record<string, Array<Record<string, unknown>>>;

    if (project.id === 'financial-performance-dashboard' && data.revenue) {
      return (
        <div className="space-y-6">
          <div className="card-base p-6 bg-[#0D1527] border border-slate-800 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading text-base font-bold text-white">
                Revenue, Expenses &amp; Net Profit ($ USD)
              </h3>
              <span className="mono text-xs px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 font-semibold border border-blue-500/20">
                Interactive Trend
              </span>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={data.revenue} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="rev2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="prof2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22D3EE" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#22D3EE" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0F172A',
                    borderColor: '#334155',
                    borderRadius: 8,
                    fontSize: 12,
                    color: '#F8FAFC'
                  }}
                />
                <Legend wrapperStyle={{ fontSize: 12, paddingTop: 12 }} />
                <Area type="monotone" dataKey="revenue" stroke="#3B82F6" fill="url(#rev2)" strokeWidth={2.5} name="Revenue" />
                <Area type="monotone" dataKey="profit" stroke="#22D3EE" fill="url(#prof2)" strokeWidth={2.5} name="Net Profit" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {data.expenses && (
            <div className="card-base p-6 bg-[#0D1527] border border-slate-800 rounded-2xl">
              <h3 className="font-heading text-base font-bold text-white mb-4">
                Operational Cost Breakdown by Category (%)
              </h3>
              <div className="flex items-center gap-8 flex-wrap">
                <div className="w-48 h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={data.expenses} cx="50%" cy="50%" innerRadius={50} outerRadius={75} dataKey="value" nameKey="category">
                        {data.expenses.map((_, i) => (
                          <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#0F172A',
                          borderColor: '#334155',
                          borderRadius: 8,
                          fontSize: 12,
                          color: '#F8FAFC'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-2.5 flex-1 min-w-[200px]">
                  {data.expenses.map((item, i) => (
                    <div key={String(item.category)} className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: PIE_COLORS[i % PIE_COLORS.length] }} />
                        <span className="text-slate-300 font-medium">{String(item.category)}</span>
                      </div>
                      <span className="mono font-bold text-white">{String(item.value)}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }

    if (project.id === 'customer-churn-analysis' && data.churnByCategory) {
      return (
        <div className="space-y-6">
          <div className="card-base p-6 bg-[#0D1527] border border-slate-800 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading text-base font-bold text-white">
                Customer Churn Rate by Contract Commitment (%)
              </h3>
              <span className="mono text-xs px-2.5 py-1 rounded bg-pink-500/10 text-pink-400 font-semibold border border-pink-500/20">
                Retention Risk
              </span>
            </div>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={data.churnByCategory} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} unit="%" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0F172A',
                    borderColor: '#334155',
                    borderRadius: 8,
                    fontSize: 12,
                    color: '#F8FAFC'
                  }}
                />
                <Legend wrapperStyle={{ fontSize: 12, paddingTop: 10 }} />
                <Bar dataKey="churn" fill="#EC4899" radius={[6, 6, 0, 0]} name="Churned (%)" />
                <Bar dataKey="retained" fill="#22D3EE" radius={[6, 6, 0, 0]} name="Retained (%)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {data.churnByTenure && (
            <div className="card-base p-6 bg-[#0D1527] border border-slate-800 rounded-2xl">
              <h3 className="font-heading text-base font-bold text-white mb-4">
                Churn Probability Over Customer Tenure Timeline
              </h3>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={data.churnByTenure} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                  <XAxis dataKey="tenure" tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} unit="%" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0F172A',
                      borderColor: '#334155',
                      borderRadius: 8,
                      fontSize: 12,
                      color: '#F8FAFC'
                    }}
                  />
                  <Line type="monotone" dataKey="rate" stroke="#3B82F6" strokeWidth={3} dot={{ fill: '#3B82F6', r: 5 }} name="Churn Rate %" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      );
    }

    if (project.id === 'uae-real-estate-analysis' && data.transactionsByType) {
      return (
        <div className="space-y-6">
          <div className="card-base p-6 bg-[#0D1527] border border-slate-800 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading text-base font-bold text-white">
                UAE Property Transactions by Asset Class
              </h3>
              <span className="mono text-xs px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 font-semibold border border-cyan-500/20">
                Market Volume
              </span>
            </div>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={data.transactionsByType} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                <XAxis dataKey="type" tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0F172A',
                    borderColor: '#334155',
                    borderRadius: 8,
                    fontSize: 12,
                    color: '#F8FAFC'
                  }}
                />
                <Bar dataKey="transactions" fill="#3B82F6" radius={[6, 6, 0, 0]} name="Total Transactions" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {data.priceByArea && (
            <div className="card-base p-6 bg-[#0D1527] border border-slate-800 rounded-2xl">
              <h3 className="font-heading text-base font-bold text-white mb-4">
                Average Price per Sq.Ft by Key Dubai Districts (AED)
              </h3>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={data.priceByArea} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" horizontal={false} />
                  <XAxis type="number" tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
                  <YAxis dataKey="area" type="category" tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} width={100} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0F172A',
                      borderColor: '#334155',
                      borderRadius: 8,
                      fontSize: 12,
                      color: '#F8FAFC'
                    }}
                  />
                  <Bar dataKey="avgPrice" fill="#22D3EE" radius={[0, 6, 6, 0]} name="AED per Sq.Ft" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      );
    }

    if (project.id === 'ecommerce-sales-analysis' && data.salesByCategory) {
      return (
        <div className="space-y-6">
          <div className="card-base p-6 bg-[#0D1527] border border-slate-800 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading text-base font-bold text-white">
                Revenue vs. Net Profit Across Categories ($ USD)
              </h3>
              <span className="mono text-xs px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
                Profit Margin Audit
              </span>
            </div>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={data.salesByCategory} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                <XAxis dataKey="category" tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0F172A',
                    borderColor: '#334155',
                    borderRadius: 8,
                    fontSize: 12,
                    color: '#F8FAFC'
                  }}
                />
                <Legend wrapperStyle={{ fontSize: 12, paddingTop: 10 }} />
                <Bar dataKey="sales" fill="#3B82F6" radius={[6, 6, 0, 0]} name="Total Sales ($)" />
                <Bar dataKey="profit" fill="#10B981" radius={[6, 6, 0, 0]} name="Net Profit ($)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <Helmet>
        <title>{project.title} | Bablu Shakya Analytics Case Study</title>
        <meta name="description" content={project.description} />
        <link rel="canonical" href={`https://bablushakya.dev/projects/${project.id}`} />
      </Helmet>

      <section className="section-padding bg-[#070B14]">
        <Container>
          {/* Back button */}
          <div className="mb-8">
            <button
              onClick={() => navigate('/projects')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft size={16} />
              Back to Projects Portfolio
            </button>
          </div>

          <div className="max-w-4xl mx-auto space-y-10">
            {/* Header info */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span
                  className={`mono text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${
                    project.status === 'completed'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  }`}
                >
                  {project.status === 'completed' ? '✓ Completed Case Study' : '⟳ Work In Progress'}
                </span>
                {project.tools.map((t) => (
                  <span
                    key={t}
                    className="mono text-[10px] font-medium px-2.5 py-1 rounded-md bg-slate-800 text-blue-300 border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Visual Image Preview Mockup */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 aspect-[16/9] w-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Business Problem Card */}
            <div className="card-base p-6 sm:p-8 bg-[#0D1527] border border-slate-800 rounded-2xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400">
                  <Target size={20} />
                </div>
                <h2 className="font-heading text-lg font-bold text-white">
                  Business Problem &amp; Context
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                {project.businessProblem}
              </p>
            </div>

            {/* Objectives */}
            <div className="card-base p-6 sm:p-8 bg-[#0D1527] border border-slate-800 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-400">
                  <CheckCircle2 size={20} />
                </div>
                <h2 className="font-heading text-lg font-bold text-white">
                  Project Objectives
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {project.objectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
                    <span className="mono font-bold text-cyan-400 flex-shrink-0">0{i + 1}.</span>
                    <span>{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dataset Description & Methodology */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="card-base p-6 bg-[#0D1527] border border-slate-800 rounded-2xl space-y-3">
                <div className="flex items-center gap-2.5 text-blue-400">
                  <Database size={18} />
                  <h3 className="font-heading text-base font-bold text-white">
                    Dataset Architecture
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.datasetDescription}
                </p>
              </div>

              <div className="card-base p-6 bg-[#0D1527] border border-slate-800 rounded-2xl space-y-3">
                <div className="flex items-center gap-2.5 text-purple-400">
                  <Wrench size={18} />
                  <h3 className="font-heading text-base font-bold text-white">
                    Analytical Methodology
                  </h3>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {project.methodology.map((m, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Visualizations */}
            {renderChart() && (
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400">
                    <BarChart3 size={20} />
                  </div>
                  <h2 className="font-heading text-xl font-bold text-white">
                    Interactive Analytics Dashboard &amp; Trends
                  </h2>
                </div>
                {renderChart()}
              </div>
            )}

            {/* Key Findings */}
            <div className="card-base p-6 sm:p-8 bg-[#0D1527] border border-emerald-500/25 rounded-2xl space-y-4">
              <div className="flex items-center gap-2.5 text-emerald-400">
                <CheckCircle2 size={20} />
                <h3 className="font-heading text-lg font-bold text-white">
                  Key Analytical Findings
                </h3>
              </div>
              <div className="space-y-2.5">
                {project.keyFindings.map((finding, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{finding}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Recommendations */}
            <div className="card-base p-6 sm:p-8 bg-[#0D1527] border border-amber-500/25 rounded-2xl space-y-4">
              <div className="flex items-center gap-2.5 text-amber-400">
                <Lightbulb size={20} />
                <h3 className="font-heading text-lg font-bold text-white">
                  Strategic Recommendations
                </h3>
              </div>
              <div className="space-y-2.5">
                {project.businessRecommendations.map((rec, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <Lightbulb size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{rec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Nav */}
            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-cyan-300 transition-colors"
              >
                <ArrowLeft size={15} />
                Back to All Projects
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
              >
                Discuss This Project
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProjectDetailPage;
