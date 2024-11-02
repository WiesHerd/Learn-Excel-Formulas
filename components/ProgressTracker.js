export default function ProgressTracker({ completedFormulas, totalFormulas }) {
  const progress = (completedFormulas / totalFormulas) * 100;

  return (
    <div className="fixed top-4 right-4 bg-white p-4 rounded-lg shadow-lg">
      <h3 className="text-sm font-semibold mb-2">Progress Tracker</h3>
      <div className="flex items-center">
        <div className="w-32 h-2 bg-gray-200 rounded-full mr-2">
          <div
            className="h-2 bg-black rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="text-sm text-gray-600">
          {completedFormulas}/{totalFormulas}
        </span>
      </div>
    </div>
  );
} 