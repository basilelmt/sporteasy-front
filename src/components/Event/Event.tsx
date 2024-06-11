import "./Event.scss";
import { useState, useEffect } from 'react'
import axios from 'axios';
import { MembersTable } from "./MembersTable/MembersTable";
import { Preview } from "./Preview/Preview";
import { EventType } from "../../api/types";
import { Profile } from "./Profile/Profile";
import { EventCard } from "./EventCard/EventCard";

export const Event = () => {
  const [infos, setInfos] = useState<EventType>();
  useEffect(() => {
    axios
      .get('https://hr2v36jyr7.execute-api.eu-west-3.amazonaws.com/default/frontendInterview')
      .then(response => {
        setInfos(response.data);
      })
  }, [])

  return (
    <div className="container">
      <div className="main-title">Feuille de match</div>
      <div className="grid-container">
        <div className="grid-item">
          {infos && <Preview event={infos.event_detail} />}
          {infos && <MembersTable attendees={infos.attendees} />}
        </div>
        <div className="grid-item">
          {infos && <Profile profile={infos.profile} />}
          {infos && <EventCard event={infos.last_event} />}
          {infos && <EventCard event={infos.next_event} />}
        </div>
      </div>
    </div>
  );
};
