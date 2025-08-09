import { useState } from "react";

export default function useLike() {
  const [likes, setLikes] = useState(0);
  const [curtido, setCurtido] = useState(false);

  function toggleLike() {
    if (curtido) {
      setLikes((prev) => prev - 1);
      setCurtido(false);
    } else {
      setLikes((prev) => prev + 1);
      setCurtido(true);
    }
  }

  return { likes, curtido, toggleLike };
}
