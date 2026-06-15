import type {ICard} from "../../data";
import Card from "./Card.tsx";
import style from "./CardContainer.module.css";


function CardContainer({cards}: { cards: ICard[] }) {
    return (
        <div className={style['card-container']}>
            {cards.map((card: ICard) => (
                <Card key={card.id} id={card.id} heading={card.heading} text={card.text} image={card.image}
                      link={card.link}
                />
            ))}
        </div>

    );
}

export default CardContainer;