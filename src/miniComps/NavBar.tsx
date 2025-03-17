import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div
        style={{ justifyContent: "flex-start" }}
        className="flex p-3 bg-white text-black   pl-10 pb-4 "
      >
        <Link to="/" className="text-4xl font-bold  text-primaryOrange">
          WorldWanderer
        </Link>
        <div className="flex justify-center items-start text-2xl gap-7 ml-auto pr-10">
          <Link className="hover:text-primaryColor pt-1 " to="/Pricing">
            Prices
          </Link>
          <Link className="hover:text-primaryColor pt-1" to="/About">
            About
          </Link>
          <Link
            className="bg-pGreen p-2 pt-1 rounded-md transition duration-500 hover:bg-pPink hover:text-white"
            to="/UserAuth"
          >
            Signup
          </Link>
        </div>
      </div>
    </>
  );
}
