import { Link } from "react-router-dom";

import {
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";

function CandidateCard({ candidate }) {
  return (
    <div
      className="
        bg-slate-900
        border
        border-slate-800
        rounded-3xl
        p-5
        shadow-xl
      "
    >
      {/* TOP */}
      <div className="flex items-start gap-4">
        
        <img
          src={`https://i.pravatar.cc/150?img=${candidate.id + 10}`}
          alt=""
          className="
            w-14
            h-14
            rounded-2xl
            object-cover
          "
        />

        <div className="flex-1">
          
          <h2 className="text-white text-lg font-bold">
            {candidate.name}
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            {candidate.role}
          </p>

          <div className="flex items-center gap-2 text-slate-500 text-xs mt-2">
            <FaMapMarkerAlt />

            <span>{candidate.location}</span>
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div className="flex flex-wrap gap-2 mt-5">
        {candidate.skills?.map((skill, index) => (
          <span
            key={index}
            className="
              px-3
              py-1
              rounded-xl
              bg-slate-800
              text-slate-300
              text-xs
            "
          >
            {skill}
          </span>
        ))}
      </div>

      {/* FOOTER */}
      <div className="flex items-center justify-between mt-6">
        
        <div className="flex items-center gap-2 text-yellow-400">
          <FaStar />

          <span>
            {(candidate.score / 20).toFixed(1)}
          </span>
        </div>

        <Link to={`/candidate/${candidate.id}`}>
          <button
            className="
              px-4
              py-2
              rounded-xl
              bg-indigo-600
              hover:bg-indigo-500
              text-white
              text-sm
            "
          >
            Review
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CandidateCard;