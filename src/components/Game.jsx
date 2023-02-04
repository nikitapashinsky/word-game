import { useRef, useState } from "react";
import useFocusOnKeyDown from "react-focus-onkeydown";
import { sample } from "../utils";
import { validWords } from "../data";

import GuessInput from "./GuessInput";
import GuessGrid from "./GuessGrid";

export default function Game() {
  const inputRef = useRef(null);
  useFocusOnKeyDown(inputRef, true);

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
        <div className="absolute top-4 left-4 right-4 rounded-2xl border-2 border-neutral-300 bg-neutral-100 p-4 font-medium tracking-wide">
          {gameStatus === "gameWon"
            ? `You won  in ${
                guesses.length > 1 ? `${guesses.length} tries` : `just 1 try`
              }  dude!!!`
            : `You lost dude. The word was ${answer}.`}
        </div>
      )}
      <GuessGrid guesses={guesses} answer={answer} />
      {gameStatus === "gameRunning" ? (
        <GuessInput innerRef={inputRef} handleSubmit={handleSubmit} />
      ) : (
        <button
          onClick={playAgain}
          className="h-14 w-full rounded-2xl bg-neutral-100 text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200"
        >
          Play again
        </button>
      )}
    </div>
  );
}
