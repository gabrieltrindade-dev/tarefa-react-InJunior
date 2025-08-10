import { useState } from "react";

export default function useLike(initialLikes = 0) {
  const [likes, setLikes] = useState(initialLikes);
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