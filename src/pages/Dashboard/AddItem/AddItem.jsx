import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const imageHostingToken = import.meta.env.VITE_image_upload_token;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  // image hosting on imgbb site
  const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`;

  const onSubmit = (data) => {
    console.log("form data", data);

    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(imageHostingURL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        // console.log(imageResponse);
        if (imageResponse.success) {
          const imgURL = imageResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgURL,
          };

          // posting using axios
          axiosSecure.post("/menu", newItem).then((data) => {
            // console.log("data after posting : ", data.data);
            if (data.data.insertedId) {
              reset();
              toast.success("You've successfully added an item !", {
                position: toast.POSITION.TOP_CENTER,
              });
            } else {
              toast.error("Couldn't add an Item !", {
                position: toast.POSITION.TOP_CENTER,
              });
            }
          });
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Add An Item</title>
      </Helmet>
      <div className="w-full px-10">
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
      <ToastContainer />
    </>
  );
};

export default AddItem;
