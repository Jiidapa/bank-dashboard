const Progress = ({ percent }: { percent: number }) => {
  return (
    <div className="main-acc__circle">
      <svg className="graph-bar" width="100%" height="100%" viewBox="0 0 42 42">
        <circle
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="rgba(0,0,0,0.07)"
          strokeWidth="1.5"
        ></circle>
        <circle
          className="gauge"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDashoffset="25"
          style={{ strokeDasharray: "24 76" }}
        ></circle>
      </svg>
      <div className="main-acc__num">
        <span className="percent">{percent}</span>
        <span className="unit">%</span>
      </div>
    </div>
  );
};

export default Progress;
