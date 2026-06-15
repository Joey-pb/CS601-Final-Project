import Hero from "../../components/Hero/Hero.tsx";

import {homePage} from "../../data/homepage.data.tsx";
import Events from "../../components/Events/Events.tsx";
import ContentBlockImageFrame from "../../components/Sections/ContentBlockImageFrame/ContentBlockImageFrame.tsx";
import type {IBasePage, IContent} from "../../data";


function LandingPage() {
    const {sections, hero} = homePage as IBasePage;
    const contentSections = sections.filter((s): s is IContent => s.type === "textSection");

    return (
        <>
            <Hero heading={hero.heading} link={hero.link} image={hero.image}/>
            {/*TODO: Implement Events Page*/}
            <Events/>
            <ContentBlockImageFrame section={contentSections}/>
        </>
    );
}

export default LandingPage;