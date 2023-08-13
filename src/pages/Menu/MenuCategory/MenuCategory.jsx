import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="my-20">
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-12 mx-4 md:mx-0 mt-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-7">
        <button className="btn btn-outline border-0 border-b-4 mt-3 ">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
