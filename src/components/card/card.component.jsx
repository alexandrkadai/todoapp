import { Component } from "react";
import './card.style.css';

class Card extends Component{
    render(){
        const { id, name, email } = this.props.monstersa;

        console.log(id);
        return (
            <div className='card-container' key={id}>
            <img alt={`monster ${name}`}
              src={`https://robohash.org/${id+3}?set2&size=180x180`} 
              />
            <h2>{name}</h2>
            <p>{email}</p>
            </div>
        )
    }
}

export default Card;