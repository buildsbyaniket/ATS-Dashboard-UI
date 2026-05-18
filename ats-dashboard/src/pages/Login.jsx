import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaEnvelope,
  FaLock,
  FaArrowRight,
} from "react-icons/fa";

import { motion } from "framer-motion";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div
      className="
      min-h-screen
      bg-[#030712]
      flex
      items-center
      justify-center
      overflow-hidden
      relative
      px-5
    "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
        absolute
        top-[-150px]
        left-[-100px]
        w-[450px]
        h-[450px]
        rounded-full
        bg-indigo-600/20
        blur-[120px]
      "
      />

      <div
        className="
        absolute
        bottom-[-150px]
        right-[-100px]
        w-[450px]
        h-[450px]
        rounded-full
        bg-blue-600/20
        blur-[120px]
      "
      />

      {/* LOGIN CARD */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
        relative
        z-10
        w-full
        max-w-[480px]
        bg-[#081028]/90
        border
        border-white/[0.06]
        backdrop-blur-2xl
        rounded-[32px]
        p-10
        shadow-2xl
      "
      >
        {/* LOGO */}
        <div className="flex items-center gap-4 mb-10">
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
            shadow-lg
            shadow-indigo-500/30
          "
          >
            <span className="text-2xl">
              🚀
            </span>
          </div>

          <div>
            <h1
              className="
              text-4xl
              font-black
              text-white
              leading-none
            "
            >
              ATS Pro
            </h1>

            <p className="text-slate-400 mt-1">
              Recruitment Dashboard
            </p>
          </div>
        </div>

        {/* TITLE */}
        <div className="mb-8">
          <h2
            className="
            text-3xl
            font-bold
            text-white
          "
          >
            Welcome Back 👋
          </h2>

          <p className="text-slate-400 mt-2">
            Login to manage candidates &
            recruitment analytics.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >
          {/* EMAIL */}
          <div>
            <label
              className="
              text-slate-300
              text-sm
              mb-3
              block
            "
            >
              Email Address
            </label>

            <div
              className="
              flex
              items-center
              bg-[#020817]
              border
              border-white/[0.06]
              rounded-2xl
              px-5
              h-[64px]
              focus-within:border-indigo-500
              transition-all
            "
            >
              <FaEnvelope className="text-slate-500" />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="
                bg-transparent
                outline-none
                text-white
                ml-4
                w-full
                placeholder:text-slate-500
              "
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label
              className="
              text-slate-300
              text-sm
              mb-3
              block
            "
            >
              Password
            </label>

            <div
              className="
              flex
              items-center
              bg-[#020817]
              border
              border-white/[0.06]
              rounded-2xl
              px-5
              h-[64px]
              focus-within:border-indigo-500
              transition-all
            "
            >
              <FaLock className="text-slate-500" />

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="
                bg-transparent
                outline-none
                text-white
                ml-4
                w-full
                placeholder:text-slate-500
              "
              />
            </div>
          </div>

          {/* REMEMBER */}
          <div
            className="
            flex
            items-center
            justify-between
            text-sm
          "
          >
            <label
              className="
              flex
              items-center
              gap-2
              text-slate-400
            "
            >
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="
              text-indigo-400
              hover:text-indigo-300
            "
            >
              Forgot Password?
            </button>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="
            w-full
            h-[64px]
            rounded-2xl
            bg-gradient-to-r
            from-indigo-600
            to-blue-600
            hover:from-indigo-500
            hover:to-blue-500
            text-white
            font-bold
            text-lg
            flex
            items-center
            justify-center
            gap-3
            transition-all
            duration-300
            hover:scale-[1.02]
            shadow-lg
            shadow-indigo-500/30
          "
          >
            Login
            <FaArrowRight />
          </button>
        </form>

        {/* FOOTER */}
        <p
          className="
          text-center
          text-slate-500
          text-sm
          mt-8
        "
        >
          © 2025 ATS Pro Dashboard
        </p>
      </motion.div>
    </div>
  );
}

export default Login;