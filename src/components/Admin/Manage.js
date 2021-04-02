import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';


const Manage = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://serene-island-10470.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])

    return (
        <div className="row">
            {
                events.map(event =><Event event={event}></Event>)
            }
        </div>
    );
};

export default Manage;