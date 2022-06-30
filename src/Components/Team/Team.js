import "../../Styles/Team/Team.css";
import TeamMember from "./TeamMember/TeamMember";

const Team = () => {
  return (
    <section className="teamWrapper">
      <TeamMember />
      <TeamMember />
    </section>
  );
};

export default Team;
