
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { generateBoards } from '@/utils/boardUtils';
import BingoBoard from './BingoBoard';
import { useToast } from "@/components/ui/use-toast";
import { Printer } from 'lucide-react';

interface BoardGeneratorProps {
  words: string[];
}

const BoardGenerator: React.FC<BoardGeneratorProps> = ({ words }) => {
  const [boards, setBoards] = useState<string[][][]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerate = () => {
    setIsGenerating(true);
    
    // Simulate a short delay to show the loading effect
    setTimeout(() => {
      try {
        const newBoards = generateBoards(words, 30);
        setBoards(newBoards);
        toast({
          title: "הלוחות נוצרו בהצלחה",
          description: "נוצרו 30 לוחות בינגו ייחודיים",
        });
      } catch (error) {
        toast({
          title: "שגיאה ביצירת הלוחות",
          description: "נא לנסות שוב",
          variant: "destructive",
        });
      } finally {
        setIsGenerating(false);
      }
    }, 600);
  };

  const handlePrint = () => {
    if (boards.length === 0) {
      toast({
        title: "אין לוחות להדפסה",
        description: "נא ליצור לוחות תחילה",
        variant: "destructive",
      });
      return;
    }
    
    window.print();
  };

  // Generate boards on mount
  useEffect(() => {
    handleGenerate();
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8 no-print">
        <Button 
          onClick={handleGenerate} 
          disabled={isGenerating}
          className="relative overflow-hidden transition-all duration-300"
        >
          {isGenerating ? 'יוצר לוחות...' : 'יצירת לוחות חדשים'}
        </Button>
        <Button
          onClick={handlePrint}
          variant="outline"
          className="flex items-center gap-2"
          disabled={boards.length === 0}
        >
          <Printer className="h-4 w-4" />
          <span>הדפסת לוחות</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {boards.map((board, index) => (
          <BingoBoard key={index} board={board} index={index} />
        ))}
      </div>
    </div>
  );
};

export default BoardGenerator;
