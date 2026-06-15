import type {IBasePage, ICard} from "./types.ts";
import {exhibitsData, type IExhibit} from "./exhibits.data.ts";

const {oldWorld, newWorld} = exhibitsData;
const oldWorldCards = oldWorld.map(exhibit => exhibitToCard(exhibit));
const newWorldCards = newWorld.map(exhibit => exhibitToCard(exhibit));

function exhibitToCard(exhibit: IExhibit): ICard {
    return {
        id: exhibit.id,
        heading: exhibit.name,
        text: exhibit.description,
        image: exhibit.image.find(img => img.type === "card"),
        link: `/exhibits/${exhibit.id}`
    }
}

export const exhibitsPageData: IBasePage = {
    hero: {
        heading: "Explore The Exhibits.",
        text: "Step into the stories that shaped America. Explore immersive, outdoor exhibits that trace the journeys of people from England, Ireland, Germany, West Africa, and Indigenous communities to the American frontier. From working farms and historic homes to a blacksmith forge, schoolhouse, and church, each exhibit brings the past to life through authentic buildings, living history demonstrations, and hands-on experiences that reveal how diverse cultures blended to create a distinctive American identity.",
        image: {
            url: "/images/new-world-exhibits.png",
            alt: "18th-century German peasant farm."
        },
    },
    sections: [
        {
            type: "cardContainer",
            id: "old-world-cards",
            cards: [
                ...oldWorldCards
            ]
        },
        {
            type: "cardContainer",
            id: "new-world-cards",
            cards: [
                ...newWorldCards
            ]
        }
    ]
}