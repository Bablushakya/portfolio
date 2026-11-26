import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, ArrowLeft } from 'lucide-react';
import Container from '../components/ui/Container';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Bablu Shakya Portfolio</title>
      </Helmet>
      <section className="section-padding min-h-[60vh] flex items-center" style={{ background: 'var(--bg)' }}>
        <Container>
          <div className="text-center max-w-lg mx-auto">
            <p className="mono text-8xl font-bold mb-4 text-gradient">404</p>
            <h1 className="font-heading text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>Page Not Found</h1>
            <p className="text-sm mb-8" style={{ color: 'var(--muted)' }}>
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white transition-all duration-200 hover:scale-105"
                style={{ background: '#3B82F6' }}
              >
                <Home size={16} />
                Go Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border transition-all duration-200 hover:scale-105"
                style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}
              >
                <ArrowLeft size={16} />
                Go Back
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default NotFoundPage;
