import styles from "./Events.module.css";
import {eventsData} from "../../data";
import {toFormattedDate} from "../../utils";

function Events() {
    return (
        <div className={styles['events-container']}>
            {eventsData.map((event) => (
                <div className={styles['event-card']} style={{backgroundImage: `url(${event.image.url})`}}
                     key={event.id}>
                    <div className={styles['event-text-background']}>
                        <div className={styles['event-text']}>
                            <h3 className={styles['event-title']}>{event.title}</h3>
                            <p className={styles['event-date']}>
                                {event.startDate.getTime() === event.endDate.getTime() ? `${toFormattedDate(event.startDate)}` : `${toFormattedDate(event.startDate)} - ${toFormattedDate(event.endDate)}`}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Events;