import { Component } from "react";
import Card from '../card/card.component';
import "./card-list.style.css"

class CardList extends Component{
    render(){
        const { monsters } = this.props;
        return <div className='card-list'>
        {monsters.map(item => {
            return(
            <Card monstersa = { item }/>
        );
        })}
        </div>
    }
}

export default CardList;