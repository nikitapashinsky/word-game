import { nanoid } from "nanoid";
import { range } from "../utils";

function Cell({ guess, num }) {
  console.log(guess && "updated cell");
  return (
    <div className="flex aspect-square w-full items-center justify-center rounded-2xl p-2 text-center dark:bg-neutral-800">
      <span className="font-bold dark:text-neutral-200">
        {guess && guess[num]}
      </span>
    </div>
  );
}

export default function GuessRow({ guess }) {
  return (
    <div className="flex gap-4">
      {range(5).map((num) => {
        return <Cell key={num} guess={guess} num={num} />;
      })}
    </div>
  );
}
