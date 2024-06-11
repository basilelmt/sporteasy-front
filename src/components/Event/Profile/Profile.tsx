import "./Profile.scss";
import { ProfileType } from "../../../api/types";

interface PreviewProps {
  profile: ProfileType;
}


export const Profile = ({ profile }: PreviewProps) => {

  return (
    <div className="profile">
      <img className="profile-picture" src={profile.photo_url} alt="Profile" />
      <div className="name">{profile.first_name} {profile.last_name}</div>
      <div className="email">{profile.email}</div>
      <div className="number">{profile.phone_number}</div>
    </div >
  );
};
