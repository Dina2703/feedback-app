import PropTypes from 'prop-types';

function FeedbackStats({ feedback }) {
  //Calculate rating average
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  //toFixed() allows the average number can have one decimal place,replace() removes -> [.,]
    average = average.toFixed(1).replace(/[.,]0$/, '')

  console.log(average);

  return (
    <div>
      <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average }</h4>
      </div>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired
}

export default FeedbackStats;