import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CollegeDetails = () => {
  const [college, setCollege] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/college/${id}`).then((response) => {
      setCollege(response.data);
    });
  }, []);
  return <div>{college.name}</div>;
};

export default CollegeDetails;
