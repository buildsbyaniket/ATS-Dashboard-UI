import { useParams } from "react-router-dom";

import candidates from "../data/candidates";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaBriefcase,
  FaStar,
} from "react-icons/fa";

function CandidateDetails() {
  const { id } = useParams();

  const candidate = candidates.find(
    (item) => item.id == id
  );

  if (!candidate) {
    return (
      <div className="min-h-screen bg-[#020817] flex items-center justify-center text-white">
        Candidate Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020817] p-8 text-white">
      
      <div
        className="
          max-w-5xl
          mx-auto
          bg-[#081028]
          border
          border-white/5
          rounded-3xl
          p-10
        "
      >
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          
          {/* IMAGE */}
          <img
            src={`https://i.pravatar.cc/150?img=${candidate.id + 10}`}
            alt=""
            className="
              w-32
              h-32
              rounded-3xl
              object-cover
              border-4
              border-indigo-500/20
            "
          />

          {/* INFO */}
          <div className="flex-1">
            
            <h1 className="text-5xl font-black">
              {candidate.name}
            </h1>

            <p className="text-slate-400 text-xl mt-3">
              {candidate.role}
            </p>

            <div className="flex flex-wrap gap-6 mt-6 text-slate-400">
              
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />

                <span>
                  {candidate.location}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FaEnvelope />

                <span>
                  {candidate.email}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FaBriefcase />

                <span>
                  {candidate.experience}
                </span>
              </div>
            </div>
          </div>

          {/* SCORE */}
          <div
            className="
              w-40
              h-40
              rounded-3xl
              bg-gradient-to-br
              from-indigo-500
              to-blue-500
              flex
              flex-col
              items-center
              justify-center
            "
          >
            <FaStar className="text-3xl mb-3" />

            <h2 className="text-5xl font-black">
              {candidate.score}%
            </h2>

            <p className="text-sm mt-2 opacity-80">
              ATS Score
            </p>
          </div>
        </div>

        {/* STATUS */}
        <div className="mt-10">
          <span
            className={`
              px-5
              py-3
              rounded-2xl
              text-sm
              font-semibold
              ${
                candidate.status === "Selected"
                  ? "bg-green-500/10 text-green-400 border border-green-500/20"
                  : candidate.status === "Interview"
                  ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                  : "bg-red-500/10 text-red-400 border border-red-500/20"
              }
            `}
          >
            {candidate.status}
          </span>
        </div>

        {/* SKILLS */}
        <div className="mt-12">
          
          <h2 className="text-3xl font-bold mb-6">
            Skills
          </h2>

          <div className="flex flex-wrap gap-4">
            {candidate.skills?.map(
              (skill, index) => (
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
              )
            )}
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap gap-5 mt-14">
          
          <button
            className="
              px-8
              py-4
              rounded-2xl
              bg-indigo-600
              hover:bg-indigo-500
              transition-all
              duration-300
              font-semibold
            "
          >
            Schedule Interview
          </button>

          <button
            className="
              px-8
              py-4
              rounded-2xl
              bg-white/[0.05]
              hover:bg-white/[0.08]
              transition-all
              duration-300
              font-semibold
            "
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default CandidateDetails;