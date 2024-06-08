import "./Preview.scss";
import { EventType } from '../../../api/types';

interface PreviewProps {
  infos: EventType;
}

export const Preview = ({ infos }: PreviewProps) => {
  const event = infos.event_detail;
  const lscore = event.left_team.score ?? 0
  const rscore = event.right_team.score ?? 0

  return (
    <>
      <div className="head">
        <p className="date">{event.date}</p>
        <p className="type">{event.type}</p>
      </div>
      <div className="body">
        <p className="time">
          Début du match: {event.start_at}
          <br />
          Fin du match: {event.end_at}
        </p>
        <div className="score">
          <span className={lscore > rscore ? "green" : "red"}>{lscore}</span>
          &nbsp;-&nbsp;
          <span className={rscore > lscore ? "green" : "red"}>{rscore}</span>
        </div>
      </div>
    </>
  );
};
