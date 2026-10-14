function ProfileDetails({ profile }) {
  return (
    <section className="profile-details">
      {profile.email && (
        <p>
          <strong>Email:</strong> <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      )}
      {profile.phone && (
        <p>
          <strong>Phone:</strong> <a href={`tel:${profile.phone}`}>{profile.phone}</a>
        </p>
      )}
      <p>
        <strong>Location:</strong> {profile.location}
      </p>
      <p>
        <strong>Education:</strong> {profile.education.institution},{" "}
        {profile.education.department}
      </p>
    </section>
  );
}

export default ProfileDetails;
