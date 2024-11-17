import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import FormulaModal from '../../components/FormulaModal';
import { beginnerFormulaData } from '../../data/beginnerFormulaData';
import { intermediateFormulaData } from '../../data/intermediateFormulaData';
import { advancedFormulaData } from '../../data/advancedFormulaData';

export default function FormulaTrack() {
  const [selectedFormula, setSelectedFormula] = useState(null);
  const router = useRouter();
  const { level } = router.query;

  if (!level || !['beginner', 'intermediate', 'advanced'].includes(level)) {
    return <div>Invalid level selected</div>;
  }

  // Get the correct formula data based on level
  const getFormulaData = () => {
    switch(level) {
      case 'beginner':
        return beginnerFormulaData;
      case 'intermediate':
        return intermediateFormulaData;
      case 'advanced':
        return advancedFormulaData;
      default:
        return beginnerFormulaData;
    }
  };

  // Get the correct page title and description
  const getPageContent = () => {
    switch(level) {
      case 'beginner':
        return {
          title: 'Beginner Track',
          description: 'Master the fundamental Excel formulas',
          time: '1-2 hours',
          prerequisites: 'None'
        };
      case 'intermediate':
        return {
          title: 'Intermediate Track',
          description: 'Level up your Excel skills with more advanced formulas',
          time: '2-3 hours',
          prerequisites: 'Completion of Beginner Track'
        };
      case 'advanced':
        return {
          title: 'Advanced Track',
          description: 'Master complex Excel formulas and become a power user',
          time: '3-4 hours',
          prerequisites: 'Completion of Intermediate Track'
        };
      default:
        return {
          title: 'Beginner Track',
          description: 'Master the fundamental Excel formulas',
          time: '4-6 hours',
          prerequisites: 'None'
        };
    }
  };

  const pageContent = getPageContent();
  const formulaData = getFormulaData();

  // Get formula categories based on level
  const getCategories = () => {
    switch(level) {
      case 'beginner':
        return [
          { title: 'Basic Functions', formulas: ['SUM', 'AVERAGE', 'COUNT', 'MAX', 'MIN'] },
          { title: 'Text Functions', formulas: ['CONCATENATE', 'LEFT', 'RIGHT', 'MID'] }
        ];
      case 'intermediate':
        return [
          { title: 'Lookup Functions', formulas: ['VLOOKUP', 'HLOOKUP', 'INDEX', 'MATCH'] },
          { title: 'Logical Functions', formulas: ['IF', 'AND', 'OR', 'NOT'] },
          { title: 'Math Functions', formulas: ['SUMIF', 'COUNTIF', 'AVERAGEIF'] }
        ];
      case 'advanced':
        return [
          { title: 'Array Functions', formulas: ['UNIQUE', 'FILTER', 'SORT', 'SEQUENCE'] },
          { title: 'Financial Functions', formulas: ['NPV', 'IRR', 'PMT', 'FV'] },
          { title: 'Advanced Logic', formulas: ['IFS', 'SWITCH', 'LAMBDA', 'LET'] },
          { title: 'Database Functions', formulas: ['DSUM', 'DCOUNT', 'FORECAST.LINEAR'] }
        ];
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-3xl mx-auto my-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center space-x-2 p-4 border-b">
          <Link 
            href="/"
            className="text-sm text-gray-600"
          >
            Home
          </Link>
          <span className="text-gray-300">•</span>
          <Link 
            href="/formulas/beginner"
            className={`text-sm ${
              level === 'beginner' ? 'bg-black text-white px-4 py-2 rounded-full' : 'text-gray-600'
            }`}
          >
            Beginner
          </Link>
          <Link 
            href="/formulas/intermediate"
            className={`text-sm ${
              level === 'intermediate' ? 'bg-black text-white px-4 py-2 rounded-full' : 'text-gray-600'
            }`}
          >
            Intermediate
          </Link>
          <Link 
            href="/formulas/advanced"
            className={`text-sm ${
              level === 'advanced' ? 'bg-black text-white px-4 py-2 rounded-full' : 'text-gray-600'
            }`}
          >
            Advanced
          </Link>
        </div>

        <div className="p-8">
          <h1 className="text-2xl font-semibold mb-2">{pageContent.title}</h1>
          <p className="text-gray-600 mb-8">{pageContent.description}</p>
          
          <div className="grid grid-cols-2 gap-x-16 mb-12">
            <div>
              <h2 className="text-sm text-gray-600 mb-1">Estimated Time</h2>
              <p>{pageContent.time}</p>
            </div>
            <div>
              <h2 className="text-sm text-gray-600 mb-1">Prerequisites</h2>
              <p>{pageContent.prerequisites}</p>
            </div>
          </div>

          {getCategories().map((category, index) => (
            <section key={index} className="mb-8">
              <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
              <div className="grid grid-cols-2 gap-4">
                {category.formulas.map(formula => (
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
          ))}
        </div>
      </div>

      {selectedFormula && (
        <FormulaModal
          formula={selectedFormula}
          data={formulaData[selectedFormula]}
          onClose={() => setSelectedFormula(null)}
        />
      )}
    </div>
  );
}
