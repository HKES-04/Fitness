import Header from "../components/HomePage/Header";
import Program from "../components/HomePage/Program";
import BookClass from "../components/HomePage/BookClass";
import JoinUs from "../components/HomePage/JoinUs";
import Pricing from "../components/HomePage/Pricing";
import Testimonial from "../components/HomePage/Testimonial";

function Home() {
  return (
    <div>
      <Header />
      <Program />
      <BookClass />
      <JoinUs />
      <Pricing />
      <Testimonial />
    </div>
  );
}

export default Home;
