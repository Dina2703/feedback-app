import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
// import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
import Loading from "./shared/Loading";

function FeedbackList({ handleDelete }) {
  const { feedback, isLoading } = useContext(FeedbackContext);
  console.log(feedback);
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No feedback</p>;
  }

  return isLoading ? (
    <Loading />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  //WITHOUT THE ANIMATION
  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // );
}

// propTypes with an array
// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       rating: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//     })
//   ),
// };

export default FeedbackList;
