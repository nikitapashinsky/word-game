import { nanoid } from "nanoid";
export default function GuessGrid({ guesses }) {
  return (
    <div>
      {guesses.map((guess, index) => (
        <p key={nanoid()} className="font-medium tracking-widest">
          {guess}
        </p>
      ))}
    </div>
  );
}
