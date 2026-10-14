import SkillItem from "./SkillItem.jsx";
import skillsData from "../data/skillsData.js";

function Skills() {
  return (
    <section>
      <h2>My Skills</h2>
      <ul className="skills-list">
        {skillsData.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </ul>
    </section>
  );
}

export default Skills;
