import ProfileImage from "./ProfileImage.jsx";

function ProfileHeader({ profile }) {
  return (
    <header className="profile-header">
      <ProfileImage image={profile.image} name={profile.name} />
      <p className="eyebrow">PORTFOLIO</p>
      <h1>{profile.name}</h1>
      <h3>{profile.role}</h3>
    </header>
  );
}

export default ProfileHeader;
