import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import { useForm } from "react-hook-form";

const imageHostingToken = import.meta.env.VITE_image_upload_token;

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  // image hosting on imgbb site
  const imageHostingURL = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostingToken}`;

  const onSubmit = (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(imageHostingURL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        console.log(imageResponse);
      });
  };

  console.log(imageHostingToken);
  return (
    <div className="w-full px-10">
      <Helmet>
        <title>Bistro Boss | Add An Item</title>
      </Helmet>
      <SectionTitle
        subHeading="What's New"
        heading="Add An Item"></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Recipe Name*</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Recipe Name"
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex gap-5 my-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              defaultValue="Pick One"
              {...register("category", { required: true })}
              className="select select-bordered">
              <option disabled>Pick One</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Drinks</option>
              <option>Dessert</option>
            </select>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Price"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details*</span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"></textarea>
        </div>
        {/* file input */}
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Item Image*</span>
          </label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input file-input-bordered w-full "
          />
        </div>
        <input
          type="submit"
          value="Add Item"
          className="btn btn-md btn-secondary my-4"
        />
      </form>
    </div>
  );
};

export default AddItem;
