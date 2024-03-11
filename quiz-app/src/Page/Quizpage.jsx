import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import QuizQue from "../Components/QuizQue";

const Quizpage = () => {
  const quizData = useSelector((state) => state.quizData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const questions = quizData.results || []; // Ensure results is initialized
  const totalQuestions = questions.length;

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleAnswerSubmit = (answer) => {
    setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
    handleNextQuestion();
  };

  const handleQuizSubmit = () => {
    // Calculate user's performance metrics
    // Display modal or popup with performance metrics
  };

  if (quizData.isLoading) {
    return <div>Loading...</div>;
  }

  if (quizData.isError) {
    return <div>Error occurred while fetching data</div>;
  }

  if (totalQuestions === 0) {
    return <div>No questions available</div>;
  }

  if (currentQuestionIndex === totalQuestions) {
    return (
      <div>
        <h1>Quiz Completed</h1>
        {/* Display performance metrics */}
        {/* Render a button to handleQuizSubmit */}
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return <div>Question not available</div>;
  }

  return (
    <div>
      <h1>Start Quiz</h1>
      <p>
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </p>
      <QuizQue
        question={currentQuestion}
        onAnswerSubmit={handleAnswerSubmit}
        onNextQuestion={handleNextQuestion}
        onPreviousQuestion={handlePreviousQuestion}
      />
    </div>
  );
};

export default Quizpage;
