import './card.style.css';

const Card = ({ monstersa: { id, email, name } }) => (
  <div className="card-container">
    <img alt={`monster ${name}`} src={`https://robohash.org/${id + 3}?set2&size=180x180`} />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);

export default Card;
