import './card.style.css';

const Card = ({monstersa}) => (
    
            <div className='card-container'>
            <img alt={`monster ${monstersa.name}`}
              src={`https://robohash.org/${monstersa.id+3}?set2&size=180x180`} 
              />
            <h2>{monstersa.name}</h2>
            <p>{monstersa.email}</p>
            </div>
        )
    

export default Card;