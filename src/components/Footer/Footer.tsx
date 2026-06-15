import styles from "./Footer.module.css";
import {footerData, type IFooter, type ILink} from "../../data";
import {Link} from "react-router-dom";

function Footer() {

    return (
        <footer>
            <div className={styles["footer-container"]}>{Object.entries(footerData as IFooter).map(([key, section]) => (
                <div key={key} className={styles["footer-section"]}>
                    <h3 className={styles["section-heading"]}>{section.heading}</h3>
                    {section.text && <p className={styles["section-text"]}>{section.text}</p>}
                    {section.address && (
                        <div className={styles.address}>
                            <p>{section.address.street}</p>
                            <p>{section.address.city}, {section.address.state} {section.address.zip}</p>
                            <p>{section.phone}</p>
                        </div>
                    )}
                    {section.links && (
                        <ul className={styles["section-links"]}>
                            {section.links.map((link: ILink) => (
                                <li key={link.href}>
                                    {link.href.startsWith("http") ? (
                                        <a href={link.href} target="_blank" rel="noopener noreferrer"
                                           className={link.href === "/newsletter" ? styles.btn : undefined}>{link.text}</a>
                                    ) : (
                                        <Link to={link.href}
                                              className={link.href === "/newsletter" ? styles.btn : undefined}>{link.text}</Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
            </div>
            <div className={styles.legal}>
                <p>&copy; {new Date().getFullYear()} Joseph Bassett</p>
                <p>This website is a final project for CS601 and is not an official site of the <a
                    href="https://frontiermuseum.org" target="_blank" rel="noopener noreferrer">Frontier Culture Museum of Virginia</a>.</p>
                <p>Image Credit: Frontier Culture Museum of Virginia; Unsplash</p>
                <p>Content Credit: Frontier Culture Museum of Virginia</p>
            </div>
        </footer>
    );
}

export default Footer;