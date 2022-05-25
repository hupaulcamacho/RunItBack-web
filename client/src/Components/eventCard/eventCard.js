import React from 'react';
import { Link } from 'react-router-dom';
import './eventCard.css';

function eventCard({ event }) {
    return (
        <Link to={`/events/${event?.id}`} className='event-card-links'>
            <div className='event-card' key={event?.id}>
                <img className='event-card-img' src={event?.bannerurl} />
                <div>
                    <span className='event-title'>
                        {event?.title}
                    </span>
                </div>
                {/* <div>{event?.location}</div> */}
            </div>
        </Link>
    )
}
export default eventCard;