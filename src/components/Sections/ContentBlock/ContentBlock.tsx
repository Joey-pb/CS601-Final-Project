import styles from "./ContentBlock.module.css";
import type {IContent} from "../../../data";
import {NavLink} from "react-router-dom";
import {isHeadingFunction} from "../../../utils";

function ContentBlock(props: { section: IContent[] }) {

    return (

        <>
            {props.section.map((section) => (
                <div className={styles['content-section']} id={section.id}
                     key={section.id}>
                    <div className={`container ${styles['section-wrapper']}`}>
                        <div className={styles["section-col"]}>
                            {section.image &&
                                <img className={styles["section-img"]} src={section.image.url}
                                     alt={section.image.alt}/>}
                        </div>
                        <div className={styles["section-col"]}>
                            <h2
                                className={styles["section-heading"]}>{isHeadingFunction(section.heading) ? section.heading() : section.heading}
                            </h2>
                            <p className={styles["section-text"]}>{section.text}</p>
                            {section.link && (
                                <NavLink to={section.link.href} className={styles.btn}>{section.link.text}</NavLink>
                            )}
                        </div>

                    </div>
                </div>
            ))}
        </>
    );
}

export default ContentBlock;