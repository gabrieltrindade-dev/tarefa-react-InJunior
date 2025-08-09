import { useState } from "react";

export interface ComentarioData {
  foto: string;
  nome: string;
  hora: string;
  texto: string;
}

export default function useComentarios() {
  const [comentarios, setComentarios] = useState<ComentarioData[]>([]);

  function adicionarComentario(comentario: ComentarioData) {
    if (comentario.texto.trim() === "") return;
    setComentarios((prev) => [...prev, comentario]);
  }

  function removerComentario(index: number) {
    setComentarios((prev) => prev.filter((_, i) => i !== index));
  }

  return {
    comentarios,
    adicionarComentario,
    removerComentario
  };
}

