import Quiz from '../components/Quiz';
import Link from 'next/link';

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            ← Back to Home
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold text-center mb-8">
          Excel Formula Quiz
        </h1>
        
        <Quiz />
      </div>
    </div>
  );
} 