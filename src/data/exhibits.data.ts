import type {IImage} from "./types.ts";

export interface IExhibit {
    id: string;
    name: string;
    description: string;
    image: IImage[];
    text: string;
}

export interface IExhibits {
    oldWorld: IExhibit[];
    newWorld: IExhibit[];
}

export const exhibitsData: IExhibits = {
    oldWorld: [
        {
            id: "west-africa",
            name: "West Africa",
            description: "Discover the traditions, agriculture, and daily life of the Igbo people of West Africa.",
            image: [
                {
                    type: "hero",
                    url: "/images/exhibits/west-africa.png",
                    alt: "The West African farm"
                },
                {
                    type: "card",
                    url: "/images/exhibits/cards/card-west-africa.png",
                    alt: "The West African farm",
                }
            ],
            text: "The West Africa exhibit represents an 18th-century Igbo farming village from present-day Nigeria. Long before European colonization, West Africa was home to thriving societies with rich traditions, extensive trade networks, and sophisticated agricultural practices. Visitors can explore how families cultivated crops, built homes, prepared food, and participated in community life. The exhibit also provides important context for understanding the experiences of the millions of Africans whose descendants would shape the cultural, agricultural, and economic development of North America."
        },
        {
            id: "english-farm",
            name: "England",
            description: "Step into a rural English farm and discover the roots of colonial settlement.",
            image: [
                {
                    type: "hero",
                    url: "/images/exhibits/english-farm.png",
                    alt: "The English farm"
                },
                {
                    type: "card",
                    url: "/images/exhibits/cards/card-english-farm.png",
                    alt: "The English farm"
                }
            ],
            text: "This exhibit recreates a 17th-century English farm, representing the communities from which many early colonists originated. Life revolved around agriculture, livestock, and seasonal labor, with families relying on traditional skills passed down through generations. As England expanded its colonial ambitions, many settlers brought these farming methods, building techniques, and cultural traditions across the Atlantic. Exploring this farm provides insight into the foundations of life that many immigrants carried with them to the American frontier."
        },
        {
            id: "irish-forge",
            name: "Irish Forge",
            description: "Experience the sights, sounds, and craftsmanship of an 18th-century blacksmith shop.",
            image: [
                {
                    type: "hero",
                    url: "/images/exhibits/irish-forge.png",
                    alt: "The Irish forge"
                },
                {
                    type: "card",
                    url: "/images/exhibits/cards/card-irish-forge.png",
                    alt: "The Irish forge"
                }
            ],
            text: "The Irish Forge highlights one of the most important trades in early rural communities. Blacksmiths produced and repaired tools, hardware, horseshoes, and countless everyday items essential to farm and village life. Located alongside the museum's Irish exhibit, the forge demonstrates the skills and knowledge craftsmen brought from Ulster to North America. Through live interpretation and demonstrations, visitors gain a deeper appreciation for the labor and craftsmanship that supported frontier settlement."
        },
        {
            id: "irish-farm",
            name: "Ireland",
            description: "Explore an Ulster farmstead and the experiences of the Scots-Irish people.",
            image: [
                {
                    type: "hero",
                    url: "/images/exhibits/irish-farm.png",
                    alt: "The Irish farm"
                },
                {
                    type: "card",
                    url: "/images/exhibits/cards/card-irish-farm.png",
                    alt: "The Irish farm"
                }
            ],
            text: "Representing an 18th-century farm in Ulster, this exhibit tells the story of the Scots-Irish communities whose migration helped shape the American frontier. Families worked small farms, raised livestock, and relied on a combination of agriculture and skilled trades to survive. Economic challenges, political tensions, and limited opportunities encouraged many to leave Ireland for the colonies. Their traditions, values, and frontier skills became a defining influence throughout the Shenandoah Valley and beyond."
        },
        {
            id: "german-farm",
            name: "Germany",
            description: "Discover the agricultural traditions and culture of the German-speaking Palatinate.",
            image: [
                {
                    type: "hero",
                    url: "/images/exhibits/german-farm.png",
                    alt: "The German farm"
                },
                {
                    type: "card",
                    url: "/images/exhibits/cards/card-german-farm.png",
                    alt: "The German farm"
                }
            ],
            text: "The German exhibit recreates a mid-18th-century farm from the Rhineland-Palatinate region. German immigrants brought advanced farming techniques, distinctive architecture, and strong community traditions that influenced life throughout colonial America. Visitors can explore historic buildings, gardens, livestock, and household spaces while learning about the challenges and opportunities faced by families who crossed the Atlantic in search of a better future. Their contributions remain visible throughout the Shenandoah Valley today."
        }
    ],
    newWorld: [
        {
            id: "native-america",
            name: "Native America",
            description: "Learn how Indigenous peoples lived, worked, and thrived long before European settlement.",
            image: [
                {
                    type: "hero",
                    url: "/images/exhibits/native-america.png",
                    alt: "The Native American site"
                },
                {
                    type: "card",
                    url: "/images/exhibits/cards/card-native-america.png",
                    alt: "The Native American site"
                }
            ],
            text: "The Native American exhibit explores the lifeways of the Indigenous peoples who inhabited Virginia for thousands of years before European arrival. Through reconstructed structures, gardens, and interpretive programming, visitors learn how Native communities farmed, hunted, traded, and maintained deep connections to the land. The exhibit highlights the knowledge, resilience, and cultural traditions that shaped the region's history and continue to influence communities today."
        },
        {
            id: "1760s",
            name: "1760s",
            description: "Experience life on Virginia's frontier during the years leading up to the American Revolution.",
            image: [{
                type: "hero",
                url: "/images/exhibits/1760s.png",
                alt: "The 1760s cabin"
            },
                {
                    type: "card",
                    url: "/images/exhibits/cards/card-1760s.png",
                    alt: "The 1760s cabin"
                }
            ],
            text: "The 1760s settlement represents the earliest stages of frontier life in the Shenandoah Valley. Settlers adapted traditions brought from Europe while facing new environmental challenges and opportunities. Visitors can explore cabins, gardens, livestock areas, and workspaces that demonstrate how families established homes and communities on the edge of colonial settlement. The exhibit reveals the hardships, resourcefulness, and determination required to build a life on the frontier."
        },
        {
            id: "1820s",
            name: "1820s",
            description: "See how the American frontier evolved during a period of growth and expansion.",
            image: [
                {
                    type: "hero",
                    url: "/images/exhibits/1820s.png",
                    alt: "The 1820s farm"
                },
                {
                    type: "card",
                    url: "/images/exhibits/cards/card-1820s.png",
                    alt: "The 1820s farm"
                }
            ],
            text: "By the 1820s, frontier communities had become more established and prosperous. This exhibit explores a growing Valley farm where improvements in agriculture, transportation, and trade connected rural families to larger markets. Visitors can discover how changing technologies and economic opportunities transformed everyday life while many traditional practices remained an essential part of the community."
        },
        {
            id: "1850s",
            name: "1850s",
            description: "Explore a thriving farm during the decades before the Civil War.",
            image: [{
                type: "hero",
                url: "/images/exhibits/1850s.png",
                alt: "The 1850s farm"
            },
                {
                    type: "card",
                    url: "/images/exhibits/cards/card-1850s.png",
                    alt: "The 1850s farm"
                }
            ],
            text: "The 1850s exhibit portrays life during a period of significant change in American history. Improved transportation, expanding markets, and new technologies transformed agriculture and rural communities throughout the Shenandoah Valley. Visitors can examine how families balanced traditional farming practices with emerging innovations while navigating the social, economic, and political changes that would soon reshape the nation."
        }
    ]
};