import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";
import Container from "../../../Components/Container";
import Heading from "../../../Components/Heading";
import axios from "axios";

const CollegesCards = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    axios
      .get("https://admission-server-topaz.vercel.app/allColleges")
      .then((response) => {
        setColleges(response.data.slice(0, 3));
      });
  }, []);
  return (
    <Container>
      <Heading
        title={"This is Our Popular colleges"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, "
        }
      ></Heading>
      <div className="grid  gap-6 lg:grid-cols-1">
        {colleges &&
          colleges.map((college) => (
            <CollegeCard key={college.name} college={college}></CollegeCard>
          ))}
      </div>
    </Container>
  );
};

export default CollegesCards;
