import {useParams} from "react-router-dom";
import {exhibitsData} from "../../data/exhibits.data.ts";
import Hero from "../../components/Hero/Hero.tsx";
import styles from "./ExhibitDetailPage.module.css";
import ErrorPage from "../ErrorPage/ErrorPage.tsx";

// TODO: Convert exhibit to IContent

function ExhibitDetailPage() {
    const {exhibitId} = useParams();
    const exhibit = [...exhibitsData.oldWorld, ...exhibitsData.newWorld].find((exhibit) => exhibit.id === exhibitId);
    const exhibitHero = exhibit?.image.find(img => img.type === "hero");

    if (!exhibit || !exhibitHero) {
        return <ErrorPage/>;
    }

    return (
        <>
            <Hero heading={exhibit.name} image={exhibitHero}/>
            <div className={`${styles['exhibit-text']} container container-sm`}>
                <p>{exhibit.text}</p>
            </div>
        </>
    );
}

export default ExhibitDetailPage;