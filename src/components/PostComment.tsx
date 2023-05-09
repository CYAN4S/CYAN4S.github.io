import { createResource, createSignal } from "solid-js";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://loovjzqsvrdihrsklwcm.supabase.co";
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

type Props = {
  slug: string;
};

async function fetchViews(slug: string) {
  let visited = true;

  if (!localStorage.getItem(slug)) {
    visited = false;
    localStorage.setItem(slug, "visited");
  }

  let { data, error } = await supabase.rpc("visit", {
    p_ed: visited,
    p_slug: slug,
  });

  if (error) return null;
  else return data;
}

export default function PostComment(props: Props) {
  const [views, setViews] = createSignal(0);
  const [loves, setLoves] = createSignal(0);
  const [data] = createResource(props.slug, fetchViews)

  return (
    <>
      <div style="text-align: right; font-size: 1rem; font-weight: 800; color: gray;">조회수 {data()}</div>
    </>
  );
}

function LoveButton(loves: number) {
  return <button class="love">♥︎ {loves}</button>;
}
