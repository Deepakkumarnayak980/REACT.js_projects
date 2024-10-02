import Icon from '../Icon/icons';
import './Card.css'
// Card Component
function Card({ player,onPlay ,index }) {
    let icon = <Icon />;

    if (player === 'X') {
        icon = <Icon name="cross" />;
    } else if (player === 'O') {
        icon = <Icon name="circle" />;
    }

    return (
        <div className="card" onClick={()=>onPlay(index)}>
            {icon}
        </div>
    );
}

export default Card;