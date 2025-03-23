
import React, { useState } from 'react';
import Header from '@/components/Header';
import BoardGenerator from '@/components/BoardGenerator';
import WordsInput from '@/components/WordsInput';

const Index = () => {
  // These are the words provided in the request as default values
  const defaultBingoWords = [
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

  const [bingoWords, setBingoWords] = useState<string[]>(defaultBingoWords);

  const handleWordsSubmit = (newWords: string[]) => {
    setBingoWords(newWords);
  };

  return (
    <div className="min-h-screen bg-background text-right" dir="rtl">
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 py-6">
          <div className="max-w-3xl mx-auto px-4">
            <WordsInput 
              defaultWords={defaultBingoWords} 
              onWordsSubmit={handleWordsSubmit} 
            />
          </div>
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
