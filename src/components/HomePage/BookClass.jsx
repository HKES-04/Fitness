import { class1, class2 } from "../../assets";
import "./BookClass.css";

function BookClass() {
  return (
    <section id="class-section" className="section-container class-container">
      <div className="class-img">
        <span className="bg-blur"></span>
        <img className="class-img-1" src={class1} alt="Class Book Image1" />
        <img className="class-img-2" src={class2} alt="Class Book Image2" />
      </div>
      <div className="class-content">
        <h2 className="section-header">THE CLASS YOU WILL GET HERE</h2>
        <p>
          Led by our team of expert and motivational instructors, The Class You
          Will Get Here is a high-energy, results-driven session that combines a
          perfect blend of cardio, strength training, and functional exercises.
          Each class is carefully curated to keep you engaged and challenged,
          ensuring you never hit a plateau in your fitness endeavors.
        </p>
        <button className="btn">Book A Class</button>
      </div>
    </section>
  );
}

export default BookClass;
