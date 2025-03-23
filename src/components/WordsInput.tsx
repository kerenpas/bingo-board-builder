
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface WordsInputProps {
  defaultWords: string[];
  onWordsSubmit: (words: string[]) => void;
}

const WordsInput: React.FC<WordsInputProps> = ({ defaultWords, onWordsSubmit }) => {
  const [inputText, setInputText] = useState(defaultWords.join('\n'));
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Split by newline and filter out empty lines
    const words = inputText
      .split('\n')
      .map(word => word.trim())
      .filter(word => word.length > 0);
    
    if (words.length < 9) {
      toast({
        title: "לא מספיק מילים",
        description: "נדרשות לפחות 9 מילים ליצירת לוח בינגו 3x3",
        variant: "destructive",
      });
      return;
    }
    
    onWordsSubmit(words);
    toast({
      title: "המילים נשמרו בהצלחה",
      description: `נשמרו ${words.length} מילים ליצירת לוחות הבינגו`,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8 no-print">
      <div>
        <Label htmlFor="words" className="text-base font-medium mb-2 block">הכנס את המילים לבינגו</Label>
        <Textarea
          id="words"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="הכנס מילה בכל שורה (לפחות 9 מילים)"
          className="min-h-[200px] text-base font-medium resize-y"
        />
        <p className="text-sm text-muted-foreground mt-2">הכנס לפחות 9 מילים, מילה אחת בכל שורה</p>
      </div>
      <Button type="submit" className="w-full sm:w-auto">
        שמירת מילים
      </Button>
    </form>
  );
};

export default WordsInput;
