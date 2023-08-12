import { useEffect, useState } from "react";
import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section className="mb-14">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"></SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 mx-4 md:mx-0">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
