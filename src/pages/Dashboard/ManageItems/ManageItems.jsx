import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${item?._id}`).then((res) => {
          //   console.log("after deletion :", res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            toast.success("Successfully deleted an Item !", {
              position: toast.POSITION.TOP_CENTER,
            });
          } else {
            toast.error("Error! Couldn't delete the Item ", {
              position: toast.POSITION.TOP_LEFT,
            });
          }
        });
      }
    });
  };

  return (
    <div className="w-full px-5">
      <Helmet>
        <title>Dashboard | Manage All Items</title>
      </Helmet>
      <SectionTitle
        heading="Manage All Items"
        subHeading="Hurry Up"></SectionTitle>
      {/* All items */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Category</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>{item.category}</td>
                <td>${item.price}</td>
                <td>
                  <button className="btn btn-success btn-md text-white">
                    <FaPencilAlt />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-error btn-md text-white">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ManageItems;
