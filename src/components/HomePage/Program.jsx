import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import programData from "../../utils/programData";
import ProgramCard from "../../utils/ProgramCard";
import "./Program.css";

function Program() {
  return (
    <section
      id="program-section"
      className="section-container explore-container"
    >
      <div className="explore-header">
        <h2 className="section-header">EXPLORE OUR PROGRAM</h2>
        <div className="explore-nav">
          <span>
            <LuArrowLeft />
          </span>
          <span>
            <LuArrowRight />
          </span>
        </div>
      </div>
      <div className="explore-grid">
        {programData.map((card, index) => (
          <ProgramCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Program;
