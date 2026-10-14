function ProfileImage({ image, name }) {
  if (!image) {
    return (
      <div className="profile-image" role="img" aria-label={name}>
        {name.slice(0, 1)}
      </div>
    );
  }

  return <img src={image} alt={name} className="profile-image" />;
}

export default ProfileImage;
