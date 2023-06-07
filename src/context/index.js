import { createContext, useState } from "react";
import useDebounce from "../hook/useDebounce";

export const TriviaContext = createContext();

export default function TriviaProvider({ children }) {
  const [questions, setQuestions] = useState();
  const [category, setCategory] = useState({
    name: "",
    image: "",
  });
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState("");
  const debouncedScore = useDebounce(score, 500);

  const totalScore = difficulty === "Easy" ? 50 : difficulty === "Medium" ? 80 : 100;

  const handleScore = () => {
    if (difficulty === "Easy") {
      setScore(debouncedScore + 5);
    } else if (difficulty === "Medium") {
      setScore(debouncedScore + 8);
    } else if (difficulty === "Hard") {
      setScore(debouncedScore + 10);
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
