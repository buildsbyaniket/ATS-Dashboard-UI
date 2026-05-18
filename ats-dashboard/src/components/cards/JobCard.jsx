import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaUsers,
  FaEllipsisH,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

import { motion } from "framer-motion";

function JobCard({ job }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{ duration: 0.3 }}
      className="
        relative
        overflow-hidden
        bg-[#081028]
        border
        border-white/[0.05]
        rounded-3xl
        p-6
        hover:border-indigo-500/30
        transition-all
        duration-300
        flex
        flex-col
        justify-between
        min-h-[350px]
      "
    >
      {/* BLUR EFFECT */}
      <div
        className="
          absolute
          top-0
          right-0
          w-40
          h-40
          rounded-full
          bg-indigo-500
          opacity-10
          blur-3xl
        "
      />

      {/* TOP */}
      <div className="relative z-10">
        
        {/* HEADER */}
        <div className="flex items-start justify-between">
          
          {/* LEFT */}
          <div className="flex gap-4">
            
            {/* ICON */}
            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-gradient-to-br
                from-indigo-500
                to-blue-500
                flex
                items-center
                justify-center
                text-white
                text-2xl
                shadow-lg
                shadow-indigo-500/20
              "
            >
              <FaBriefcase />
            </div>

            {/* INFO */}
            <div>
              <h2 className="text-white text-2xl font-bold">
                {job.title}
              </h2>

              <p className="text-slate-400 mt-2 text-sm">
                Full Time • Experience 2-4 Years
              </p>
            </div>
          </div>

          {/* MENU */}
          <button
            className="
              w-10
              h-10
              rounded-xl
              bg-white/[0.04]
              hover:bg-white/[0.08]
              text-slate-400
              hover:text-white
              flex
              items-center
              justify-center
              transition-all
            "
          >
            <FaEllipsisH />
          </button>
        </div>

        {/* LOCATION + TIME */}
        <div className="flex flex-wrap items-center gap-5 mt-7">
          
          <div className="flex items-center gap-2 text-slate-400">
            <FaMapMarkerAlt className="text-indigo-400" />

            <span>{job.location}</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <FaClock className="text-indigo-400" />

            <span>Posted 2 Days Ago</span>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          
          {/* SALARY */}
          <div
            className="
              bg-white/[0.03]
              border
              border-white/[0.05]
              rounded-2xl
              p-5
            "
          >
            <p className="text-slate-400 text-sm">
              Salary
            </p>

            <h3 className="text-white text-3xl font-black mt-3">
              {job.salary}
            </h3>
          </div>

          {/* APPLICANTS */}
          <div
            className="
              bg-white/[0.03]
              border
              border-white/[0.05]
              rounded-2xl
              p-5
            "
          >
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <FaUsers />

              Applicants
            </div>

            <h3 className="text-white text-3xl font-black mt-3">
              {job.applicants}
            </h3>
          </div>
        </div>

        {/* SKILLS */}
        <div className="flex flex-wrap gap-3 mt-8">
          {["React", "Node", "Tailwind"].map(
            (skill, index) => (
              <span
                key={index}
                className="
                  px-4
                  py-2
                  rounded-xl
                  bg-indigo-500/10
                  border
                  border-indigo-500/20
                  text-indigo-400
                  text-sm
                  font-medium
                "
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>

      {/* BOTTOM */}
      <div className="relative z-10 flex items-center justify-between mt-10">
        
        {/* STATUS */}
        <span
          className="
            px-4
            py-2
            rounded-xl
            bg-green-500/10
            border
            border-green-500/20
            text-green-400
            text-sm
            font-medium
          "
        >
          Active
        </span>

        {/* BUTTON */}
        <button
          className="
            flex
            items-center
            gap-3
            px-6
            py-3
            rounded-2xl
            bg-gradient-to-r
            from-indigo-500
            to-blue-500
            hover:scale-[1.03]
            text-white
            font-semibold
            transition-all
            duration-300
            shadow-lg
            shadow-indigo-500/20
          "
        >
          View Details

          <FaArrowRight />
        </button>
      </div>
    </motion.div>
  );
}

export default JobCard;