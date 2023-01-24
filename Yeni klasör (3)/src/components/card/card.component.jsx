import { Component } from 'react';
import './card.style.css';

class Card extends Component {
    render() {
        const {name,image_link} = this.props.monster;
            return (
                <div className='card-container'>
                    <img src={image_link} alt={`monster ${name}`} />
                    <h2>{name}</h2>
                </div>
            );
    }
}

export default Card;