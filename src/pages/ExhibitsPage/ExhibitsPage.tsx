import {exhibitsPageData} from "../../data/exhibitspage.data.tsx";
import Hero from "../../components/Hero/Hero.tsx";
import type {ICard, ICardContainer, ISection} from "../../data";
import CardContainer from "../../components/Card/CardContainer.tsx";
import styles from "./ExhibitsPage.module.css";

const {hero, sections} = exhibitsPageData;
const oldWorldCards = sectionToCards(sections, "old-world-cards");
const newWorldCards = sectionToCards(sections, "new-world-cards");


function sectionToCards(sections: ISection[], id: string): ICard[] {
    return sections.find((section): section is ICardContainer =>
        section.type === "cardContainer" && section.id === id)?.cards as ICard[] ?? [];
}

function ExhibitsPage() {


    return (
        <>
            <Hero heading={hero.heading} text={hero.text} image={hero.image}/>
            <h2 className={styles['section-heading']}>
                <div className={styles.frame}>The Old World</div>
            </h2>
            <CardContainer cards={oldWorldCards}/>
            <h2 className={styles['section-heading']}>
                <div className={styles.frame}>The New World</div>
            </h2>
            <CardContainer cards={newWorldCards}/>
        </>
    );
}

export default ExhibitsPage;