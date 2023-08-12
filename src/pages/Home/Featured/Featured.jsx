import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-item bg-fixed p-20 my-16  text-white">
      <div className=" bg-gradient-to-tr from-slate-400 to-slate-700 opacity-90 rounded-lg p-5">
        <SectionTitle
          subHeading="Check it Out"
          heading="Featured Item"></SectionTitle>
        <div className="md:flex justify-center items-center p-10 ">
          <div>
            <img src={featuredImg} className="rounded-lg" alt="" />
          </div>
          <div className="ml-10">
            <p>Aug 20, 2023</p>
            <p className="uppercase">Where can i get some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magni
              consequuntur hic veritatis repellendus sequi ad, nihil ut ab, sint
              sed, sunt aspernatur voluptatum veniam ducimus delectus voluptatem
              quidem ipsam asperiores repudiandae cumque ex totam temporibus!
              Repudiandae ratione molestias distinctio.
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-3 ">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
