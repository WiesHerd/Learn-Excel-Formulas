import FormulaCard from './FormulaCard';

export default function FormulaSection({ title, formulas, level }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
        {Object.keys(formulas).map((formula) => (
          <FormulaCard
            key={formula}
            formula={formula}
            level={level}
          />
        ))}
      </div>
    </section>
  );
}
