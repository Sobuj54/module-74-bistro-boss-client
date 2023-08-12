import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Category from "../category/Category";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
