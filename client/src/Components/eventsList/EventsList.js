import React from 'react'
import EventCard from '../eventCard/eventCard';
import './eventsList.css'

function EventsList() {
    const [ events, setEvents ] = React.useState([]);

    React.useEffect(() => {
        let url = 'http://localhost:3333/events';

        fetch(url)
        .then(response => response.json())
        .then(data => {
            setEvents(data.payload)
        })
    }, [])
    return (
        <div className ='eventsList'>
            <h1>Events</h1>
            {events.map((event) => {
                return (
                    <EventCard event={event} />
                )
            })}
        </div>
    )
}

export default EventsList;