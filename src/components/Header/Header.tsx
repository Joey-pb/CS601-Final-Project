import {useEffect, useRef, useState} from "react";
import {type ILink, type IMenuCategory, menuData} from "../../data"
import styles from "./Header.module.css"
import {Link} from "react-router-dom";

// TODO: Close menu button / close menu on page click

function Header() {
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState<IMenuCategory | null>(null);
    const headerRef = useRef<HTMLElement>(null);

    const closeMenu = () => {
        setActiveTab(null);
        setActiveCategory(null);
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
                closeMenu();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleTabClick = (tabKey: keyof typeof menuData) => {
        if (activeTab === tabKey) {
            setActiveTab(null);
            setActiveCategory(null);
        } else {
            setActiveTab(tabKey);
            setActiveCategory(menuData[tabKey].categories[0] || null);
        }
    };


    return (
        <header ref={headerRef} className={`${styles["navbar-container"]} ${activeTab ? styles["menu-open"] : ""}`}>
            {/* Navigation Bar */}
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Link to="/">Frontier Culture Museum</Link>
                </div>
                <div className={styles["nav-buttons"]}>
                    {Object.keys(menuData).map((key: string) => (
                        <div className={styles["button-container"]} key={key}>
                            <button

                                className={`${styles['nav-button']} ${activeTab === key ? styles.active : ""}`}
                                onClick={() => handleTabClick(key as keyof typeof menuData)}
                            >
                                {key}
                            </button>
                            <img
                                className={`${styles.underline} ${activeTab === key ? styles.visible : styles["not-visible"]}`}
                                src={`${import.meta.env.BASE_URL}svg/underline.svg`} alt="Underline"/>
                        </div>
                    ))}
                </div>
            </nav>

            {/* Menu Overlay */}
            {activeTab && (
                <div className={styles["mega-menu"]}>
                    <div className={styles["mega-menu-content"]}>
                        {/* Column 1: Description */}
                        <div className={`${styles['menu-column']} ${styles['col-description']}`}>
                            <h3>{menuData[activeTab as keyof typeof menuData].title}</h3>
                            <p>{menuData[activeTab as keyof typeof menuData].description}</p>
                        </div>

                        {/* Column 2: Categories */}
                        <div className={`${styles['menu-column']} ${styles['col-categories']}`}>
                            <ul>
                                {menuData[activeTab as keyof typeof menuData].categories.map((category: IMenuCategory) => (
                                    <li key={category.id}>
                                        <button
                                            className={`${styles['category-btn']} ${activeCategory?.id === category.id ? styles.selected : ''}`}
                                            onClick={() => setActiveCategory(category)}>
                                            {category.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Links*/}
                        <div className={`${styles['menu-column']} ${styles['col-links']}`}>
                            <ul>
                                {activeCategory?.links.map((link: ILink) => (
                                    <li key={link.text}>
                                        <Link to={link.href} className={styles["menu-link"]} onClick={closeMenu}>
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;