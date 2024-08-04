import style from "./timeline-item.style.js";
import TimelineIcon from "../timeline-icon/timeline-icon";

const TimelineItem = ({ date, title, content, isFirst, isLast }) => {
  return (
    <li className={style.timelineContainer}>
      {!isFirst && <hr />}
      <div className={style.timelineDate}>{date}</div>
      <TimelineIcon />
      <div className={style.timelineElement}>
        <div className={style.timelineExpandable}>
          <input type='checkbox' />
          <div className={style.timelineExpandableTitle}>{title}</div>
          <div className={style.timelineExpandableContent}>
            <p>{content}</p>
          </div>
        </div>
      </div>
      {!isLast && <hr />}
    </li>
  );
};

export default TimelineItem;
