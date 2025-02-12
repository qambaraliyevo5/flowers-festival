import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-[#315B2D] w-full">
      <div className="container">
        <Link>
          <button className="flex gap-2 px-16 py-[1px] rounded-3xl bg-white items-center">
            <span className="text-[#1B7B58] tracking-[3.75px] text-sm">
              2025 honorees
            </span>
            <img
              height={37}
              width={37}
              src="/public/assets/images/icons/arrow-left.svg"
              alt="Arrow left"
            />
          </button>
        </Link>
        <button>Craft Day Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
