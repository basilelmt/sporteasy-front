import "./EventCard.scss";
import { LastNextEventType } from "../../../api/types";

interface PreviewProps {
  event: LastNextEventType;
}


export const EventCard = ({ event }: PreviewProps) => {
  const lscore = event.left_team.score ?? "-"
  const rscore = event.right_team.score ?? "-"

  const getScoreClass = (score1: number | "-", score2: number | "-") => {
    if (score1 > score2) return 'win';
    if (score1 < score2) return 'lose';
    return 'draw';
  };

  return (
    <div className="event">
      <div className="event-title">{lscore == "-" ? "Prochain match" : "Dernier match"}</div>
      <hr />
      <div className="event-team">
        <span className="event-team-name">{event.left_team.name}</span>
        <span className={`event-team-score ${getScoreClass(lscore, rscore)}`}>
          {lscore}
        </span>
      </div>
      <div className="event-team">
        <span className="event-team-name">{event.right_team.name}</span>
        <span className={`event-team-score ${getScoreClass(rscore, lscore)}`}>
          {rscore}
        </span>
      </div>
    </div >
  );
};
