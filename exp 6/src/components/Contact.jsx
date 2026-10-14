function Contact({ email, phone, github }) {
  return (
    <section>
      <h2>Contact Me</h2>
      {email && (
        <p> Email: <a href={`mailto:${email}`}>{email}</a> </p>
      )}
      {phone && (
        <p> Phone: <a href={`tel:${phone}`}>{phone}</a></p>
      )}
      <p>
        GitHub:{" "}
        <a href={github} target="_blank" rel="noreferrer">
          {github.replace(/^https?:\/\//, "")}
        </a>
      </p>
    </section>
  );
}

export default Contact;
