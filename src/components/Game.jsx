import { useState } from "react";
import { sample } from "../utils";
import { validWords } from "../data";

import GuessInput from "./GuessInput";
import GuessGrid from "./GuessGrid";
import Keyboard from "./Keyboard";

export default function Game() {
  const [answer, setAnswer] = useState(sample(validWords).toUpperCase());
  console.info({ answer });

  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("gameRunning");

  function handleSubmit(guess) {
    if (guesses.length < 6) {
      setGuesses((prevGuesses) => [...prevGuesses, guess]);

      if (guess === answer) {
        setGameStatus("gameWon");
      }
    }

    if (guesses.length === 5 && guess !== answer) {
      setGameStatus("gameLost");
    }
  }

  function playAgain() {
    setAnswer(sample(validWords).toUpperCase());
    setGuesses([]);
    setGameStatus("gameRunning");
  }

  return (
    <div className="mx-auto flex h-screen max-w-xs flex-col items-center justify-center gap-8 text-zinc-900 dark:text-zinc-50">
      {gameStatus !== "gameRunning" && (
        <div className="absolute top-24 font-medium tracking-wide">
          {gameStatus === "gameWon"
            ? `You won dude. Took you ${
                guesses.length === 1
                  ? `just one try`
                  : `${guesses.length} tries`
              }.`
            : `You lost dude. The word was ${answer}.`}
        </div>
      )}
      <GuessGrid guesses={guesses} answer={answer} />
      {gameStatus === "gameRunning" ? (
        <>
          <GuessInput handleSubmit={handleSubmit} />
          <Keyboard />
        </>
      ) : (
        <button
          onClick={playAgain}
          className="h-14 w-full rounded-2xl text-sm font-bold uppercase tracking-widest dark:bg-neutral-800 dark:text-neutral-200"
        >
          Play again
        </button>
      )}
    </div>
  );
}
