import { useState } from 'react';
import FormulaModal from './FormulaModal';

export default function FormulaCard({ formula, level }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="p-4 text-left bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
      >
        {formula}
      </button>

      {isModalOpen && (
        <FormulaModal
          formula={formula}
          level={level}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
} 