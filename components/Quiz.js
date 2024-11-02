import { useState } from 'react';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: 'Which function would you use to add up a range of numbers?',
      options: [
        { text: 'COUNT', isCorrect: false },
        { text: 'SUM', isCorrect: true },
        { text: 'AVERAGE', isCorrect: false },
        { text: 'MAX', isCorrect: false },
      ],
    },
    {
      questionText: 'Which function calculates the average of a range of numbers?',
      options: [
        { text: 'MEAN', isCorrect: false },
        { text: 'SUM', isCorrect: false },
        { text: 'AVERAGE', isCorrect: true },
        { text: 'MEDIAN', isCorrect: false },
      ],
    },
    {
      questionText: 'What does the COUNT function do?',
      options: [
        { text: 'Counts all cells in a range', isCorrect: false },
        { text: 'Counts blank cells', isCorrect: false },
        { text: 'Counts text cells', isCorrect: false },
        { text: 'Counts numbers in a range', isCorrect: true },
      ],
    },
    {
      questionText: 'Which function combines text from multiple cells?',
      options: [
        { text: 'COMBINE', isCorrect: false },
        { text: 'CONCATENATE', isCorrect: true },
        { text: 'APPEND', isCorrect: false },
        { text: 'JOIN', isCorrect: false },
      ],
    },
    {
      questionText: 'What does the LEFT function do?',
      options: [
        { text: 'Moves text to the left', isCorrect: false },
        { text: 'Counts characters from left', isCorrect: false },
        { text: 'Extracts characters from start of text', isCorrect: true },
        { text: 'Aligns text to the left', isCorrect: false },
      ],
    },
    // New questions with randomized correct answer positions
    {
      questionText: 'What does the RIGHT function do?',
      options: [
        { text: 'Moves text to the right', isCorrect: false },
        { text: 'Aligns text to the right', isCorrect: false },
        { text: 'Counts characters from right', isCorrect: false },
        { text: 'Extracts characters from end of text', isCorrect: true },
      ],
    },
    {
      questionText: 'What does the LEN function calculate?',
      options: [
        { text: 'Length of a row', isCorrect: false },
        { text: 'Number of characters in text', isCorrect: true },
        { text: 'Length of a formula', isCorrect: false },
        { text: 'Length of a cell', isCorrect: false },
      ],
    },
    {
      questionText: 'When would you use the AND function?',
      options: [
        { text: 'When comparing text', isCorrect: false },
        { text: 'When adding numbers', isCorrect: false },
        { text: 'When all conditions must be true', isCorrect: true },
        { text: 'When any condition can be true', isCorrect: false },
      ],
    },
    {
      questionText: 'What does the OR function return?',
      options: [
        { text: 'Always returns FALSE', isCorrect: false },
        { text: 'TRUE if any condition is TRUE', isCorrect: true },
        { text: 'Only text values', isCorrect: false },
        { text: 'Only number values', isCorrect: false },
      ],
    },
    {
      questionText: 'What does the MID function do?',
      options: [
        { text: 'Finds middle row', isCorrect: false },
        { text: 'Calculates average', isCorrect: false },
        { text: 'Extracts characters from middle of text', isCorrect: true },
        { text: 'Centers text in cell', isCorrect: false },
      ],
    },
    // Add these new questions to your questions array
    {
      questionText: 'What is a common mistake when using the MAX function?',
      options: [
        { text: 'Using too many numbers', isCorrect: false },
        { text: 'Including text cells in the range', isCorrect: true },
        { text: 'Adding too many cells', isCorrect: false },
        { text: 'Using positive numbers', isCorrect: false },
      ],
    },
    {
      questionText: 'When using the IF function, what happens if the condition is TRUE?',
      options: [
        { text: 'Returns an error', isCorrect: false },
        { text: 'Skips to next cell', isCorrect: false },
        { text: 'Returns value_if_false', isCorrect: false },
        { text: 'Returns value_if_true', isCorrect: true },
      ],
    },
    {
      questionText: 'Which is a best practice for the AND function?',
      options: [
        { text: 'Use as many conditions as possible', isCorrect: false },
        { text: 'Mix AND/OR functions freely', isCorrect: false },
        { text: 'Keep conditions clear and separate', isCorrect: true },
        { text: 'Always use with VLOOKUP', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the purpose of the MIN function?',
      options: [
        { text: 'Returns the smallest value', isCorrect: true },
        { text: 'Calculates averages', isCorrect: false },
        { text: 'Counts cells', isCorrect: false },
        { text: 'Combines text', isCorrect: false },
      ],
    },
    {
      questionText: 'What is a tip for using the OR function effectively?',
      options: [
        { text: 'Never use with IF', isCorrect: false },
        { text: 'Always use with COUNT', isCorrect: false },
        { text: 'Break complex logic into steps', isCorrect: true },
        { text: 'Use only with numbers', isCorrect: false },
      ],
    },
    // Additional quiz questions
    {
      questionText: 'What is a best practice when using the SUM function?',
      options: [
        { text: 'Always include text cells', isCorrect: false },
        { text: 'Use cell references instead of typing numbers', isCorrect: true },
        { text: 'Mix different data types', isCorrect: false },
        { text: 'Include header rows', isCorrect: false },
      ],
    },
    {
      questionText: 'Which keyboard shortcut can be used for quick sum calculations?',
      options: [
        { text: 'Ctrl + S', isCorrect: false },
        { text: 'Shift + S', isCorrect: false },
        { text: 'Alt + =', isCorrect: true },
        { text: 'Ctrl + =', isCorrect: false },
      ],
    },
    {
      questionText: 'When should you use AVERAGEIF instead of AVERAGE?',
      options: [
        { text: 'When working with text', isCorrect: false },
        { text: 'When calculating totals', isCorrect: false },
        { text: 'When working with dates', isCorrect: false },
        { text: 'When you need conditional averages', isCorrect: true },
      ],
    },
    {
      questionText: 'What should you watch out for when using AVERAGE?',
      options: [
        { text: 'Zero vs blank cells', isCorrect: true },
        { text: 'Cell color', isCorrect: false },
        { text: 'Font size', isCorrect: false },
        { text: 'Cell width', isCorrect: false },
      ],
    },
    {
      questionText: 'Which function would you use to extract the first 3 letters of a name?',
      options: [
        { text: 'EXTRACT', isCorrect: false },
        { text: 'RIGHT', isCorrect: false },
        { text: 'LEFT', isCorrect: true },
        { text: 'MID', isCorrect: false },
      ],
    },
    {
      questionText: 'What is a key consideration when using the CONCATENATE function?',
      options: [
        { text: 'Cell color must match', isCorrect: false },
        { text: 'Add spaces between text if needed', isCorrect: true },
        { text: 'Only works with numbers', isCorrect: false },
        { text: 'Maximum 2 cells only', isCorrect: false },
      ],
    },
    {
      questionText: 'When using the AND function, what is returned if any condition is FALSE?',
      options: [
        { text: 'The first TRUE value', isCorrect: false },
        { text: 'FALSE', isCorrect: true },
        { text: 'NULL', isCorrect: false },
        { text: 'ERROR', isCorrect: false },
      ],
    },
    {
      questionText: 'What happens when you double-click the fill handle in Excel?',
      options: [
        { text: 'Deletes the formula', isCorrect: false },
        { text: 'Copies formatting only', isCorrect: false },
        { text: 'Opens formula builder', isCorrect: false },
        { text: 'Copies formula down automatically', isCorrect: true },
      ],
    },
    {
      questionText: 'Which is a valid use case for the OR function?',
      options: [
        { text: 'Setting up alert conditions', isCorrect: true },
        { text: 'Calculating averages', isCorrect: false },
        { text: 'Combining text', isCorrect: false },
        { text: 'Sorting data', isCorrect: false },
      ],
    },
    {
      questionText: 'What does pressing F9 do in Excel formulas?',
      options: [
        { text: 'Deletes the formula', isCorrect: false },
        { text: 'Evaluates parts of formulas', isCorrect: true },
        { text: 'Adds new cells', isCorrect: false },
        { text: 'Changes cell format', isCorrect: false },
      ],
    },
    {
      questionText: 'What is a best practice for naming ranges in formulas?',
      options: [
        { text: 'Use spaces in names', isCorrect: false },
        { text: 'Make them as long as possible', isCorrect: false },
        { text: 'Use clear, descriptive names', isCorrect: true },
        { text: 'Include special characters', isCorrect: false },
      ],
    },
    {
      questionText: 'How can you make complex formulas easier to understand?',
      options: [
        { text: 'Remove all spaces', isCorrect: false },
        { text: 'Use single letter variables', isCorrect: false },
        { text: 'Break them into steps', isCorrect: true },
        { text: 'Combine multiple functions', isCorrect: false },
      ],
    },
    {
      questionText: 'What should you do before using AVERAGE on a dataset?',
      options: [
        { text: 'Sort the data', isCorrect: false },
        { text: 'Verify all cells contain numbers', isCorrect: true },
        { text: 'Change cell colors', isCorrect: false },
        { text: 'Add borders', isCorrect: false },
      ],
    },
    {
      questionText: 'Which function would you use to find the longest text in a range?',
      options: [
        { text: 'LONGEST', isCorrect: false },
        { text: 'MAX', isCorrect: false },
        { text: 'LEN with MAX', isCorrect: true },
        { text: 'COUNT', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the correct way to handle errors in formulas?',
      options: [
        { text: 'Ignore them', isCorrect: false },
        { text: 'Delete error cells', isCorrect: false },
        { text: 'Use error handling functions', isCorrect: true },
        { text: 'Hide error cells', isCorrect: false },
      ],
    },
    // Final set of quiz questions
    {
      questionText: 'What is the difference between COUNT and COUNTA functions?',
      options: [
        { text: 'They are exactly the same', isCorrect: false },
        { text: 'COUNTA counts text and numbers', isCorrect: true },
        { text: 'COUNT is faster', isCorrect: false },
        { text: 'COUNTA only counts text', isCorrect: false },
      ],
    },
    {
      questionText: 'When using MID function, what does the second parameter represent?',
      options: [
        { text: 'End position', isCorrect: false },
        { text: 'Text length', isCorrect: false },
        { text: 'Start position', isCorrect: true },
        { text: 'Cell reference', isCorrect: false },
      ],
    },
    {
      questionText: 'What happens if you include hidden rows in a SUM range?',
      options: [
        { text: 'Formula returns error', isCorrect: false },
        { text: 'Hidden values are ignored', isCorrect: false },
        { text: 'Only visible cells are summed', isCorrect: false },
        { text: 'Hidden values are included', isCorrect: true },
      ],
    },
    {
      questionText: 'Which is NOT a valid text function in Excel?',
      options: [
        { text: 'LEFT', isCorrect: false },
        { text: 'RIGHT', isCorrect: false },
        { text: 'MIDDLE', isCorrect: true },
        { text: 'MID', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the maximum number of conditions you can use in an AND function?',
      options: [
        { text: '255 conditions', isCorrect: true },
        { text: '10 conditions', isCorrect: false },
        { text: '50 conditions', isCorrect: false },
        { text: 'No limit', isCorrect: false },
      ],
    },
    {
      questionText: 'How can you find the average of only positive numbers in a range?',
      options: [
        { text: 'Use AVERAGE only', isCorrect: false },
        { text: 'Use AVERAGEIF with >0 condition', isCorrect: true },
        { text: 'Use SUM then divide', isCorrect: false },
        { text: 'Use COUNT function', isCorrect: false },
      ],
    },
    {
      questionText: 'Which combination of functions helps count unique values?',
      options: [
        { text: 'COUNT and SUM', isCorrect: false },
        { text: 'LEFT and RIGHT', isCorrect: false },
        { text: 'UNIQUE and COUNTA', isCorrect: true },
        { text: 'MAX and MIN', isCorrect: false },
      ],
    },
    {
      questionText: 'What happens when IF conditions are nested too deeply?',
      options: [
        { text: 'Formula becomes harder to maintain', isCorrect: true },
        { text: 'Excel runs faster', isCorrect: false },
        { text: 'Results are more accurate', isCorrect: false },
        { text: 'Nothing changes', isCorrect: false },
      ],
    },
    {
      questionText: 'Which function would you use to remove spaces from text?',
      options: [
        { text: 'CLEAN', isCorrect: false },
        { text: 'TRIM', isCorrect: true },
        { text: 'CLEAR', isCorrect: false },
        { text: 'REMOVE', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the best way to make formulas easier to audit?',
      options: [
        { text: 'Make them as short as possible', isCorrect: false },
        { text: 'Combine multiple functions', isCorrect: false },
        { text: 'Use named ranges and clear references', isCorrect: true },
        { text: 'Remove all spaces', isCorrect: false },
      ],
    }
  ];

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {showScore ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Complete! 🎉</h2>
          <p className="text-xl">
            You scored {score} out of {questions.length}
          </p>
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setShowScore(false);
            }}
            className="mt-4 px-6 py-2 bg-black text-white rounded-full"
          >
            Retry Quiz
          </button>
        </div>
      ) : (
        <div>
          <div className="mb-8">
            <div className="flex justify-between mb-4">
              <span className="text-sm text-gray-600">
                Question {currentQuestion + 1}/{questions.length}
              </span>
              <span className="text-sm text-gray-600">
                Score: {score}
              </span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-black rounded-full transition-all"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4">
            {questions[currentQuestion].questionText}
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option.isCorrect)}
                className="p-4 text-left border rounded-lg hover:border-black transition-colors"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 