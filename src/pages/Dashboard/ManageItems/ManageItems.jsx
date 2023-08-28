import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const ManageItems = () => {
  const [menu] = useMenu();

  return (
    <div className="w-full">
      <Helmet>
        <title>Dashboard | Manage All Items</title>
      </Helmet>
      <SectionTitle
        heading="Manage All Items"
        subHeading="Hurry Up"></SectionTitle>
    </div>
  );
};

export default ManageItems;
