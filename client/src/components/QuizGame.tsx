import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Smile, Star, Sparkles, PartyPopper } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  correctReaction: string;
  incorrectReaction: string;
}

interface QuizGameProps {
  onComplete: (score: number) => void;
  animationsEnabled: boolean;
}

const QuizGame = ({ onComplete, animationsEnabled }: QuizGameProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showReaction, setShowReaction] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "Who's more likely to dance randomly around the house?",
      options: ["The Groom", "The Bride", "None", "The Bride & Groom"],
      correctAnswer: 0,
      correctReaction: "🎉 Perfect! The Groom loves to dance!",
      incorrectReaction: "💕 Almost! But that's not quite right!"
    },
    {
      id: 2,
      question: "Who wants to have 8 kids?",
      options: ["The Groom", "The Bride", "The Bride & Groom", "Still debating!"],
      correctAnswer: 0,
      correctReaction: "🎉 Correct! The Groom dreams of a big family!",
      incorrectReaction: "💕 Not quite! Try again next time!"
    },
    {
      id: 3,
      question: "Who farts louder (be brave with this one 😆)?",
      options: ["The Groom", "The Bride", "It was mutual", "Still debating!"],
      correctAnswer: 3,
      correctReaction: "🎉 Ha! Yes, we're still figuring that one out!",
      incorrectReaction: "💕 Nice try! But the truth is still unknown!"
    },
    {
      id: 4,
      question: "How long did the groom court the bride before they became a couple?",
      options: ["A Year", "A Month", "A Day", "No courtship happened"],
      correctAnswer: 1,
      correctReaction: "🎉 Exactly! Just a month and we knew!",
      incorrectReaction: "💕 Close, but not quite! Love moves fast!"
    },
    {
      id: 5,
      question: "Who's more likely to talk to their pet like they're people?",
      options: ["The Bride", "The Groom", "The Bride & Groom", "Still debating!"],
      correctAnswer: 2,
      correctReaction: "🎉 Yes! We both love our furry friends!",
      incorrectReaction: "💕 Almost there! We both do it!"
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    
    setSelectedAnswer(answerIndex);
    const correct = answerIndex === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    
    let nextScore = score;
    if (correct) {
      nextScore = score + 1;
      setScore((prev) => prev + 1);
    }
    
    setShowReaction(true);
    
    // Move to next question or complete quiz
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowReaction(false);
      } else {
        // Quiz complete
        setTimeout(() => {
          onComplete(nextScore);
        }, 1000);
      }
    }, 2500);
  };

  const currentQ = questions[currentQuestion];

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto px-4"
      initial={animationsEnabled ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      data-testid="quiz-game"
    >
      {/* Quiz Header */}
      <div className="text-center mb-8">
        <motion.div
          initial={animationsEnabled ? { y: -20, opacity: 0 } : { y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-4"
        >
          <Heart className="w-5 h-5 text-[#b89343]" />
          <span className="text-white font-medium">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </motion.div>
        
        <div className="flex justify-center gap-2 mb-4">
          {questions.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx < currentQuestion
                  ? 'w-8 bg-[#a7752b]'
                  : idx === currentQuestion
                  ? 'w-12 bg-white'
                  : 'w-8 bg-white/30'
              }`}
              data-testid={`progress-dot-${idx}`}
            />
          ))}
        </div>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={animationsEnabled ? { x: 50, opacity: 0 } : { x: 0, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          exit={animationsEnabled ? { x: -50, opacity: 0 } : { x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-2xl p-8 mb-6"
          data-testid={`question-${currentQuestion}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            {currentQ.question}
          </h2>

          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <motion.div
                key={index}
                initial={animationsEnabled ? { x: -20, opacity: 0 } : { x: 0, opacity: 1 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <Button
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full py-6 text-lg font-medium transition-all duration-300 ${
                    selectedAnswer === null
                      ? 'bg-secondary hover:bg-secondary/80 text-foreground hover:scale-105'
                      : selectedAnswer === index
                      ? isCorrect
                        ? 'bg-primary text-foreground scale-105'
                        : 'bg-red-500 text-white scale-105'
                      : index === currentQ.correctAnswer && selectedAnswer !== null
                      ? 'bg-primary text-foreground'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                  data-testid={`answer-${index}`}
                >
                  {option}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Reaction Feedback */}
      <AnimatePresence>
        {showReaction && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            className="text-center"
            data-testid="reaction-feedback"
          >
            <motion.div
              animate={animationsEnabled ? {
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              } : {}}
              transition={{ duration: 0.5, repeat: 2 }}
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-full text-foreground font-semibold text-lg ${
                isCorrect ? 'bg-primary' : 'bg-orange-500 text-white'
              }`}
            >
              {isCorrect ? (
                <Sparkles className="w-6 h-6" />
              ) : (
                <Smile className="w-6 h-6" />
              )}
              <span data-testid="reaction-text">
                {isCorrect ? currentQ.correctReaction : currentQ.incorrectReaction}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Score indicator */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
          <Star className="w-4 h-4 text-[#b89343]" />
          <span className="text-white text-sm font-medium" data-testid="text-current-score">
            Score: {score}/{questions.length}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default QuizGame;
