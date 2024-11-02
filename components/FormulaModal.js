import { useState } from 'react';

export default function FormulaModal({ formula, data, onClose }) {
  console.log('Formula:', formula);
  console.log('Data:', data);

  const [activeTab, setActiveTab] = useState('learn');
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showHint, setShowHint] = useState(false);

  if (!data) return null;

  const checkAnswer = () => {
    const isCorrect = userAnswer.toUpperCase() === data.practice?.answer.toUpperCase();
    setFeedback({
      correct: isCorrect,
      message: isCorrect ? 'Correct!' : 'Try again',
      hint: !isCorrect ? data.practice?.hint : null
    });
  };

  // Standardized rendering functions
  const renderTable = ({ headers, data }) => {
    if (!headers || !data) return null;
    
    return (
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="border p-2 text-center bg-gray-50">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border p-2 text-center">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderExample = (example) => {
    if (!example) return null;
    
    return (
      <div className="mb-6">
        <h4 className="font-semibold mb-2">{example.title}</h4>
        
        {/* Add table rendering here */}
        {example.data && (
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full border-collapse">
              <tbody>
                {example.data.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="border p-2 text-center">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="bg-gray-50 p-4 rounded">
          <div className="mb-2">
            <span className="font-semibold">Formula: </span>
            <code className="bg-gray-100 px-2 py-1 rounded">{example.formula}</code>
          </div>
          <div className="mb-2">
            <span className="font-semibold">Result: </span>
            <span>{example.result}</span>
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-semibold">Explanation: </span>
            <span>{example.explanation}</span>
          </div>
        </div>
      </div>
    );
  };

  const renderExamplesSection = () => {
    if (!data || !data.examples) return null;

    return (
      <div className="mb-6">
        <h3 className="font-bold mb-2">Examples</h3>
        {data.examples.map((example, index) => (
          <div key={index}>
            {renderExample(example)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">{formula}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">×</button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 p-4 border-b">
          <button
            className={`px-4 py-2 rounded-full ${
              activeTab === 'learn' ? 'bg-black text-white' : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('learn')}
          >
            Learn
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              activeTab === 'practice' ? 'bg-black text-white' : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('practice')}
          >
            Practice
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'learn' ? (
            <>
              {/* Syntax */}
              <div className="mb-6">
                <h3 className="font-bold mb-2">Syntax</h3>
                <code className="block bg-gray-100 p-3 rounded">
                  {data.syntax}
                </code>
              </div>

              {/* Microsoft Documentation Link - New separate section */}
              {data.microsoftUrl && (
                <div className="mb-6">
                  <h3 className="font-bold mb-2">Official Documentation</h3>
                  <a 
                    href={data.microsoftUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                  >
                    <span>Microsoft Excel Documentation</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="ml-2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              )}

              {/* Description */}
              <div className="mb-6">
                <h3 className="font-bold mb-2">Description</h3>
                <div className="whitespace-pre-line">{data.description}</div>
              </div>

              {/* When to Use */}
              <div className="mb-6">
                <h3 className="font-bold mb-2">When to Use</h3>
                <ul className="list-disc pl-5">
                  {data.whenToUse?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Best Practices */}
              <div className="mb-6">
                <h3 className="font-bold mb-2">Best Practices</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {data.bestPractices?.map((practice, index) => (
                    <li key={index}>{practice}</li>
                  ))}
                </ul>
              </div>

              {/* Common Mistakes */}
              <div className="mb-6">
                <h3 className="font-bold mb-2">Common Mistakes to Avoid</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {data.commonMistakes?.map((mistake, index) => (
                    <li key={index}>{mistake}</li>
                  ))}
                </ul>
              </div>

              {/* Tips & Tricks */}
              <div className="mb-6">
                <h3 className="font-bold mb-2">Tips & Tricks</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {data.tipsAndTricks?.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>

              {/* Examples */}
              {renderExamplesSection()}

              {/* Real World Scenarios */}
              {data.realWorldScenarios && (
                <div className="mb-6">
                  <h3 className="font-bold mb-2">Real World Scenarios</h3>
                  <div className="space-y-4">
                    {data.realWorldScenarios.map((scenario, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded">
                        <h4 className="font-semibold mb-2">{scenario.title}</h4>
                        <p className="mb-2">{scenario.scenario}</p>
                        <div className="text-sm">
                          <p className="text-gray-600 mb-1">Setup: {scenario.setup}</p>
                          <code className="block bg-gray-100 p-2 rounded mb-1">
                            {scenario.solution}
                          </code>
                          <p className="text-gray-600">Result: {scenario.result}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            // Practice Tab Content
            <div className="space-y-6">
              <h3 className="text-lg font-semibold mb-4">{data.practice?.question}</h3>
              
              <div className="bg-gray-50 p-4 rounded">
                {/* Dynamic Practice Table */}
                {data.practice?.data && (
                  <div className="overflow-x-auto mb-4">
                    <table className="min-w-full border-collapse">
                      <tbody>
                        {data.practice.data.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                              <td 
                                key={cellIndex} 
                                className="border p-2 text-center"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <div className="space-y-4">
                  <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Enter your formula..."
                    className="w-full p-2 border rounded"
                  />
                  
                  <div className="flex gap-2">
                    <button
                      onClick={checkAnswer}
                      className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                    >
                      Check Answer
                    </button>

                    <button
                      onClick={() => setShowHint(true)}
                      className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
                    >
                      Hint
                    </button>

                    <button
                      onClick={() => setShowAnswer(true)}
                      className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
                    >
                      Show Answer
                    </button>
                  </div>

                  {showHint && (
                    <div className="mt-4 p-4 rounded bg-blue-50 text-blue-800">
                      <p className="text-sm">{data.practice?.hint}</p>
                    </div>
                  )}

                  {showAnswer && (
                    <div className="mt-4 p-4 rounded bg-gray-50 text-gray-800">
                      <p className="font-medium">Answer:</p>
                      <code className="block bg-gray-100 p-2 rounded mt-1">
                        {data.practice?.answer}
                      </code>
                    </div>
                  )}

                  {feedback && (
                    <div className={`mt-4 p-4 rounded ${
                      feedback.correct ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                    }`}>
                      <p className="font-medium">{feedback.message}</p>
                      {feedback.hint && <p className="mt-2 text-sm">{feedback.hint}</p>}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 