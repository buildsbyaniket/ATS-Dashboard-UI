import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Jobs from "../pages/Jobs";
import JobDetails from "../pages/JobDetails";

import Candidates from "../pages/Candidates";
import CandidateDetails from "../pages/CandidateDetails";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* AUTH */}
        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* JOBS */}
        <Route
          path="/jobs"
          element={<Jobs />}
        />

        <Route
          path="/jobs/:id"
          element={<JobDetails />}
        />

        {/* CANDIDATES */}
        <Route
          path="/candidates"
          element={<Candidates />}
        />

        <Route
          path="/candidate/:id"
          element={<CandidateDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;