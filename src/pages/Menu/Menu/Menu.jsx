import Cover from "../../shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import { Helmet } from "react-helmet-async";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuImg} title="Our Menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuImg} title="Our Menu"></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
