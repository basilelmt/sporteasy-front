import "./Preview.scss";
import { EventDetailType } from '../../../api/types';

interface PreviewProps {
  event: EventDetailType;
}

export const Preview = ({ event }: PreviewProps) => {
  const lscore = event.left_team.score ?? 0
  const rscore = event.right_team.score ?? 0
  const formatedDate = new Intl.DateTimeFormat('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(event.date));

  return (
    <>
      <div className="head">
        <p className="date">{formatedDate}</p>
        <p className="type">{event.type}</p>
      </div>
      <div className="body">
        <p className="time">
          Début du match: {event.start_at}
          <br />
          Fin du match: {event.end_at}
        </p>

        <div className="score">
          <div className="team-score">{event.left_team.name}</div>
          <div className="vals">
            <span className={lscore > rscore ? "green" : "red"}>{lscore}</span>
            &nbsp;-&nbsp;
            <span className={rscore > lscore ? "green" : "red"}>{rscore}</span>
          </div>
          <div className="team-score">{event.right_team.name}</div>
        </div>
      </div>
    </>
  );
};
