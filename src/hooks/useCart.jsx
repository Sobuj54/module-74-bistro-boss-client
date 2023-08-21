import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  // useAuth hook handles context api call
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  // const token = localStorage.getItem("access-token");

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading, //must use this enabled otherwise login will cause problem.
    // queryFn: async () => {
    //   const res = await fetch(
    //     `http://localhost:5000/carts?email=${user?.email}`,
    //     {
    //       headers: {
    //         authorization: `bearer ${token}`,
    //       },
    //     }
    //   );
    //   return res.json();
    // },
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      // console.log("res from axios :", res);
      return res.data;
    },
  });

  return [cart, refetch];
};

export default useCart;
