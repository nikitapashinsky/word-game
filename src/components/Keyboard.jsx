import { keyboard } from "../data";
import Key from "./Key";

export default function Keyboard() {
  console.log(keyboard.top);
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-2">
        {keyboard.top.map((key, index) => (
          <Key key={index} kKey={key} />
        ))}
      </div>
      <div className="flex gap-2">
        {keyboard.middle.map((key, index) => (
          <Key key={index} kKey={key} />
        ))}
      </div>
      <div className="flex gap-2 self-stretch">
        <div className="flex grow items-center justify-center rounded-lg bg-neutral-100 text-lg font-medium">
          Del
        </div>
        {keyboard.bottom.map((key, index) => (
          <Key key={index} kKey={key} />
        ))}
        <div className="flex grow items-center justify-center rounded-lg bg-neutral-100 text-lg font-medium">
          Enter
        </div>
      </div>
    </div>
  );
}
