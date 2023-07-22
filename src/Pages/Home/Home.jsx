import Banner from "./Banner/Banner";
import CollegesCards from "./CollegesCards/CollegesCards";
import Gallery from "./Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section className="my-[80px]">
        <CollegesCards></CollegesCards>
      </section>
      <section>
        <Gallery></Gallery>
      </section>
      <section className="my-[80px]">demo</section>
    </div>
  );
};

export default Home;
