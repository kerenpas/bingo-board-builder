
/**
 * Utility functions for generating bingo boards
 */

/**
 * Shuffles an array using the Fisher-Yates algorithm
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Generates a specified number of unique bingo boards
 */
export const generateBoards = (words: string[], count: number): string[][][] => {
  const boards: string[][][] = [];
  
  for (let i = 0; i < count; i++) {
    // Shuffle the words for each board
    const shuffledWords = shuffleArray(words);
    
    // Take the first 9 words for a 3x3 board
    const boardWords = shuffledWords.slice(0, 9);
    
    // Convert the flat array to a 3x3 grid
    const board: string[][] = [];
    for (let row = 0; row < 3; row++) {
      board.push(boardWords.slice(row * 3, row * 3 + 3));
    }
    
    boards.push(board);
  }
  
  return boards;
};

/**
 * Checks if two boards are the same
 */
export const boardsAreEqual = (board1: string[][], board2: string[][]): boolean => {
  for (let i = 0; i < board1.length; i++) {
    for (let j = 0; j < board1[i].length; j++) {
      if (board1[i][j] !== board2[i][j]) {
        return false;
      }
    }
  }
  return true;
};
