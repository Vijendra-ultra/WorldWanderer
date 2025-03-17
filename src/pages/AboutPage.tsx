import { Link } from "react-router-dom";
export default function AboutPage() {
  return (
    <div className=" px-24 mt-2 bg-white text-black   h-screen">
      <h2 className="text-6xl text-pPink text-bold pfont pt-6 text-center mb-10">
        About us
      </h2>
      <div className="flex items-center">
        <div>
          <img
            style={{ width: "100%", height: "100%" }}
            src="../public/img/5155486.jpg"
          />
        </div>
        <div>
          <p className="p-text">
            We are a dummy company which has a thousands of years experience
            giving wrong routes. Our stratergy is to give wrong routes and
            charge people for consultation per hour. We made 3 billion dollars
            by this buisiness. Now we are targeting this segment but we already
            are getting worst reviews. But we do this to make money thank you.
          </p>
        </div>
      </div>
      <div className="s-flex">
        <button className="p-text btn bg-pGreen text-white">
          <Link to="/">Stop it </Link>
        </button>
      </div>
    </div>
  );
}
