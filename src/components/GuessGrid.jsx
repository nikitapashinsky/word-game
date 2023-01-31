import { nanoid } from "nanoid";
import { range } from "../utils";
import GuessRow from "./GuessRow";

export default function GuessGrid({ guesses }) {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      {range(6).map((num) => (
        <GuessRow key={nanoid()} guess={guesses[num]} />
      ))}
    </div>
  );
}
