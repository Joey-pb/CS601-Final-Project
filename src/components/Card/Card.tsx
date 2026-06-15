import type {ICard} from "../../data";
import styles from "./Card.module.css";
import {Link} from "react-router-dom";

/**
 * TODO: Linking implementation needs to be fixed. ID shouldn't be used as a URL. If no link is provided, the card
 *  shouldn't act as a link.
 * */

function Card({id, heading, text, image, link}: ICard) {

    return (
        <Link to={link ? link : id}>
            <div className={styles.card} id={id}
                 style={image && {backgroundImage: `url(${image.url})`}}>
                <div className={styles["card-text"]}>
                    <h2>{heading}</h2>
                    {text && <p>{text}</p>}
                </div>
            </div>
        </Link>
    );
}

export default Card;