import react from "react";
import ReactDOM from "react-dom";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avartar />
      <div className="data">
        <Intro />
        <SkillsList />
      </div>
    </div>
  );
}

function Avartar() {
  return <img className="avatar" src="profile_pic.jpg" alt="profile_pic" />;
}

function Intro() {
  return (
    <div>
      <h1>Chayanit Kitmek</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
  );
}

function SkillsList() {
  return (
    <div className="skill-list">
      {skills.map((skillObj) => (
        <Skill
          skill={skillObj.skill}
          bgColor={skillObj.color}
          level={skillObj.level}
        />
      ))}

      {/* <Skill skill="HTML+CSS" emoji="👍" bgColor="#2656D5" />
      <Skill skill="JavaScript" emoji="✅" bgColor="#ECD318" />
      <Skill skill="Web Design " emoji="😊" bgColor="#BAD7A4" />
      <Skill skill="Git+Github" emoji="👋" bgColor="#E5452D" />
      <Skill skill="React" emoji="💥" bgColor="#54D4F8" /> */}
    </div>
  );
}

function Skill({ skill, bgColor, level }) {
  const style = {
    backgroundColor: bgColor,
  };

  return (
    <div className="skill" style={style}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <react.StrictMode>
    <App />
  </react.StrictMode>
);
