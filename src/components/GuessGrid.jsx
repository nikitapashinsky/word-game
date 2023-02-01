import { nanoid } from "nanoid";
import { range } from "../utils";
import GuessRow from "./GuessRow";

export default function GuessGrid({ guesses, answer }) {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      {range(6).map((num) => (
        <GuessRow key={nanoid()} guess={guesses[num]} answer={answer} />
      ))}
    </div>
  );
}
