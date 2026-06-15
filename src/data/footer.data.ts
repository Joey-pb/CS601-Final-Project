import type {IAddress, ILink} from "./types.ts";

export interface FooterAbout {
    heading: string;
    text?: string;
    links: ILink[];
}

export interface FooterContact {
    heading: string;
    text?: string;
    address: IAddress;
    phone: string;
    links: ILink[];
}

export interface FooterConnect {
    heading: string;
    text?: string;
    links: ILink[];
}

export interface IFooter {
    about: FooterAbout;
    contact: FooterContact;
    connect: FooterConnect;
}

export const footerData: IFooter = {
    about: {
        heading: "About the Frontier Culture Museum",
        links: [
            {
                text: "Our Story",
                href: "/about"
            },
            {
                text: "American Frontier Foundation",
                href: "/foundation"
            },
            {
                text: "Careers",
                href: "/careers"
            },
            {
                text: "Volunteer",
                href: "/volunteer"
            }
        ]
    },
    contact: {
        heading: "Contact Us",
        address: {
            street: "1290 Richmond Road",
            city: "Staunton",
            state: "VA",
            zip: "24401"
        },
        phone: "(540)332-7850",
        links: [
            {
                text: "Send Us a Message",
                href: "/contact"
            }
        ]
    },
    // TODO: Add social media badges
    connect: {
        heading: "Connect With Us",
        text: "Stay informed about our latest events and news.",
        links: [
            {
                text: "Subscribe to Our Newsletter",
                href: "/newsletter"
            },
            {
                text: "Connect With Us on Facebook",
                href: "https://www.facebook.com/FrontierCultureMuseum/"
            },
        ]
    }
}