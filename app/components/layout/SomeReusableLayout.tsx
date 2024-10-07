import React from 'react';
import Header from './header';
import Footer from './footer';

interface SomeReusableLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

const SomeReusableLayout: React.FC<SomeReusableLayoutProps> = ({
  showHeader = true,
  children,
  showFooter = true
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      {showHeader && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default SomeReusableLayout;