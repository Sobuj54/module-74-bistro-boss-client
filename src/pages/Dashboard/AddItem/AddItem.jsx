import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="w-full px-10">
      <Helmet>
        <title>Bistro Boss | Add An Item</title>
      </Helmet>
      <SectionTitle
        subHeading="What's New"
        heading="Add An Item"></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Recipe Name*</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Recipe Name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Category*</span>
          </label>
          <select
            {...register("category", { required: true })}
            className="select select-bordered">
            <option disabled selected>
              Pick one
            </option>
            <option>Pizza</option>
            <option>Soup</option>
            <option>Salad</option>
            <option>Drinks</option>
            <option>Dessert</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price*</span>
          </label>
          <input
            type="number"
            {...register("price", { required: true })}
            placeholder="Price"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details*</span>
          </label>
          <textarea
            {...register("details", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"></textarea>
        </div>
        {/* file input */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Item Image*</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <input
          type="submit"
          value="Add Item"
          className="btn btn-md btn-secondary"
        />
      </form>
    </div>
  );
};

export default AddItem;
