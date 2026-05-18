import { useParams, useNavigate } from "react-router-dom";

import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaUsers,
  FaArrowLeft,
} from "react-icons/fa";

import jobs from "../data/jobs";

function JobDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const job = jobs.find(
    (item) => item.id.toString() === id
  );

  if (!job) {
    return (
      <div
        className="
        min-h-screen
        bg-[#020817]
        flex
        items-center
        justify-center
        text-white
      "
      >
        Job Not Found
      </div>
    );
  }

  return (
    <div
      className="
      min-h-screen
      bg-[#020817]
      text-white
      p-6
      md:p-10
    "
    >
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="
        flex
        items-center
        gap-3
        mb-8
        px-5
        py-3
        rounded-2xl
        bg-[#081028]
        border
        border-white/10
        hover:border-indigo-500/40
        transition-all
      "
      >
        <FaArrowLeft />

        Back
      </button>

      {/* CARD */}
      <div
        className="
        bg-[#081028]
        border
        border-white/10
        rounded-3xl
        p-8
      "
      >
        {/* TITLE */}
        <h1 className="text-4xl font-black">
          {job.title}
        </h1>

        <p className="text-slate-400 mt-3 text-lg">
          Full Time • Experience 2-4 Years
        </p>

        {/* INFO */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          
          {/* LOCATION */}
          <div
            className="
            bg-white/[0.03]
            border
            border-white/[0.05]
            rounded-2xl
            p-5
          "
          >
            <div className="flex items-center gap-3 text-indigo-400">
              <FaMapMarkerAlt />
              Location
            </div>

            <h3 className="text-2xl font-bold mt-4">
              {job.location}
            </h3>
          </div>

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
            <div className="flex items-center gap-3 text-indigo-400">
              <FaMoneyBillWave />
              Salary
            </div>

            <h3 className="text-2xl font-bold mt-4">
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
            <div className="flex items-center gap-3 text-indigo-400">
              <FaUsers />
              Applicants
            </div>

            <h3 className="text-2xl font-bold mt-4">
              {job.applicants}
            </h3>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-5">
            Job Description
          </h2>

          <p className="text-slate-400 leading-8 text-lg">
            We are looking for a talented developer
            to join our growing team. You will work
            with modern technologies like React,
            Tailwind CSS, Node.js and build scalable
            applications with beautiful UI/UX.
          </p>
        </div>

        {/* SKILLS */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-5">
            Required Skills
          </h2>

          <div className="flex flex-wrap gap-4">
            {[
              "React",
              "JavaScript",
              "Tailwind CSS",
              "Node.js",
              "API Integration",
            ].map((skill, index) => (
              <span
                key={index}
                className="
                px-5
                py-3
                rounded-2xl
                bg-indigo-500/10
                border
                border-indigo-500/20
                text-indigo-400
                font-medium
              "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* APPLY BUTTON */}
        <button
          className="
          mt-12
          px-8
          py-4
          rounded-2xl
          bg-gradient-to-r
          from-indigo-500
          to-blue-500
          hover:scale-[1.02]
          transition-all
          duration-300
          font-bold
          text-lg
        "
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default JobDetails;