import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    icon: 'BarChart3',
    skills: [
      { name: 'Data Cleaning', description: 'Identifying and correcting errors, inconsistencies and missing values in datasets to ensure analytical accuracy.' },
      { name: 'Exploratory Data Analysis', description: 'Examining datasets to discover patterns, spot anomalies and check assumptions using descriptive statistics and visualizations.' },
      { name: 'Data Interpretation', description: 'Translating analytical findings into clear, meaningful business insights that support decision-making.' },
      { name: 'Data Visualization', description: 'Creating charts, dashboards and visual representations that communicate data stories effectively to stakeholders.' },
      { name: 'Business Insights', description: 'Connecting data findings to business context to generate actionable recommendations and strategic insights.' },
    ],
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence',
    icon: 'TrendingUp',
    skills: [
      { name: 'Power BI', description: 'Building interactive dashboards and reports using Power BI desktop, DAX measures and Power Query transformations.' },
      { name: 'KPI Monitoring', description: 'Defining and tracking key performance indicators that measure business health and goal achievement.' },
      { name: 'Dashboard Development', description: 'Designing and building data dashboards that provide clear, real-time visibility into business performance.' },
      { name: 'Performance Reporting', description: 'Creating structured periodic reports that communicate business performance clearly to management and stakeholders.' },
    ],
  },
  {
    id: 'database',
    title: 'Database & SQL',
    icon: 'Database',
    skills: [
      { name: 'SQL', description: 'Writing SQL queries to extract, filter, join and aggregate data from relational databases for analysis.' },
      { name: 'Filtering & Aggregation', description: 'Using WHERE clauses, GROUP BY and aggregate functions to shape datasets for specific analytical requirements.' },
      { name: 'Joins', description: 'Combining data from multiple tables using INNER, LEFT, RIGHT and FULL joins to build comprehensive datasets.' },
      { name: 'Data Queries', description: 'Developing structured queries to answer specific business questions and extract relevant insights from databases.' },
    ],
  },
  {
    id: 'excel',
    title: 'Microsoft Excel',
    icon: 'FileSpreadsheet',
    skills: [
      { name: 'Pivot Tables', description: 'Building pivot table analyses to summarize and explore large datasets quickly across multiple dimensions.' },
      { name: 'VLOOKUP & XLOOKUP', description: 'Using lookup functions to merge data from multiple tables and perform data validation across spreadsheets.' },
      { name: 'Charts & Visualizations', description: 'Creating professional charts and visual reports in Excel to present data findings clearly.' },
      { name: 'Excel Dashboards', description: 'Designing interactive Excel dashboards combining pivot tables, charts and slicers for business reporting.' },
      { name: 'Data Reporting', description: 'Building structured Excel reports that communicate business data clearly to non-technical stakeholders.' },
    ],
  },
  {
    id: 'programming',
    title: 'Programming',
    icon: 'Code2',
    skills: [
      { name: 'Python', description: 'Using Python with Pandas, Matplotlib and Seaborn for data manipulation, analysis and visualization.' },
      { name: 'Data Manipulation', description: 'Applying Pandas DataFrames for data cleaning, reshaping, merging and preparing datasets for analysis.' },
      { name: 'Analytical Scripting', description: 'Writing Python scripts to automate data processing tasks and perform repeatable analytical workflows.' },
    ],
  },
  {
    id: 'additional',
    title: 'Additional Skills',
    icon: 'Layers',
    skills: [
      { name: 'Web Development', description: 'Building responsive web applications using React, TypeScript and modern frontend development tools.' },
      { name: 'Research', description: 'Conducting structured research to understand datasets, business domains and analytical methodologies.' },
      { name: 'Problem Solving', description: 'Applying structured analytical thinking to break down complex business problems into manageable components.' },
      { name: 'Business Communication', description: 'Presenting data findings and insights clearly to both technical and non-technical business audiences.' },
    ],
  },
];
