import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import JobCard from "../components/cards/JobCard";

import jobs from "../data/jobs";

function Jobs() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020817] flex">
      
      {/* SIDEBAR */}
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      {/* MAIN CONTENT */}
      <div
        className="
        flex-1
        overflow-x-hidden
        p-4
        md:p-6
        lg:p-8
        lg:ml-[270px]
      "
      >
        {/* NAVBAR */}
        <Navbar setIsOpen={setIsOpen} />

        {/* PAGE HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-black text-white">
            Jobs
          </h1>

          <p className="text-slate-400 mt-3 text-sm md:text-lg">
            Manage all recruitment jobs
          </p>
        </div>

        {/* JOB GRID */}
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          2xl:grid-cols-3
          gap-8
        "
        >
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Jobs;