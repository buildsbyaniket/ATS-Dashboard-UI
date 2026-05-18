import { Link, useLocation } from "react-router-dom";

import {
  FaChartPie,
  FaBriefcase,
  FaUsers,
  FaChevronDown,
  FaTimes,
} from "react-icons/fa";

import { motion } from "framer-motion";

function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();

  const navLinks = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaChartPie />,
    },
    {
      name: "Jobs",
      path: "/jobs",
      icon: <FaBriefcase />,
    },
    {
      name: "Candidates",
      path: "/candidates",
      icon: <FaUsers />,
    },
  ];

  return (
    <>
      {/* OVERLAY */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="
          fixed
          inset-0
          bg-black/50
          z-40
          lg:hidden
        "
        ></div>
      )}

      <aside
        className={`
        fixed
        top-0
        left-0
        z-50
        flex
        flex-col
        justify-between
        w-[270px]
        h-screen
        bg-[#081028]
        border-r
        border-white/10
        px-4
        py-5
        transition-all
        duration-300

        ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }

        lg:translate-x-0
      `}
      >
        {/* TOP SECTION */}
        <div>
          
          {/* HEADER */}
          <div className="flex items-center justify-between mb-12">
            
            {/* LOGO */}
            <div className="flex items-center gap-3">
              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-gradient-to-br
                from-indigo-500
                to-blue-500
                flex
                items-center
                justify-center
              "
              >
                <FaUsers className="text-white text-lg" />
              </div>

              <div>
                <h1 className="text-3xl font-bold text-white">
                  ATS Pro
                </h1>

                <p className="text-slate-400 text-sm">
                  HR Dashboard
                </p>
              </div>
            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsOpen(false)}
              className="
              lg:hidden
              text-white
              text-xl
            "
            >
              <FaTimes />
            </button>
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive =
                location.pathname === link.path;

              return (
                <motion.div
                  key={link.path}
                  whileHover={{ x: 4 }}
                >
                  <Link
                    to={link.path}
                    onClick={() =>
                      setIsOpen(false)
                    }
                    className={`
                      flex
                      items-center
                      gap-4
                      px-4
                      py-4
                      rounded-2xl
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white"
                          : "text-slate-300 hover:bg-white/[0.05]"
                      }
                    `}
                  >
                    <div
                      className="
                      w-11
                      h-11
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      bg-white/[0.05]
                    "
                    >
                      {link.icon}
                    </div>

                    <span className="text-[17px] font-medium">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* PROFILE */}
        <div
          className="
          border
          border-white/10
          bg-white/[0.03]
          rounded-3xl
          p-4
        "
        >
          <div className="flex items-center justify-between">
            
            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/100"
                alt="profile"
                className="
                w-14
                h-14
                rounded-2xl
                object-cover
                border-2
                border-indigo-500
              "
              />

              <div>
                <h3 className="text-white font-semibold">
                  Admin
                </h3>

                <p className="text-slate-400 text-sm">
                  HR Manager
                </p>
              </div>
            </div>

            <button
              className="
              w-9
              h-9
              rounded-xl
              bg-white/[0.05]
              flex
              items-center
              justify-center
              text-slate-400
            "
            >
              <FaChevronDown />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;