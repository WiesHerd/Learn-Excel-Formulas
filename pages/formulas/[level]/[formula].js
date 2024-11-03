import { useRouter } from 'next/router';
import { beginnerFormulaData } from '../../../data/beginnerFormulaData';
import { intermediateFormulaData } from '../../../data/intermediateFormulaData';
import { advancedFormulaData } from '../../../data/advancedFormulaData';

export default function FormulaDetail() {
  const router = useRouter();
  const { level, formula: formulaId } = router.query;

  const formulasMap = {
    beginner: beginnerFormulaData,
    intermediate: intermediateFormulaData,
    advanced: advancedFormulaData,
  };

  const formula = formulasMap[level]?.[formulaId];

  if (!formula) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{formula.title || formulaId}</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <p className="text-gray-700">{formula.description}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Syntax</h2>
        <code className="block bg-gray-100 p-4 rounded">{formula.syntax}</code>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Examples</h2>
        {formula.examples.map((example, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
            <h3 className="font-bold mb-2">{example.title}</h3>
            <code className="block bg-gray-100 p-2 rounded mb-2">
              {example.formula}
            </code>
            <p className="text-gray-600">{example.explanation}</p>
          </div>
        ))}
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-5">
            {formula.commonMistakes.map((mistake, index) => (
              <li key={index} className="mb-2 text-gray-700">{mistake}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
          <ul className="list-disc pl-5">
            {formula.bestPractices.map((practice, index) => (
              <li key={index} className="mb-2 text-gray-700">{practice}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
