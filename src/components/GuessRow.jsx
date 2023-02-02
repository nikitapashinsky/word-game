import { range } from "../utils";
import { checkGuess } from "../game-helpers";

export default function GuessRow({ guess, answer }) {
  const result = checkGuess(guess, answer);

  function Cell({ letter, status }) {
    return (
      <div
        className={`
        flex aspect-square w-14 items-center justify-center rounded-2xl border-2 border-neutral-200 text-center text-3xl font-bold dark:border-neutral-700/50
        ${
          status === "misplaced"
            ? "border-yellow-500 bg-yellow-400 text-yellow-900 dark:border-yellow-400/30 dark:bg-yellow-400/50 dark:text-yellow-100"
            : ""
        } 
        ${
          status === "correct"
            ? "border-green-500 bg-green-400 text-green-900 dark:border-green-300/25 dark:bg-green-400/50 dark:text-green-100"
            : ""
        }
        ${
          status === "incorrect"
            ? "border-neutral-400/50 bg-neutral-300 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-400"
            : ""
        }
        `}
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
