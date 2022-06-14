import Card from '../card/card.component';
import "./card-list.style.css"

const CardList = ({monsters}) => (
             <div className='card-list'>
            {monsters.map((item) => {
                return <Card key={item.id} monstersa = { item }/>;
            })}
            </div>
);

// class CardList extends Component{
//     render(){
//         const { monsters } = this.props;
//         return <div className='card-list'>
//         {monsters.map(item => {
//             return(
//             <Card key={item.id} monstersa = { item }/>
//         );
//         })}
//         </div>
//     }
// }

export default CardList;