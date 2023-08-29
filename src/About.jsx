import { Link } from "react-router-dom";
function About() {
  console.log("About page is openned !");

  return (
    <div style={{ color: "blue" }}>
      <h1>You are on About Page</h1>
      <br />
      <Link to="/user/1/Sibtain?area=Gulistan-e-Jauhar&age=20">
        Sibtain Ahmed
      </Link>
      <br />
      <Link to="/user/2/Ahmer?city=Karachi&age=22">Muhammad Ahmer</Link>
      <br />
      <Link to="/user/Hasnian?city=Karachi&age=21">Hasnain Ahmed</Link>
      <br />
      <Link to="/user/Osama?city=Karachi&age=19">Muhammad Osama</Link>
    </div>
  );
}
export default About;
