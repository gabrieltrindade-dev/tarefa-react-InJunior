import React, { useState } from "react";
import styles from "./styles.module.css";
import Comentario from "../Coments";

export interface ComentarioData {
  foto: string;
  nome: string;
  hora: string;
  texto: string;
}

interface PostsProps {
  foto: string;
  nome: string;
  cargo: string;
  paragrafo: string;
  hora: string;
  comentariosIniciais?: ComentarioData[]; 
}

export default function Posts({
  foto,
  nome,
  cargo,
  paragrafo,
  hora,
  comentariosIniciais = []
}: PostsProps) {

  const [comentarios, setComentarios] = useState<ComentarioData[]>(
    () => comentariosIniciais
  );

  const [novoComentario, setNovoComentario] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const texto = novoComentario.trim();
    if (!texto) return;

    const novo: ComentarioData = {
      foto, 
      nome, 
      hora: "agora mesmo",
      texto
    };

    setComentarios((prev) => [...prev, novo]);
    setNovoComentario("");
  }

  function handleDelete(index: number) {
    setComentarios((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className={styles.post}>
      <div className={styles.identificacao}>
        <div className={styles.perfil}>
          <img src={foto} alt="Foto de perfil" />
          <div className={styles.textoPerfil}>
            <h3>{nome}</h3>
            <p>{cargo}</p>
          </div>
        </div>
        <p id={styles.horaPost}>Publicado há {hora}</p>
      </div>

      <div className={styles.textoPost}>
        <p>{paragrafo}</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <h3>Deixe seu feedback</h3>
        <textarea
          placeholder="Escreva um comentário..."
          value={novoComentario}
          onChange={(e) => setNovoComentario(e.target.value)}
        />
        <button type="submit">Comentar</button>
      </form>

      <div className={styles.listaComentarios}>
        {comentarios.map((comentario, index) => (
          <Comentario
            key={index} 
            foto={comentario.foto}
            nome={comentario.nome}
            hora={comentario.hora}
            texto={comentario.texto}
            onExcluir={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
}
