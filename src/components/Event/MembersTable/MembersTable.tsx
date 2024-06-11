import "./MembersTable.scss";
import { AttendeeType } from '../../../api/types';

interface PreviewProps {
  attendees: AttendeeType[];
}


export const MembersTable = ({ attendees }: PreviewProps) => {

  const tableRows = attendees.map((person, index) => (
    <tr key={index}>
      <td style={{ textAlign: "center" }} ><img className="avatar" src={person.photo_url} alt="Profile" /></td>
      <td>{person.first_name}</td>
      <td>{person.last_name}</td>
      <td>{person.email}</td>
      <td>
        <div className={person.status == "present" ? "green-bg" : "red-bg"}>
          {person.status == "present" ? "Présent" : "Absent"}
        </div>
      </td>
    </tr>
  ));

  return (
    <div className="wrapper">
      <div className="table-text">{tableRows.length} joueurs convoqués</div>
      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th style={{ textAlign: "left" }}>Nom</th>
            <th style={{ textAlign: "left" }}>Prénom</th>
            <th style={{ textAlign: "left" }}>Email</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </div>
  );
};
