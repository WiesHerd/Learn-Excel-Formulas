import { useRouter } from 'next/router';
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
    // Add more questions...
  ],
  // Add intermediate and advanced questions...
};

export default function QuizPage() {
  const router = useRouter();
  const { level } = router.query;

  if (!level) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        {level.charAt(0).toUpperCase() + level.slice(1)} Level Quiz
      </h1>
      <Quiz questions={quizQuestions[level]} />
    </div>
  );
}
