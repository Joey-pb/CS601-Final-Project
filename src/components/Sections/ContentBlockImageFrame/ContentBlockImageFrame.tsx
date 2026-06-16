import styles from './ContentBlockImageFrame.module.css'
import type {IContent} from "../../../data";
import {NavLink} from "react-router-dom";
import {isHeadingFunction} from "../../../utils";

function ContentBlockImageFrame(props: { section: IContent[] }) {
    /*
     * TODO: columnCount will exceed the number of frames available.
     *  Adjust frame assignment for cycling through the number of available frames.
     */

    return (

        <>
            {props.section.map((section, index) => (
                <div className={styles['content-section']} id={section.id}
                     key={section.id}>
                    <div className={`container ${styles['section-wrapper']}`}>
                        <div className={styles["section-col"]}>
                            <div className={styles.frame}
                                 style={{backgroundImage: `url(${import.meta.env.BASE_URL}svg/frames/frame-full-${index + 1}.svg)`}}>
                                {section.image &&
                                    <img className={styles["section-img"]} src={section.image.url}
                                         alt={section.image.alt}/>}
                            </div>
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

export default ContentBlockImageFrame;