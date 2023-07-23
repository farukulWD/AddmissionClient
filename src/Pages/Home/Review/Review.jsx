import { useContext, useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Container from "../../../Components/Container";
import Heading from "../../../Components/Heading";
import { Rating } from "@smastrom/react-rating";
import { AuthContext } from "../../../Context/AuthProvider";

const Review = () => {
  const [colleges, setColleges] = useState([]);
  const [rating, setRating] = useState(0);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch("collegedata.json")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
      });
  }, []);
  const addReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const comment = form.comment.value;
    console.log(username, comment, rating);
  };
  return (
    <Container>
      <Heading
        title={"Reviews and Feedback"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
        }
      ></Heading>
      <div className="grid md:grid-cols-2">
        {colleges.map((college) => (
          <ReviewCard key={college.name} college={college}></ReviewCard>
        ))}
      </div>
      <h3 className="text-3xl font-semibold text-center my-6">Add Review</h3>
      <form onSubmit={addReview}>
        <div className="mb-4">
          <input
            type="Text"
            placeholder="UserName"
            defaultValue={user?.displayName}
            readOnly
            name="username"
            className="w-full focus:outline-none focus:border-green-500 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <select
            type="Text"
            placeholder="UserName"
            name="username"
            className="w-full focus:outline-none focus:border-green-500 p-2 border border-gray-300 rounded"
          >
            {colleges.map((college) => (
              <option key={college.name} value={college.name}>
                {college.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Comment"
            name="comment"
            className="w-full focus:outline-none focus:border-green-500 p-2 border border-gray-300 rounded"
          />
          <div className="mt-4">
            <Rating
              style={{ maxWidth: 180 }}
              value={rating}
              onChange={setRating}
              isRequired
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn bg-blue-500 hover:bg-blue-400  text-white w-full"
        >
          Submit
        </button>
      </form>
    </Container>
  );
};

export default Review;
