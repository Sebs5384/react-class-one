function Card({ image, name, title }) {
  return (
    <div className="tarjeta">
      <img className="tarjeta-img" src={image}></img>
      <div className="tarjeta-data">
        <header className="tarjeta-data-header">{name}</header>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Card;
