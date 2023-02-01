import { range } from "../utils";
import { checkGuess } from "../game-helpers";

export default function GuessRow({ guess, answer }) {
  const result = checkGuess(guess, answer);

  function Cell({ letter, status }) {
    return (
      <div
        className={`
        ${
          status === "misplaced" &&
          "dark:border-yellow-400/30 dark:bg-yellow-400/50 dark:text-yellow-100"
        } 
        ${
          status === "correct" &&
          "dark:border-green-300/25 dark:bg-green-400/50 dark:text-green-100"
        }
        ${status === "incorrect" && "dark:bg-neutral-800 dark:text-neutral-400"}
        flex aspect-square w-14 items-center justify-center rounded-2xl border-2 border-neutral-200 text-center font-bold dark:border-neutral-700/50`}
      >
        <span className="">{letter}</span>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      {range(5).map((num) => {
        return (
          <Cell
            key={num}
            letter={guess && guess[num]}
            status={guess && result[num].status}
          />
        );
      })}
    </div>
  );
}
