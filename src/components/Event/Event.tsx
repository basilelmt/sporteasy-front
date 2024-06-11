import "./Event.scss";
import { useState, useEffect } from 'react'
import axios from 'axios';
import { MembersTable } from "./MembersTable/MembersTable";
import { Preview } from "./Preview/Preview";
import { EventType } from "../../api/types";

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
      </div>
    </div>
  );
};
