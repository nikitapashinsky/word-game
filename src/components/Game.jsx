import { useState } from "react";
import { sample } from "../utils";
import { validWords } from "../data";

import GuessInput from "./GuessInput";

export default function Game() {
  const [answer, setAnswer] = useState(sample(validWords).toUpperCase());

  console.info({ answer });

  return (
    <div className="text-zinc-900 dark:text-zinc-50">
      <GuessInput />
    </div>
  );
}
