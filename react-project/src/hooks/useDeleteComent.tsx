export default function useDeleteComment(setComentarios: React.Dispatch<React.SetStateAction<any[]>>) {
  function deletarComentario(index: number) {
    setComentarios((prev) => prev.filter((_, i) => i !== index));
  }

  return { deletarComentario };
}