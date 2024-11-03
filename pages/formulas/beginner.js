import { useState } from 'react';
import Link from 'next/link';
import FormulaModal from '../../components/FormulaModal';
import { beginnerFormulaData } from '../../data/beginnerFormulaData';

export default function BeginnerTrack() {
  const [selectedFormula, setSelectedFormula] = useState(null);

  // Get the correct section based on the formula
  const getFormulaData = (formula) => {
    return beginnerFormulaData[formula] || null;
  };

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
              className="px-4 py-2 rounded-full text-sm bg-black text-white"
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
              className="px-4 py-2 rounded-full text-sm text-gray-600"
            >
              Advanced
            </Link>
          </div>
        </div>

        <div className="p-8">
          <h1 className="text-2xl font-semibold mb-2">Beginner Track</h1>
          <p className="text-gray-600 mb-8">Master the fundamental Excel formulas</p>
          
          <div className="grid grid-cols-2 gap-x-16 mb-12">
            <div>
              <h2 className="text-sm text-gray-600 mb-1">Estimated Time</h2>
              <p>15-20 minutes</p>
            </div>
            <div>
              <h2 className="text-sm text-gray-600 mb-1">Prerequisites</h2>
              <p>Basic Excel knowledge</p>
            </div>
          </div>

          {/* Formula Sections */}
          <div className="space-y-10">
            <section>
              <h2 className="text-lg font-semibold mb-4">Basic Calculations</h2>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setSelectedFormula('SUM')}
                  className="p-4 text-left border rounded-lg hover:border-gray-400 transition-colors"
                >
                  SUM
                </button>
                <button 
                  onClick={() => setSelectedFormula('AVERAGE')}
                  className="p-4 text-left border rounded-lg hover:border-gray-400 transition-colors"
                >
                  AVERAGE
                </button>
                <button 
                  onClick={() => setSelectedFormula('COUNT')}
                  className="p-4 text-left border rounded-lg hover:border-gray-400 transition-colors"
                >
                  COUNT
                </button>
                <button 
                  onClick={() => setSelectedFormula('MAX')}
                  className="p-4 text-left border rounded-lg hover:border-gray-400 transition-colors"
                >
                  MAX
                </button>
                <button 
                  onClick={() => setSelectedFormula('MIN')}
                  className="p-4 text-left border rounded-lg hover:border-gray-400 transition-colors"
                >
                  MIN
                </button>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">Text Functions</h2>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setSelectedFormula('LEFT')}
                  className="p-4 text-left border rounded-lg hover:border-gray-400 transition-colors"
                >
                  LEFT
                </button>
                <button 
                  onClick={() => setSelectedFormula('RIGHT')}
                  className="p-4 text-left border rounded-lg hover:border-gray-400 transition-colors"
                >
                  RIGHT
                </button>
                <button 
                  onClick={() => setSelectedFormula('MID')}
                  className="p-4 text-left border rounded-lg hover:border-gray-400 transition-colors"
                >
                  MID
                </button>
                <button 
                  onClick={() => setSelectedFormula('LEN')}
                  className="p-4 text-left border rounded-lg hover:border-gray-400 transition-colors"
                >
                  LEN
                </button>
                <button 
                  onClick={() => setSelectedFormula('CONCATENATE')}
                  className="p-4 text-left border rounded-lg hover:border-gray-400 transition-colors"
                >
                  CONCATENATE
                </button>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-4">Logical Functions</h2>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setSelectedFormula('IF')}
                  className="p-4 text-left border rounded-lg hover:border-gray-400 transition-colors"
                >
                  IF
                </button>
                <button 
                  onClick={() => setSelectedFormula('AND')}
                  className="p-4 text-left border rounded-lg hover:border-gray-400 transition-colors"
                >
                  AND
                </button>
                <button 
                  onClick={() => setSelectedFormula('OR')}
                  className="p-4 text-left border rounded-lg hover:border-gray-400 transition-colors"
                >
                  OR
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Formula Modal */}
      {selectedFormula && (
        <FormulaModal
          formula={selectedFormula}
          data={getFormulaData(selectedFormula)}
          onClose={() => setSelectedFormula(null)}
        />
      )}
    </div>
  );
} 