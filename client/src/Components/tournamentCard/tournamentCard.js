import React from 'react';

import './tournamentCard.css'

function TournamentCard({ tournament }) {
    return (
        <div className='tournament-card' key={tournament?.id}>
            <h1>{tournament?.gametitle}</h1>
            <div>
                Attendees: {tournament?.attendees}
            </div>
            <div>
                PrizePool: {tournament?.prizepool}
            </div>
        </div>
    )
}

export default TournamentCard