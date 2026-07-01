import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

function Navbar({ search, setSearch }) {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Left Section */}

        <div className="flex items-center gap-4">

          <motion.img
            whileHover={{
              scale: 1.08,
              rotate: 5,
            }}
            transition={{ duration: 0.2 }}
            src={logo}
            alt="EMS Logo"
            className="w-12 h-12 object-contain"
          />

          <div>

            <h1 className="text-3xl font-bold text-slate-800">
              White Feather Consultancy
            </h1>

            <p className="text-sm text-gray-500">
              Manage your employees efficiently
            </p>

          </div>

        </div>

        {/* Search */}

        <div className="relative w-[380px]">

          <FiSearch
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search employees..."
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              bg-gray-50
              py-3
              pl-12
              pr-4
              outline-none
              transition
              focus:border-indigo-500
              focus:ring-2
              focus:ring-indigo-200
            "
          />

        </div>

      </div>
    </motion.nav>
  );
}

export default Navbar;