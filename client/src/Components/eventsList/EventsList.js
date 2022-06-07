import React from 'react'
import EventCard from '../eventCard/eventCard';
import './eventsList.css'
import { Link } from 'react-router-dom';

function EventsList() {
    const [ events, setEvents ] = React.useState([]);

    React.useEffect(() => {
        let url = 'https://runitback-api.herokuapp.com/events';

        fetch(url)
        .then(response => response.json())
        .then(data => {
            setEvents(data.payload)
        })
    }, [])
    return (
        <div className ='eventsList'>
            <h1>Events</h1>
            <Link to='/users/new'>
                <div className='add-user    '>
                    Add New Event
                </div>
            </Link>
            {events.map((event) => {
                return (
                    <EventCard event={event} />
                )
            })}
        </div>
    )
}

export default EventsList;