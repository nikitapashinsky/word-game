import { useState } from "react";
import { guessWords, validWords } from "../data";

export default function GuessInput({ innerRef, handleSubmit }) {
  const [guess, setGuess] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (
          guessWords.find(
            (word) => word.toUpperCase() === guess.toUpperCase()
          ) ||
          validWords.find((word) => word.toUpperCase() === guess.toUpperCase())
        ) {
          handleSubmit(guess.toUpperCase());
        } else {
          console.log("not in word list");
        }
        setGuess("");
      }}
      className="flex w-full items-center"
    >
      <input
        ref={innerRef}
        autoFocus
        value={guess}
        type="text"
        minLength={5}
        maxLength={5}
        onChange={(event) => {
          const guess = event.target.value.replace(/[^a-z]/gi, "");
          setGuess(guess);
          console.log(guess);
        }}
        placeholder="GUESS"
        className="flex h-14 w-full items-center rounded-2xl border-2 border-neutral-200 px-5 font-medium uppercase tracking-wider placeholder:text-neutral-400 focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 dark:placeholder:text-neutral-500"
      />
    </form>
  );
}
