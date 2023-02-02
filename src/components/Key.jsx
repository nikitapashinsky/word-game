import { keyboard } from "../data";

export default function Key({ kKey }) {
  return (
    <button className="flex h-14 w-10 items-center justify-center rounded-lg bg-neutral-100 text-lg font-medium">
      {kKey}
    </button>
  );
}
