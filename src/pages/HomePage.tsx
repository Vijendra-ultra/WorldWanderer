import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="pt-15 major-sec  p-7   text-black min-h-screen">
      <h1
        style={{ fontSize: "3.4rem" }}
        className=" leading-snug text-center p-1 pfont tracking-tight text-primaryOrange pt-7 mb-5 "
      >
        Worldwanderer is the one stop destination to
        <span className="italic text-pPink ml-1">document</span> &nbsp;all your
        <span className="text-pGreen ml-2">journies.</span>
      </h1>
      <p className="pt-3 text-center p-text">
        Worldwanderer allows you to document your journey accross the world by
        allowing you to pin the places you've visited and allowing you to write
        some memorable moment that happened to you while you were there. Let the
        world exploring begin 🚀
      </p>

      <div className="flex justify-center items-center gap-4 mt-5">
        <Link
          className=" btn bg-pPink text-white hover:bg-pGreen "
          to="/UserAuth"
        >
          Login
        </Link>

        <button
          style={{ backgroundColor: "#414833" }}
          className=" btn text-white"
        >
          <Link to="/App">Explore</Link>
        </button>
      </div>
    </div>
  );
}
