import type {IBasePage} from "./types.ts";

export const homePage: IBasePage = {
    hero: {
        heading: () => (
            <>
                They Built a <span className="accent-txt-gold">Nation.</span> <br/>
                Now, Step Into Their <span className="accent-txt-gold">World.</span>
            </>
        ),
        image: {
            url: "/images/home-hero.jpg",
            alt: "Yeoman at the English Farm."
        },
        // link: {
        //     text: "Begin Your Journey",
        //     href: "/visit"
        // }
    },

    sections: [
        {
            type: "textSection",
            id: "exhibits",
            heading: () => (
                <>
                    <span className="accent-txt-red">Walk</span> In Their Shoes
                </>
            ),
            text: "Across centuries and farms, explore homelands and the frontiers of America's past. Discover how diverse cultures shaped the American frontier.",
            image: {
                url: "/images/english-farm-harvest.jpg",
                alt: "18th-century woman walking in front of a German farm."
            },
            link: {
                text: "Explore Exhibits",
                href: "/exhibits",
            }
        },
        {
            type: "textSection",
            id: "podcast",
            heading: () => (
                <>
                    <span className="accent-txt-red">Listen</span> To Their Stories
                </>
            ),
            text: "Another way for you to enjoy the Frontier Culture Museum is with our podcast, Banjo Strings and Drinking Gourds: How American Culture Came to Be. Throughout this ongoing series, we’ll be covering historic topics such as medicine, architecture, and art. You’ll also get a behind-the-scenes look at a living history museum.",
            image: {
                url: "/images/klim-musalimov-fxHq67K11-E-unsplash.jpg",
                alt: "Podcast microphone.",
            },
            link: {
                text: "Listen To The Podcast",
                href: "/podcast",
            }
        },
        {
            type: "textSection",
            id: "programs",
            heading: () => (
                <>
                    Make Learning an <span className="accent-txt-red">Experience</span>
                </>
            ),
            text: "The Museum’s field trip and outreach education programs address the lives, choices, and environments of people represented by our exhibits. Programs include many hands-on activities related to farming, cooking, tools, animals, chores, and more.",
            image: {
                url: "/images/mael-balland-knQzMl3FKtg-unsplash.jpg",
                alt: "Scouts camping.",
            },
            link: {
                text: "Find Your Program",
                href: "/programs",
            }
        }
    ]
}