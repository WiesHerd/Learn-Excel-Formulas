import { useState } from 'react';
import Link from 'next/link';
import FormulaModal from '../../components/FormulaModal';
import { intermediateFormulaData } from '../../data/intermediateFormulaData';

export default function IntermediateTrack() {
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
              className="px-4 py-2 rounded-full text-sm bg-black text-white"
            >
              Intermediate
            </Link>
            <Link 
              href="/formulas/advanced"
              className="px-4 py-2 rounded-full text-sm text-gray-600"
            >
              Advanced
            </Link>
          </div>
        </div>

        <div className="p-8">
          <h1 className="text-2xl font-semibold mb-2">Intermediate Track</h1>
          <p className="text-gray-600 mb-8">Level up your Excel skills with more advanced formulas</p>

          <div className="grid grid-cols-2 gap-x-16 mb-12">
            <div>
              <h2 className="text-sm text-gray-600 mb-1">Estimated Time</h2>
              <p>30-40 minutes</p>
            </div>
            <div>
              <h2 className="text-sm text-gray-600 mb-1">Prerequisites</h2>
              <p>Completion of Beginner Track</p>
            </div>
          </div>

          {/* Lookup Functions */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Lookup Functions</h2>
            <div className="grid grid-cols-2 gap-4">
              {["VLOOKUP", "HLOOKUP", "INDEX", "MATCH", "XLOOKUP", "XMATCH"].map(formula => (
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

          {/* Statistical Functions */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Statistical Functions</h2>
            <div className="grid grid-cols-2 gap-4">
              {["COUNTIF", "SUMIF", "AVERAGEIF", "RANK"].map(formula => (
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

          {/* Error Handling */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Error Handling</h2>
            <div className="grid grid-cols-2 gap-4">
              {["IFERROR"].map(formula => (
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
          data={intermediateFormulaData[selectedFormula]}
          onClose={() => setSelectedFormula(null)}
        />
      )}
    </div>
  );
} 