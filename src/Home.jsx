import { Link } from "react-router-dom";

function Home() {
  console.log("Welcome to Home.jsx");

  return (
    <div>
      <h2>Welcome</h2>
      <h1>You are on Home Page 🥳</h1>
      <p>
        You can visit our <Link to="/About">About Page</Link>
      </p>
    </div>
  );
}
export default Home;
