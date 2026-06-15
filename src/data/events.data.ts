import type {IImage} from "./types.ts";

export interface IEvent {
    id: number;
    title: string;
    startDate: Date;
    endDate: Date;
    startTime: string;
    endTime: string;
    image: IImage;
    description: string;
}

export const eventsData: IEvent[] = [
    {
        id: 1,
        title: "Independence Day Celebration",
        startDate: new Date("2026-07-04"),
        endDate: new Date("2026-07-04"),
        startTime: "9:00 am",
        endTime: "5:00 pm",
        image: {
            url: "/images/rusty-watson-1WNLN0fagTA-unsplash.jpg",
            alt: "Militia firing muskets."
        },
        description: "In 1809, the Staunton Eagle recorded Independence Day as “ About 50 gentlemen and a number of ladies…partook of a plain Barbecue, where none but Domestic productions were eaten…In short, the whole afternoon was spend with a good humor, harmony, and joy, which the fourth of July ought always to inspire into the bosoms of Americans.”  \n" +
            "\n" +
            "Let the Frontier Culture Museum provide you and your family with an opportunity to find good humor and joy with our pay-what-you-will celebration of the 250th Anniversary of Independence Day! Starting at 9 am and lasting all day, we’ll be making Election Cake, games of all kinds, an audience participation required 19th century Civics Bee, and of course, a reading of the Declaration of Independence! \n" +
            "\n" +
            " \n" +
            "\n" +
            "How well do you remember your civics classes in school? Can you name the two presidents who died on July 4th, 1826, 50 years after signing the Declaration of Independence? Come test your knowledge in our 19th century Civics Bee in our 1840 schoolhouse! Audience participation is required in this reconstruction of a historical civics lesson. 11:30, 1:30, 2:30, 3:30 \n" +
            "\n" +
            "Did you know that the Declaration of Independence was not the first document expressing discontent with English rulers to be written by Virginians? Nathaniel Bacon wrote the Declaration of the People of Virginia on July 30, 1676 expressing discontent with Royal Governor William Berkeley, sparking Bacon’s Rebellion. Come here the Declaration of the People read on our English farm at 11 and 3.  \n" +
            "\n" +
            "Come hear the Declaration of Independence read from the porch of our patriotically festooned 1820’s house.  "
    },
    {
        id: 2,
        title: "Fall Homeschool Days",
        startDate: new Date("2026-09-09"),
        endDate: new Date("2026-09-11"),
        startTime: "9:00 am",
        endTime: "5:00 pm",
        image: {
            url: "/images/homeschool-days.jpg",
            alt: "Schoolmaster and students at a school."
        },
        description: "Come see all the activities we have planned for our Fall Homeschool Days! Homeschool days provide homeschoolers the chance to participate in the increased hands-on experience of a field trip. Try your hand at splitting a log to make fence rails or experience an early 19th century school lesson! Pre-registration is highly recommended, but tickets may also be purchased at the Visitor’s Center on the day of the event.  \n" +
            "\n" +
            "Tickets for the 2026 Fall Homeschool Days will go on sale in August. This event has special admission rates, and is included in the annual pass program!\n" +
            "\n" +
            "New for this year!\n" +
            "\n" +
            "The Virginia 250 Mobile Museum will be at the Frontier Culture Museum during our Fall Homeschool Days. The Mobile Museum will be placed in FCMV’s parking lot and is free to enter."
    }
]