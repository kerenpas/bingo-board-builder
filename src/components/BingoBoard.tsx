
import React from 'react';
import { cn } from '@/lib/utils';

interface BingoBoardProps {
  board: string[][];
  index: number;
  className?: string;
}

const BingoBoard: React.FC<BingoBoardProps> = ({ board, index, className }) => {
  return (
    <div className={cn("mb-8 print-break animate-fade-in", className)}>
      <div className="mb-2 text-xs text-center text-muted-foreground">
        Board #{index + 1}
      </div>
      <div className="bingo-board">
        {board.map((row, rowIndex) => (
          row.map((cell, cellIndex) => (
            <div 
              key={`${rowIndex}-${cellIndex}`} 
              className="bingo-cell"
              style={{ animationDelay: `${(rowIndex * 3 + cellIndex) * 0.05}s` }}
            >
              <span className="text-center font-medium text-sm">{cell}</span>
            </div>
          ))
        ))}
      </div>
    </div>
  );
};

export default BingoBoard;
