import react from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  return (
    <div className="card">
      <ProImg />
      <Data />
    </div>
  );
}

function ProImg() {
  return <img className="avatar" src="profile_pic.jpg" alt="profile_pic" />;
}

function Data() {
  return (
    <div className="data">
      <h1>Chayanit Kitmek</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <SkillsList />
    </div>
  );
}

function SkillsList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS👍" bgColor="#2656D5" />
      <Skill skill="JavaScript👍" bgColor="#ECD318" />
      <Skill skill="Git+Github👍" bgColor="#E5452D" />
      <Skill skill="React👍" bgColor="#54D4F8" />
    </div>
  );
}

function Skill(props) {
  const style = {
    backgroundColor: props.bgColor,
  };

  return (
    <span className="skill" style={style}>
      {props.skill}
    </span>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <react.StrictMode>
    <App />
  </react.StrictMode>
);
