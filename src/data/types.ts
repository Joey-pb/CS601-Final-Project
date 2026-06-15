import {type JSX} from "react";

export interface ILink {
    text: string;
    href: string;
}

export interface IAddress {
    street: string;
    city: string;
    state: string;
    zip: string;
}

export interface IImage {
    type?: "card" | "hero"
    url: string,
    alt: string
}

export interface IHero {
    heading: string | (() => JSX.Element);
    text?: string;
    image: IImage;
    link?: ILink;
}

export interface IContent {
    type: "textSection"
    id: string;
    heading: string | (() => JSX.Element);
    text: string;
    image?: IImage;
    link?: ILink;
}

export interface ICard {
    id: string;
    heading: string;
    text?: string;
    image?: IImage;
    link?: string;
}

export interface ICardContainer {
    type: "cardContainer";
    id: string;
    cards: ICard[];
}

export type ISection = IContent | ICardContainer;

export interface IBasePage {
    hero: IHero;
    sections: ISection[];
}

