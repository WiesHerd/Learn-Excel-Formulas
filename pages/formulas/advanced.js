import { useState } from 'react';
import Link from 'next/link';
import FormulaModal from '../../components/FormulaModal';
import { advancedFormulaData } from '../../data/advancedFormulaData';

export default function AdvancedTrack() {
  const [selectedFormula, setSelectedFormula] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto my-8 bg-white rounded-lg shadow-lg">
        <div className="flex items-center p-4 border-b">
          <Link 
            href="/"
            className="text-sm text-gray-600"
          >
            Home
          </Link>
          <div className="flex-1 flex justify-center space-x-2">
            <Link 
              href="/formulas/beginner"
              className="px-4 py-2 rounded-full text-sm text-gray-600"
            >
              Beginner
            </Link>
            <Link 
              href="/formulas/intermediate"
              className="px-4 py-2 rounded-full text-sm text-gray-600"
            >
              Intermediate
            </Link>
            <Link 
              href="/formulas/advanced"
              className="px-4 py-2 rounded-full text-sm bg-black text-white"
            >
              Advanced
            </Link>
          </div>
        </div>

        <div className="p-8">
          <h1 className="text-2xl font-semibold mb-2">Advanced Track</h1>
          <p className="text-gray-600 mb-8">Master complex Excel formulas and become a power user</p>

          <div className="grid grid-cols-2 gap-x-16 mb-12">
            <div>
              <h2 className="text-sm text-gray-600 mb-1">Estimated Time</h2>
              <p>30-40 minutes</p>
            </div>
            <div>
              <h2 className="text-sm text-gray-600 mb-1">Prerequisites</h2>
              <p>Completion of Intermediate Track</p>
            </div>
          </div>

          {/* Array Functions */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Array Functions</h2>
            <div className="grid grid-cols-2 gap-4">
              {["UNIQUE", "FILTER", "SORT", "SEQUENCE"].map(formula => (
                <button
                  key={formula}
                  onClick={() => setSelectedFormula(formula)}
                  className="p-4 text-left border rounded-lg hover:border-gray-400 transition-colors"
                >
                  {formula}
                </button>
              ))}
            </div>
          </section>

          {/* Array Manipulation */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Array Manipulation</h2>
            <div className="grid grid-cols-2 gap-4">
              {["RANDARRAY", "SORTBY", "HSTACK", "VSTACK"].map(formula => (
                <button
                  key={formula}
                  onClick={() => setSelectedFormula(formula)}
                  className="p-4 text-left border rounded-lg hover:border-gray-400 transition-colors"
                >
                  {formula}
                </button>
              ))}
            </div>
          </section>

          {/* Advanced Logic */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Advanced Logic</h2>
            <div className="grid grid-cols-2 gap-4">
              {["IFS", "SWITCH", "LAMBDA", "LET"].map(formula => (
                <button
                  key={formula}
                  onClick={() => setSelectedFormula(formula)}
                  className="p-4 text-left border rounded-lg hover:border-gray-400 transition-colors"
                >
                  {formula}
                </button>
              ))}
            </div>
          </section>

          {/* Text Processing */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Text Processing</h2>
            <div className="grid grid-cols-2 gap-4">
              {["TEXTSPLIT", "TEXTBEFORE", "TEXTAFTER", "ARRAYTOTEXT"].map(formula => (
                <button
                  key={formula}
                  onClick={() => setSelectedFormula(formula)}
                  className="p-4 text-left border rounded-lg hover:border-gray-400 transition-colors"
                >
                  {formula}
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>

      {selectedFormula && (
        <FormulaModal
          formula={selectedFormula}
          data={advancedFormulaData[selectedFormula]}
          onClose={() => setSelectedFormula(null)}
        />
      )}
    </div>
  );
} 