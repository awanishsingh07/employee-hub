import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <div className="bg-white rounded-3xl shadow-sm mt-8 p-8">

      <h2 className="text-2xl font-bold text-gray-800">
        Search and View Employee List
      </h2>

      <div className="relative mt-6">

        <FiSearch
          size={22}
          className="absolute left-5 top-4 text-gray-400"
        />

        <input
          type="text"
          placeholder="Enter employee name, ID or department..."
          className="w-full border-2 border-indigo-200
                     rounded-xl
                     py-4
                     pl-14
                     pr-5
                     outline-none
                     focus:border-indigo-600"
        />

      </div>

    </div>
  );
}

export default SearchBar;