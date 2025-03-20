
import React from 'react';
import Header from '@/components/Header';
import BoardGenerator from '@/components/BoardGenerator';

const Index = () => {
  // These are the words provided in the request
  const bingoWords = [
    "כבוד",
    "השפלה",
    "חרם",
    "מכות",
    "סתום",
    "מפגר",
    "לספר למבוגר",
    "איומים",
    "עזרה",
    "סליחה",
    "לחזק אחרים",
    "העלבה",
    "לחפש עזרה",
    "שיח רגוע",
    "הצקה",
    "דחיפה",
    "דחיפות",
    "הרמת קול",
    "סלנות",
    "אלימות",
    "חברות",
    "הקשבה",
    "לדבר עם חבר",
    "העלבה",
    "לקלל",
    "שיתוף פעולה",
    "לומר עצור"
  ];

  return (
    <div className="min-h-screen bg-background text-right" dir="rtl">
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 py-6">
          <BoardGenerator words={bingoWords} />
        </main>
        
        <footer className="py-6 border-t text-center text-sm text-muted-foreground no-print">
          <div className="max-w-3xl mx-auto px-4">
            <p>© {new Date().getFullYear()} בינגו לוחות יוצר</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
