import { createSignal } from "solid-js";

type Props = {
  slug: string
};

export default function Reaction(props: Props) {
  const [count, setCount] = createSignal(0);

  setInterval(() => setCount((prev) => prev + 1), 1000);

  return (
    <div>
      <p>Count: {count()}</p>
      <p>{props.slug}</p>
    </div>
  );
}
