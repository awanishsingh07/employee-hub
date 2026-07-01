import { motion } from "framer-motion";

function StatsCard() {

    return (

        <motion.div

            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}

            className="bg-white rounded-3xl p-8 shadow-sm mt-8"

        >

            <p className="text-gray-500 text-lg">

                Total Employees

            </p>

            <div className="flex items-center gap-8 mt-4">

                <h2 className="text-6xl font-bold text-indigo-600">

                    1,248

                </h2>

                <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full">

                    this month

                </span>

            </div>

        </motion.div>

    );
}

export default StatsCard;