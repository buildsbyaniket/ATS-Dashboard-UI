import { FaSearch } from "react-icons/fa";

function SearchBar({ value, onChange }) {
  return (
    <div
      className="
        flex
        items-center
        h-14
        px-5
        rounded-2xl
        bg-[#081028]
        border
        border-white/[0.05]
        flex-1
      "
    >
      <FaSearch className="text-slate-500" />

      <input
        type="text"
        placeholder="Search candidates..."
        value={value}
        onChange={onChange}
        className="
          bg-transparent
          outline-none
          text-white
          ml-4
          w-full
        "
      />
    </div>
  );
}

export default SearchBar;