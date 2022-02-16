import axios from "axios";
export function Comentario(props){

  console.log(props.index+props.userName+props.comentario+props.id)

  async function handleDelete() {
    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/apiDICKvigarista/${props.id}`
      );
      props.setPosted(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <li key={props.index}>O usuário {props.userName} comentou:{props.comentario} <button type="button" onClick={handleDelete}>DELETAR POST</button></li>
  )

}

