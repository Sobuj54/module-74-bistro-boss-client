import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating, Star } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const myStyles = {
  itemShapes: Star,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://bistro-boss-server-theta-virid.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <section className="my-20">
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"Testimonials"}></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="my-16 mx-24 flex flex-col items-center">
              <Rating
                style={{ maxWidth: 120 }}
                value={review.rating}
                itemStyles={myStyles}
                readOnly
              />
              <div>
                <img
                  src="https://w7.pngwing.com/pngs/403/327/png-transparent-quotation-mark-apostrophe-computer-icons-quotation-text-number-sign-thumbnail.png"
                  className="bg-inherit w-[100px] mt-4"
                  alt=""
                />
              </div>
              <p className="py-5">{review.details}</p>
              <h2 className="text-2xl text-yellow-500">{review.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
