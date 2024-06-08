import "./Event.scss";
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Title } from "./Title/Title";
import { Preview } from "./Preview/Preview";
import { EventType } from "../../api/types";

export const Event = () => {
  const [infos, setInfos] = useState<EventType>();
  useEffect(() => {
    console.log('effect');
    axios
      .get('https://hr2v36jyr7.execute-api.eu-west-3.amazonaws.com/default/frontendInterview')
      .then(response => {
        console.log('promise fulfilled');
        setInfos(response.data);
      })
  }, [])

  return (
    <div className="container">
      <Title>Feuille de match</Title>
      {infos && <Preview infos={infos} />}
    </div>
  );
};
