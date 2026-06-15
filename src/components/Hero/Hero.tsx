import {type IHero} from "../../data";
import styles from "./Hero.module.css";
import {isHeadingFunction} from "../../utils";
import {Link} from "react-router-dom";

function Hero({heading, text, link, image}: IHero) {
    return (
        <div style={{backgroundImage: `url(${image.url})`}} className={styles.hero}>
            <div className={styles["hero-container"]}>
                <div className={styles["hero-text"]}>
                    <div className={styles["text-background"]}>
                        <h2>{isHeadingFunction(heading) ? heading() : heading}</h2>
                        {text && <p>{text}</p>}
                        {link && <Link to={link.href} className={styles.btn}>{link.text}</Link>}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Hero;