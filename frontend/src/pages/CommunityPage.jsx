import { motion } from "framer-motion";
import CommunityPage from "../components/CommunityPageComponents/CommunityPage";
import { pageVariants } from "../animations/variants";

export default function CommunityPageRoute() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="min-h-screen pt-14 bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white"
    >
      <CommunityPage />
    </motion.div>
  );
}

