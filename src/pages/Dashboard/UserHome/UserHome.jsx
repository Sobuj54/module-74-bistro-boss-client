import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();

  return (
    <div className="w-10/12 mx-auto">
      <h3 className="text-3xl font-bold text-center">
        Welcome Back, {user.displayName}
      </h3>
    </div>
  );
};

export default UserHome;
