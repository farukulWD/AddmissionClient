import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Heading from "../../Components/Heading";
import { Link } from "react-router-dom";
import Container from "../../Components/Container";

const Admission = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    axios
      .get("https://admission-server-topaz.vercel.app/allColleges")
      .then((response) => {
        setColleges(response.data);
      });
  }, []);
  return (
    <Container>
      <Helmet>
        <title>Admission</title>
      </Helmet>
      <div className="my-[80px]">
        <Heading
          title={"Select Your College"}
          description={
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,"
          }
        ></Heading>
        <div>
          {colleges &&
            colleges.map((college) => (
              <h2
                className="border border-blue-500 py-2 px-2 text-2xl font-semibold my-2 cursor-pointer"
                key={college.name}
              >
                <Link to={`/admissionForm/${college?.name}`}>
                  {college?.name}
                </Link>
              </h2>
            ))}
        </div>
      </div>
    </Container>
  );
};

export default Admission;
