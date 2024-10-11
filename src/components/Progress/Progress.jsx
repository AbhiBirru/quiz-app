import "./Progress.css";

const Progress = ({ index, numQuestions }) => {
  const radius = 75; // Increased radius of the circle
  const strokeWidth = 12; // Slightly increased stroke width
  const normalizedRadius = radius - strokeWidth * 2; // Adjusted radius for stroke width
  const circumference = normalizedRadius * 2 * Math.PI; // Circumference of the circle
  const strokeDashoffset =
    circumference - (index / numQuestions) * circumference; // Progress calculation

  return (
    <div className="progress-container">
      <svg className="progress-circle" height={radius * 2} width={radius * 2}>
        <circle
          stroke="#e6e6e6" // Background color
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#44B77B" // Progress bar color (green)
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset, transition: "stroke-dashoffset 0.35s" }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`} // Start progress from top
        />
      </svg>
      <div className="progress-text">
        <span className="current-index">{index + 1}</span>
        <span className="total-length">/{numQuestions}</span>
      </div>
    </div>
  );
};

export default Progress;
