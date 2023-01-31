import { useState } from "react";
import { guessWords, validWords } from "../data";

export default function GuessInput() {
  const [guess, setGuess] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (
          guessWords.find((word) => word === guess) ||
          validWords.find((word) => word === guess)
        ) {
          console.info({ guess });
        } else {
          console.log("Not in dictionary");
        }
        setGuess("");
      }}
    >
      <input
        value={guess}
        type="text"
        minLength={5}
        maxLength={5}
        onChange={(event) => {
          const nextGuess = event.target.value.replace(/[^a-z]/gi, "");
          setGuess(nextGuess);
        }}
        placeholder="GUESS"
        className="px-4 py-3 focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 dark:placeholder:text-neutral-500"
      />
    </form>
  );
}
