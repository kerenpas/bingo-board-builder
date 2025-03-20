
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full pt-8 pb-6 animate-slide-down">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          3x3 ביצור לוחות בינגו
        </div>
        <h1 className="text-3xl font-bold tracking-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
          לוחות בינגו
        </h1>
        <p className="text-muted-foreground mt-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          כלי פשוט ליצירת 30 לוחות בינגו 3x3 ייחודיים
        </p>
      </div>
    </header>
  );
};

export default Header;
