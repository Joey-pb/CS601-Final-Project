export interface IArticle {
    id: string;
    heading: string;
    text: string;
    image?: {
        url: string;
        alt: string;
    }
}

export interface IArticlesData {
    [key: string]: IArticle[];
}

export const articlesData: IArticlesData = {
    programs: [
        {
            id: "scouts",
            heading: "Scouts Programs",
            text: "The Scouts program is designed to introduce young people to the world of farming, hunting, and craftsmanship. It offers a hands-on experience that encourages children to explore the natural world and learn about the importance of community. The program is designed to be accessible to all ages and offers a variety of activities and challenges to help children develop their skills and interests.",
        },
        {
            id: "john-lewis",
            heading: "John Lewis Society",
            text: "The John Lewis Society is a junior interpretive volunteer program at the Frontier Culture Museum of Virginia. The program is primarily suited for teens with an enthusiastic interest in history. Although there are no academic criteria for the participants, we do require a commitment to learning the material, the willingness to communicate and interact with Museum visitors. Our goal of the society is to provide a collaborative learning and working experience between the student and the Museum staff. Through interpretive tasks on the museum’s historic farms, members will demonstrate the lifestyle, culture, day to day operations of the Museum, and accurately present historically relevant information. The John Lewis Society (JLS) program generally lasts from April through December. We begin the season with a training session followed by one-on-one mentoring with Museum staff.",
        }
    ],
    podcast: [
        {
            id: "podcast",
            heading: "Podcast",
            text: "The Frontier Culture Museum Podcast is a weekly podcast that explores the history, culture, and life of the Virginia Frontier. The podcast features interviews with museum staff, guests, and visitors, as well as discussions on current events and trends in the Virginia Frontier. The podcast is available on Apple Podcasts, Google Podcasts, and Spotify.",
        }
    ]
}


