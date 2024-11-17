import { useRouter } from 'next/router';
import Link from 'next/link';
import Quiz from '../../components/Quiz';

const quizQuestions = {
  beginner: [
    {
      question: "What does the SUM function do?",
      options: [
        { text: "Adds numbers in a range", isCorrect: true },
        { text: "Multiplies numbers in a range", isCorrect: false },
        { text: "Counts numbers in a range", isCorrect: false },
        { text: "Averages numbers in a range", isCorrect: false }
      ]
    },
    // Add more questions here
  ],
  intermediate: [
    // Add intermediate questions
  ],
  advanced: [
    // Add advanced questions
  ]
};

export default function QuizPage() {
  const router = useRouter();
  const { level } = router.query;

  if (!level) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Navigation */}
      <Link 
        href="/" 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </Link>

      <h1 className="text-4xl font-bold text-center mb-8">
        {level.charAt(0).toUpperCase() + level.slice(1)} Level Quiz
      </h1>
      <Quiz questions={quizQuestions[level]} />
    </div>
  );
}
