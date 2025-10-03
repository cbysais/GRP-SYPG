import Login from "../../components/Login";
import Register from "../../components/Register";

function HomePage() {
  return (
    <div>
      <h1 className="font-bold text-blue-700">GRP SYPG's User Auth System</h1>
      <Register />
      <hr />
      <Login />
    </div>
  );
}

export default HomePage;
