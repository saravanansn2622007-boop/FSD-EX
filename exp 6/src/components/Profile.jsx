import About from "./About.jsx";
import Contact from "./Contact.jsx";
import ProfileDetails from "./ProfileDetails.jsx";
import ProfileHeader from "./ProfileHeader.jsx";
import Skills from "./Skills.jsx";
import profileData from "../data/profileData.js";

function Profile() {
  return (
    <div className="profile-card">
      <ProfileHeader profile={profileData} />
      <ProfileDetails profile={profileData} />
      <About description={profileData.about} />
      <Skills />
      <Contact
        email={profileData.email}
        phone={profileData.phone}
        github={profileData.github}
      />
    </div>
  );
}

export default Profile;
