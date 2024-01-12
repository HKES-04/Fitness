import { member1, member2, member3 } from "../assets";
import { MdOutlineStar, MdOutlineStarHalf } from "react-icons/md";

const testimonialData = [
  {
    img: member1,
    name: "Josh Cooper",
    job: "Software Developer",
    description:
      "What truly sets this gym apart is their expert team of trainers. The trainers are knowledgeable, approachable, and genuinely invested in helping members achieve their fitness goals. They take the time to understand individual needs and create personalized workout plans, ensuring maximum results and safety.",
    stars: (
      <>
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStarHalf />
      </>
    ),
  },
  {
    img: member2,
    name: "Emily Smith",
    job: "Marketing Manager",
    description:
      "Joining this gym was one of the best decisions I've made for my health. The community here is incredibly supportive, and the group fitness classes are both challenging and fun. It's not just a gym, it's a place where I've made friends and found a supportive fitness family.",
    stars: (
      <>
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
      </>
    ),
  },
  {
    img: member3,
    name: "Alex Johnson",
    job: "Graphic Designer",
    description:
      "I've been a member of this gym for over a year, and I'm impressed with the variety of equipment and classes available. The gym is always clean and well-maintained, which makes for a pleasant workout experience. The staff is friendly and helpful, always ready to assist with any questions.",
    stars: (
      <>
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStarHalf />
      </>
    ),
  },
];

export default testimonialData;
