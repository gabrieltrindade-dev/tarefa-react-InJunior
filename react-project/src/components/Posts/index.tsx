import React, { useState } from "react";
import styles from "./styles.module.css";
import Comentario from "../Coments";
import fotoGabriel from "../../assets/fotoadm.jpg";

export interface ComentarioData {
  id: number;
  foto: string;
  nome: string;
  hora: string;
  texto: string;
  initialLikes?: number;
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

    const dadosAdm = {
      foto: fotoGabriel,
      nome: "Gabriel Trindade"
    };
    
    const horaAtual = new Date().toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const novo: ComentarioData = {
      id: new Date().getTime(),
      foto: dadosAdm.foto,
      nome: dadosAdm.nome,
      hora: horaAtual, 
      texto,
      initialLikes: 0,
    };

    setComentarios((prev) => [...prev, novo]);
    setNovoComentario("");
  }

  function handleDelete(idParaExcluir: number) {
    setComentarios((prev) => prev.filter((comentario) => comentario.id !== idParaExcluir));
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
        <p id={styles.horaPost}>Publicado {hora}</p> 
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
        {comentarios.map((comentario) => (
          <Comentario
            key={comentario.id}
            foto={comentario.foto}
            nome={comentario.nome}
            hora={comentario.hora}
            texto={comentario.texto}
            initialLikes={comentario.initialLikes ?? 0}
            onExcluir={() => handleDelete(comentario.id)}
          />
        ))}
      </div>
    </div>
  );
}