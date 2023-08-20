import {
  FaCalendar,
  FaHome,
  FaShoppingCart,
  FaWallet,
  FaHamburger,
  FaFirstOrderAlt,
  FaUtensils,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const DashBoard = () => {
  const [cart] = useCart();

  const isAdmin = true;

  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* page contents */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054] text-white">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li>
                <Link to="/dashboard/home">
                  <FaHome /> Admin Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/reservations">
                  <FaUtensils /> Add Item
                </Link>
              </li>

              <li>
                <Link to="/dashboard/history">
                  <FaWallet></FaWallet> Manage Items
                </Link>
              </li>
              <li>
                <Link to="/dashboard/history">
                  <FaBook></FaBook> Manage Bookings
                </Link>
              </li>
              <li>
                <Link to="/dashboard/allusers">
                  <FaUsers></FaUsers> All Users
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard/home">
                  <FaHome /> User Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/reservations">
                  <FaCalendar /> Reservations
                </Link>
              </li>
              <li>
                <Link to="/dashboard/mycart">
                  <FaShoppingCart /> My Cart
                  <span className="badge badge-secondary">
                    +{cart?.length || 0}
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/history">
                  <FaWallet></FaWallet> Payment History
                </Link>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <Link to="/">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/menu">
              <FaHamburger /> Our Menu
            </Link>
          </li>
          <li>
            <Link to="/order/salad">
              <FaFirstOrderAlt /> Order Food
            </Link>
          </li>
          <li>
            <Link></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
