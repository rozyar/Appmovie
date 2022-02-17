import axios from "axios";
import "./Coment.css"
export function Comentario(props){

//up

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
    <div className="commentbox" key={props.index}>
      <div class="conteudo">
       <h1>{props.userName}</h1> 
       <hr/>
       <p>{props.comentario}</p>
      <button type="button" onClick={handleDelete}>DELETAR POST</button>
      </div>
      </div>
  )

}

