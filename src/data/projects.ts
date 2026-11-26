import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'financial-performance-dashboard',
    title: 'Financial Performance Dashboard',
    description:
      'An interactive Power BI dashboard examining revenue, expenses, profitability and financial KPIs across business periods.',
    longDescription:
      'This project involved building a comprehensive financial performance dashboard that provides business stakeholders with clear visibility into revenue trends, expense breakdowns, profitability analysis and key financial KPIs. The dashboard enables data-driven financial decision-making through interactive filters and drill-down capabilities.',
    image: '/images/projects/financial-dashboard.svg',
    tags: ['Power BI', 'Data Visualization', 'KPI Monitoring', 'Financial Analytics'],
    category: 'power-bi',
    tools: ['Power BI', 'Excel', 'DAX', 'Power Query'],
    status: 'in-progress',
    featured: true,
    github: 'https://github.com/Bablushakya',
    businessProblem:
      'Business stakeholders struggled to get a clear, consolidated view of financial performance across multiple periods, leading to slow decision-making and limited visibility into profitability drivers.',
    objectives: [
      'Build an interactive financial dashboard tracking revenue, expenses and profit',
      'Implement KPI cards showing period-over-period performance changes',
      'Enable drill-down analysis by time period and expense category',
      'Provide trend visualization to support forward-looking decisions',
      'Create a business-ready report suitable for executive stakeholders',
    ],
    datasetDescription:
      'Sample financial dataset containing monthly revenue figures, expense categories, departmental costs and profitability metrics. Data includes multiple fiscal periods for trend analysis.',
    methodology: [
      'Data ingestion and cleaning using Power Query',
      'Relationship modeling across revenue and expense tables',
      'DAX measures for calculated KPIs and period comparisons',
      'Dashboard layout design with business usability in mind',
      'Validation of calculated figures against source data',
    ],
    keyFindings: [
      'Dashboard enables instant visibility into financial performance trends',
      'KPI cards provide clear period-over-period comparison at a glance',
      'Expense category drill-down surfaces the largest cost drivers',
      'Profitability trend lines help identify seasonal patterns',
    ],
    businessRecommendations: [
      'Use monthly trend analysis to align budget planning with performance cycles',
      'Focus cost reduction efforts on the highest-spend expense categories',
      'Monitor profitability margins alongside revenue growth for sustainable performance',
    ],
    chartData: {
      revenue: [
        { month: 'Jan', revenue: 420000, expenses: 310000, profit: 110000 },
        { month: 'Feb', revenue: 390000, expenses: 290000, profit: 100000 },
        { month: 'Mar', revenue: 510000, expenses: 340000, profit: 170000 },
        { month: 'Apr', revenue: 480000, expenses: 320000, profit: 160000 },
        { month: 'May', revenue: 530000, expenses: 360000, profit: 170000 },
        { month: 'Jun', revenue: 610000, expenses: 390000, profit: 220000 },
      ],
      expenses: [
        { category: 'Operations', value: 35 },
        { category: 'Marketing', value: 20 },
        { category: 'HR & Admin', value: 18 },
        { category: 'Technology', value: 15 },
        { category: 'Other', value: 12 },
      ],
    },
  },
  {
    id: 'customer-churn-analysis',
    title: 'Customer Churn Analysis',
    description:
      'SQL and Python-driven analysis of customer behaviour and churn patterns to uncover retention challenges and business improvement opportunities.',
    longDescription:
      'This project uses SQL queries and Python data analysis to explore customer churn patterns, segment churned customers by behaviour and characteristics, and identify actionable opportunities to improve customer retention.',
    image: '/images/projects/churn-analysis.svg',
    tags: ['SQL', 'Python', 'Customer Analytics', 'Churn Analysis', 'Data Visualization'],
    category: 'python',
    tools: ['Python', 'SQL', 'Pandas', 'Matplotlib', 'Seaborn'],
    status: 'in-progress',
    featured: true,
    github: 'https://github.com/Bablushakya',
    businessProblem:
      'Businesses across industries experience customer churn that directly impacts revenue. Understanding which customers are at risk and why they leave is essential for designing effective retention strategies.',
    objectives: [
      'Identify key factors associated with customer churn',
      'Segment customers by churn risk and behavioural patterns',
      'Visualize churn rates across customer groups and product categories',
      'Provide actionable insights for customer retention strategy',
      'Build a reusable analytical framework applicable to real business data',
    ],
    datasetDescription:
      'Public telecom customer churn dataset containing customer demographics, subscription details, usage patterns, support interactions and churn labels for over 7,000 customer records.',
    methodology: [
      'Exploratory data analysis to understand data structure and distributions',
      'SQL queries to extract and filter customer segments',
      'Python analysis using Pandas for data manipulation',
      'Visualization of churn patterns using Matplotlib and Seaborn',
      'Correlation analysis to identify churn predictors',
    ],
    keyFindings: [
      'Month-to-month contract customers show significantly higher churn rates',
      'Customers with higher monthly charges and no bundled services churn more',
      'Early tenure customers represent the highest churn risk segment',
      'Customers with multiple service interactions have elevated churn probability',
    ],
    businessRecommendations: [
      'Introduce loyalty incentives targeting month-to-month contract customers',
      'Design bundled service offerings to increase switching costs and engagement',
      'Implement proactive outreach programmes for customers in their first 90 days',
      'Review pricing strategy for high-charge customer segments',
    ],
    chartData: {
      churnByCategory: [
        { name: 'Month-to-Month', churn: 42, retained: 58 },
        { name: 'One Year', churn: 11, retained: 89 },
        { name: 'Two Year', churn: 3, retained: 97 },
      ],
      churnByTenure: [
        { tenure: '0-12m', rate: 48 },
        { tenure: '13-24m', rate: 22 },
        { tenure: '25-36m', rate: 15 },
        { tenure: '37-48m', rate: 10 },
        { tenure: '49-60m', rate: 8 },
        { tenure: '60m+', rate: 6 },
      ],
    },
  },
  {
    id: 'uae-real-estate-analysis',
    title: 'UAE Real Estate Market Analysis',
    description:
      'Analysis of publicly available UAE real estate transaction data to understand property market activity, price trends and geographical performance.',
    longDescription:
      'This project analyses publicly available UAE property transaction data to provide insights into real estate market performance across different areas, property types and time periods.',
    image: '/images/projects/real-estate-analysis.svg',
    tags: ['Excel', 'Data Analysis', 'UAE Market', 'Property Analytics', 'Business Intelligence'],
    category: 'excel',
    tools: ['Microsoft Excel', 'Power Query', 'Pivot Tables', 'Excel Charts'],
    status: 'in-progress',
    featured: true,
    github: 'https://github.com/Bablushakya',
    businessProblem:
      'The UAE real estate market generates extensive transaction data that is publicly available but rarely analysed in an accessible way.',
    objectives: [
      'Analyse property transaction trends using publicly available UAE data',
      'Compare performance across different areas and property types',
      'Visualize price trends and transaction volumes over time',
      'Identify high-activity areas and market segments',
      'Present findings in a clear, business-readable Excel dashboard',
    ],
    datasetDescription:
      'Publicly available UAE property transaction records sourced from open data portals, covering property types, transaction values, locations and registration dates.',
    methodology: [
      'Data collection from public UAE property transaction sources',
      'Data cleaning and standardisation in Excel using Power Query',
      'Pivot table analysis across area, property type and time period dimensions',
      'Excel chart and dashboard development for visual presentation',
      'Validation of aggregated figures against source records',
    ],
    keyFindings: [
      'Apartment transactions represent the largest share of total property deals',
      'Prime area transactions command significantly higher average values',
      'Transaction volumes show clear seasonal patterns across the year',
      'Off-plan properties account for a growing share of total market activity',
    ],
    businessRecommendations: [
      'Focus market attention on high-transaction areas for maximum deal exposure',
      'Time property searches around periods of higher market liquidity',
      'Monitor off-plan market activity as an indicator of developer confidence',
    ],
    chartData: {
      transactionsByType: [
        { type: 'Apartment', transactions: 4820, value: 2100 },
        { type: 'Villa', transactions: 1240, value: 890 },
        { type: 'Townhouse', transactions: 680, value: 420 },
        { type: 'Commercial', transactions: 390, value: 310 },
      ],
      priceByArea: [
        { area: 'Downtown', avgPrice: 1850 },
        { area: 'Marina', avgPrice: 1620 },
        { area: 'JVC', avgPrice: 820 },
        { area: 'Business Bay', avgPrice: 1480 },
        { area: 'Silicon Oasis', avgPrice: 650 },
      ],
    },
  },
  {
    id: 'ecommerce-sales-analysis',
    title: 'E-commerce Sales & Profitability Analysis',
    description:
      'Exploration of sales performance, profitability, product categories and customer segments using an e-commerce dataset.',
    longDescription:
      'This project dives deep into e-commerce sales data to understand what drives revenue and profitability across product categories, customer segments and geographic regions.',
    image: '/images/projects/ecommerce-analysis.svg',
    tags: ['SQL', 'Python', 'Sales Analytics', 'E-commerce', 'Profitability Analysis'],
    category: 'sql',
    tools: ['SQL', 'Python', 'Pandas', 'Recharts', 'Excel'],
    status: 'in-progress',
    featured: false,
    github: 'https://github.com/Bablushakya',
    businessProblem:
      'E-commerce businesses often struggle to identify which products, segments and regions drive the most profitable growth versus simply high revenue.',
    objectives: [
      'Analyse sales performance across product categories and customer segments',
      'Identify the most and least profitable product lines',
      'Understand geographic and seasonal sales patterns',
      'Provide product mix and pricing recommendations',
      'Build a reusable SQL analytical framework for e-commerce data',
    ],
    datasetDescription:
      'Public e-commerce sales dataset (Superstore or equivalent) containing order details, product information, customer segments, regional data and financial figures.',
    methodology: [
      'SQL queries for data extraction, filtering and aggregation',
      'Sales and profitability analysis by product category and sub-category',
      'Customer segment analysis to identify high-value buyer groups',
      'Regional performance comparison using geographic breakdowns',
      'Python visualizations to present key findings clearly',
    ],
    keyFindings: [
      'Technology products generate the highest revenue but vary in profitability',
      'Furniture category shows high revenue with significantly compressed margins',
      'Consumer segment drives the highest order volume across all categories',
      'High discount rates in certain sub-categories erode profitability substantially',
    ],
    businessRecommendations: [
      'Review discount strategy in low-margin sub-categories to protect profitability',
      'Prioritise marketing investment towards high-margin product lines',
      'Analyse regional performance to identify underperforming markets',
      'Target corporate segment for technology products where margins are healthier',
    ],
    chartData: {
      salesByCategory: [
        { category: 'Technology', sales: 836154, profit: 145455 },
        { category: 'Furniture', sales: 741999, profit: 18451 },
        { category: 'Office Supplies', sales: 719047, profit: 122491 },
      ],
      monthlyTrend: [
        { month: 'Jan', sales: 94000, profit: 14000 },
        { month: 'Feb', sales: 72000, profit: 10000 },
        { month: 'Mar', sales: 118000, profit: 18000 },
        { month: 'Apr', sales: 88000, profit: 12000 },
        { month: 'May', sales: 102000, profit: 16000 },
        { month: 'Jun', sales: 134000, profit: 22000 },
        { month: 'Jul', sales: 96000, profit: 14000 },
        { month: 'Aug', sales: 108000, profit: 17000 },
        { month: 'Sep', sales: 142000, profit: 24000 },
        { month: 'Oct', sales: 128000, profit: 20000 },
        { month: 'Nov', sales: 186000, profit: 32000 },
        { month: 'Dec', sales: 162000, profit: 26000 },
      ],
    },
  },
  {
    id: 'vantagetube-ai',
    title: 'VantageTube AI',
    description:
      'A technology product project demonstrating product development thinking, analytical interest and software capabilities.',
    longDescription:
      "VantageTube AI is a technology project that reflects the owner's interest in building data-driven products and applying analytical thinking to product development.",
    image: '/images/projects/vantagetube-ai.svg',
    tags: ['Product Development', 'Technology', 'Web Development', 'AI-Assisted'],
    category: 'business-analytics',
    tools: ['React', 'TypeScript', 'Web Development'],
    status: 'in-progress',
    featured: false,
    github: 'https://github.com/Bablushakya',
    businessProblem:
      'Demonstrating the ability to think analytically about product development and apply technical skills beyond core data tools.',
    objectives: [
      'Demonstrate product development and analytical thinking',
      'Show technical capabilities complementary to data analytics work',
      'Illustrate cross-functional skill development',
    ],
    datasetDescription: 'Technology project — not a dataset-based analysis project.',
    methodology: ['Product ideation', 'Technical implementation', 'Iterative development'],
    keyFindings: ['Demonstrates technology and product development interest alongside analytics'],
    businessRecommendations: ['Cross-functional technical skills enhance data analytics value delivery'],
    chartData: {},
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectById = (id: string) => projects.find((p) => p.id === id);
export const getProjectsByCategory = (category: string) =>
  category === 'all' ? projects : projects.filter((p) => p.category === category);
