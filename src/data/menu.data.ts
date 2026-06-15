// TODO: Links need to use ILink type and URL

import type {ILink} from "./types.ts";

export interface IMenuCategory {
    id: string;
    name: string;
    links: ILink[];
}

export interface IMenuTabItem {
    title: string;
    description: string;
    categories: IMenuCategory[];
}

export interface MenuDataStructure {
    [key: string]: IMenuTabItem;
}

// TODO: Links should pull from exhibitsData instead of hard-coding

export const menuData = {
    discover: {
        title: "Discover America's Frontiers",
        description: "Discover the people, places, and cultures that shaped the American frontier.",
        categories: [
            {
                id: "old_world",
                name: "Old World",
                links: [
                    {
                        text: "West Africa",
                        href: "/exhibits/west-africa"
                    },
                    {
                        text: "England",
                        href: "/exhibits/english-farm"
                    },
                    {
                        text: "Irish Forge",
                        href: "/exhibits/irish-forge"
                    },
                    {
                        text: "Ireland",
                        href: "/exhibits/irish-farm"
                    },
                    {
                        text: "Germany",
                        href: "/exhibits/german-farm"
                    }
                ]
            },
            {
                id: "new_world",
                name: "New World",
                links: [
                    {
                        text: "American Indians",
                        href: "/exhibits/native-america"
                    },
                    {
                        text: "1760s",
                        href: "/exhibits/1760s"
                    },
                    {
                        text: "1820s",
                        href: "/exhibits/1820s"
                    },
                    {
                        text: "1850s",
                        href: "/exhibits/1850s"
                    },
                    // {
                    //     text: "Schoolhouse",
                    //     href: "/schoolhouse"
                    // },
                    // {
                    //     text: "African-American Church",
                    //     href: "/church"
                    // }
                ]
            },
            {
                id: "media",
                name: "Media",
                links: [
                    {
                        text: "Podcast: Banjo Strings and Drinking Gourds",
                        href: "/podcast"
                    },
                    // {
                    //     text: "Lecture Series",
                    //     href: "/lecture-series"
                    // }
                ]
            },
            {
                id: "programs",
                name: "Programs",
                links: [
                    {
                        text: "Scouts Programs",
                        href: "/programs"
                    },
                    {
                        text: "John Lewis Society",
                        href: "/programs"
                    }
                ]
            }
        ]
    },
    visit: {
        title: "Begin Your American Journey",
        description: "Step into historic farms and the lives of early Americans.",
        categories: [
            {
                id: "plan",
                name: "Plan Your Visit",
                links: [
                    {
                        text: "Tickets",
                        href: "/tickets"
                    },
                    {
                        text: "Accessibility",
                        href: "/accessibility"
                    },
                    {
                        text: "Directions",
                        href: "/directions"
                    }
                ]
            },
        ]
    },
    stay: {
        title: "Experience the Valley",
        description: "Discover accommodations, destinations, and the Shenandoah Valley.",
        categories: [
            {
                id: "hotels",
                name: "Hotels",
                links: [
                    {
                        text: "Hotels",
                        href: "/hotels"
                    }
                ]
            },
            {
                id: "destinations",
                name: "Destinations",
                links: [
                    {
                        text: "Destinations",
                        href: "/destinations"
                    }
                ]
            },
            {
                id: "dining",
                name: "Dining",
                links: [
                    {
                        text: "Dining",
                        href: "/dining"
                    }
                ]
            }
        ]
    }
}