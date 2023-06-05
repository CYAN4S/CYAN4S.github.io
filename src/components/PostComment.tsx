import { Show, createEffect, createResource, createSignal } from "solid-js";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "../supabase";
import Cookies from "js-cookie";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_KEY;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

type Props = { slug: string };

const checkCookieHasValue = (value: string, key: "visit" | "love") => {
  const origin = Cookies.get(key);

  if (!origin) return false;
  return origin.split("n").includes(value);
};

const addCookie = (value: string, key: "visit" | "love") => {
  const origin = Cookies.get(key);

  if (!origin) {
    Cookies.set(key, value);
    return;
  }

  Cookies.set(key, `${origin}n${value}`);
};

const getDefault = async (slug: string) => {
  const { data, error } = await supabase
    .from("posts")
    .select("id, visit, love")
    .eq("slug", slug);

  if (error) return null;

  let result = data[0];
  if (!checkCookieHasValue(`${result.id}`, "visit")) {
    await supabase.rpc("increase_visit", { id: result.id });
    addCookie(`${result.id}`, "visit");
    result.visit += 1;
  }

  return result;
};

export default function PostComment(props: Props) {
  const [fetched, { mutate }] = createResource(props.slug, getDefault);

  const [inLove, setInLove] = createSignal(
    checkCookieHasValue(`${fetched()?.id}`, "love")
  );

  createEffect(() => {
    setInLove(checkCookieHasValue(`${fetched()?.id}`, "love"));
  });

  const views = () => fetched()?.visit;
  const loves = () => fetched()?.love;

  const onLoveClick = async () => {
    setInLove(checkCookieHasValue(`${fetched()?.id}`, "love"));
    if (inLove()) return;

    await supabase.rpc("increase_love", { id: fetched()?.id! });

    addCookie(`${fetched()?.id!}`, "love");
    mutate((x) => {
      if (!x) return null;
      return { ...x, love: x.love + 1 };
    });

  };

  return (
    <Show when={!fetched.loading} fallback={<p>정보를 불러오고 있습니다.</p>}>
      <div class="counter">
        <div class="visit">
          <svg style={`fill: #aaa`} width={`24px`} height={`24px`}>
            <use href={`/icon.svg#visit`}></use>
          </svg>
          {views()}
        </div>
        <div class={`love ${inLove() ? "in-love" : ""}`} onClick={onLoveClick}>
          <svg
            style={`fill: ${inLove() ? "#fff" : "#aaa"}`}
            width={`24px`}
            height={`24px`}
          >
            <use href={`/icon.svg#love`}></use>
          </svg>
          {loves()}
        </div>
      </div>
    </Show>
  );
}
