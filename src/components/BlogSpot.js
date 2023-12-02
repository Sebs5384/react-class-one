import { Tarjeta } from '../components/Tarjeta.js';

export function BlogPost(props) {
  return (
    <article className="post">
      <header className="post-header">
        <h2 className="post-title">{props.titulo}</h2>
        <Tarjeta nombre={props.autor.nombre} titulo={props.autor.profesion} imagen={props.autor.imagen} />
      </header>
      {props.parrafos.split('\n').map((parrafo, i) => (
        <p className="post-paragraph" key={i}>
          {parrafo}
        </p>
      ))}
    </article>
  );
}
