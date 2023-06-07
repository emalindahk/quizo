import { createContext, useState } from "react";

export const TriviaContext = createContext();

export default function TriviaProvider({ children }) {
  const [questions, setQuestions] = useState();
  const [category, setCategory] = useState({
    name: "",
    image: "",
  });
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState("");

  const totalScore = difficulty === "Easy" ? 50 : difficulty === "Medium" ? 80 : 100;

  const handleScore = () => {
    if (difficulty === "Easy") {
      setScore(score + 5);
    } else if (difficulty === "Medium") {
      setScore(score + 8);
    } else if (difficulty === "Hard") {
      setScore(score + 10);
    }
  };

  return (
    <TriviaContext.Provider
      value={{
        questions,
        setQuestions,
        score,
        difficulty,
        setDifficulty,
        handleScore,
        category,
        setCategory,
        totalScore,
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
}
