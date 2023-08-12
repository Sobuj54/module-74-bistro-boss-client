import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-14">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"></SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 mx-4 md:mx-0">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-7">
        <button className="btn btn-outline border-0 border-b-4 mt-3 ">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
