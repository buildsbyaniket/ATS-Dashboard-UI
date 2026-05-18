import {
  FaBell,
  FaSearch,
  FaBars,
} from "react-icons/fa";

function Navbar({ setIsOpen }) {
  return (
    <div
      className="
      flex
      items-center
      justify-between
      mb-10
      gap-4
    "
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">
        
        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(true)}
          className="
          lg:hidden
          w-12
          h-12
          rounded-2xl
          bg-[#081028]
          border
          border-white/10
          flex
          items-center
          justify-center
          text-white
        "
        >
          <FaBars />
        </button>

        <div>
          <h1 className="text-2xl md:text-5xl font-black text-white">
            Welcome Back, Admin 👋
          </h1>

          <p className="text-slate-400 mt-2 text-sm md:text-lg">
            Recruitment analytics overview
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hidden md:flex items-center gap-5">
        
        {/* SEARCH */}
        <div
          className="
          flex
          items-center
          bg-[#081028]
          border
          border-white/[0.05]
          rounded-2xl
          px-5
          h-16
          w-[320px]
        "
        >
          <FaSearch className="text-slate-500" />

          <input
            type="text"
            placeholder="Search anything..."
            className="
            bg-transparent
            outline-none
            text-white
            ml-4
            w-full
          "
          />
        </div>

        {/* NOTIFICATION */}
        <div
          className="
          w-16
          h-16
          rounded-2xl
          bg-[#081028]
          border
          border-white/[0.05]
          flex
          items-center
          justify-center
          text-white
        "
        >
          <FaBell />
        </div>

        {/* AVATAR */}
        <div
          className="
          w-16
          h-16
          rounded-full
          bg-gradient-to-br
          from-indigo-500
          to-blue-500
        "
        ></div>
      </div>
    </div>
  );
}

export default Navbar;