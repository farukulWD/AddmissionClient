import Marquee from "react-fast-marquee";
import images from "../../../assets/banner.jpg";
import images1 from "../../../assets/images1.jpg";
import images2 from "../../../assets/images2.jpeg";
import images3 from "../../../assets/images3.jpeg";
import images4 from "../../../assets/images4.jpeg";
import images5 from "../../../assets/images5.jpeg";
import Container from "../../../Components/Container";
import Heading from "../../../Components/Heading";

const Gallery = () => {
  // TODO Change image
  return (
    <Container>
      <Heading
        title={"Discover Collages"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, "
        }
      ></Heading>
      <Marquee>
        <img
          className="h-96 w-96 mr-10 rounded-lg p-5 hover:scale-110 delay-75 transition-transform"
          src={images}
          alt=""
        />
        <img
          className="h-96 w-96 mr-10 rounded-lg p-5 hover:scale-110 delay-75 transition-transform"
          src={images1}
          alt=""
        />
        <img
          className="h-96 w-96 mr-10 rounded-lg p-5 hover:scale-110 delay-75 transition-transform"
          src={images2}
          alt=""
        />
      </Marquee>
      <div className="mt-10">
        <Marquee direction="right">
          <img
            className="h-96 w-96 mr-10 rounded-lg p-5 hover:scale-110 delay-75 transition-transform"
            src={images3}
            alt=""
          />
          <img
            className="h-96 w-96 mr-10 rounded-lg p-5 hover:scale-110 delay-75 transition-transform"
            src={images4}
            alt=""
          />
          <img
            className="h-96 w-96 mr-10 rounded-lg p-5 hover:scale-110 delay-75 transition-transform"
            src={images5}
            alt=""
          />
        </Marquee>
      </div>
    </Container>
  );
};

export default Gallery;
