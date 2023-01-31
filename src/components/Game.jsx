import { useState } from "react";
import { sample } from "../utils";
import { validWords } from "../data";

import GuessInput from "./GuessInput";
import GuessGrid from "./GuessGrid";

export default function Game() {
  const [answer, setAnswer] = useState(sample(validWords).toUpperCase());
  console.info({ answer });

  const [guesses, setGuesses] = useState([]);
  console.log(guesses);

  function handleSubmit(guess) {
    setGuesses((prevGuesses) => [...prevGuesses, guess]);
  }

  return (
    <div className="mx-auto mt-12 flex max-w-lg flex-col items-center text-zinc-900 dark:text-zinc-50">
      <GuessGrid guesses={guesses} />
      <GuessInput handleSubmit={handleSubmit} />
    </div>
  );
}
