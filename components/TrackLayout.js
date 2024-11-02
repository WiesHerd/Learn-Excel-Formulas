import FormulaSection from './FormulaSection';

export default function TrackLayout({ level, data }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
          <p className="text-gray-600 mb-8">{data.description}</p>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-sm text-gray-600">Estimated Time</h2>
              <p className="font-bold">{data.estimatedTime}</p>
            </div>
            <div>
              <h2 className="text-sm text-gray-600">Prerequisites</h2>
              <p className="font-bold">{data.prerequisites}</p>
            </div>
          </div>

          {Object.entries(data.sections).map(([title, formulas]) => (
            <FormulaSection 
              key={title}
              title={title}
              formulas={formulas}
              level={level}
            />
          ))}
        </div>
      </main>
    </div>
  );
} 