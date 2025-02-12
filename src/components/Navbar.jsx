function Navbar() {
  return (
    <div className="bg-[#315B2D] w-full">
      <div className="container">
        <button className="flex gap-2 px-16 py-[1px] rounded-2xl bg-white items-center">
          <span>2025 honorees</span>
          <img
            height={37}
            width={37}
            src="/public/assets/images/icons/arrow-left.svg"
            alt="Arrow left"
          />
        </button>
        <button>Craft Day Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
