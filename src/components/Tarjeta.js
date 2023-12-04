export function Tarjeta(props) {
  return (
    <div className="tarjeta">
      <img className="tarjeta-img" src={props.imagen} alt="Foto de perfil"></img>
      <div className="tarjeta-data">
        <header className="tarjeta-data-header">{props.nombre}</header>
        <span>{props.profesion}</span>
      </div>
    </div>
  );
}