function SkillItem({ skill }) {
  return (
    <li className="skill-item">
      <span>{skill.name}</span>
      {skill.level && <span>{skill.level}</span>}
    </li>
  );
}

export default SkillItem;
