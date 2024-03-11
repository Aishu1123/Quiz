import React from "react";
import { Route, Routes } from "react-router-dom";
import QuizForm from "../Components/QuizForm";
import Quizpage from "../Page/Quizpage";
import Leaderboardpage from "../Page/Leaderboardpage";


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<QuizForm />} />
        <Route path="/quiz" element={<Quizpage />} />
        <Route path="/leaderboard" element={<Leaderboardpage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
