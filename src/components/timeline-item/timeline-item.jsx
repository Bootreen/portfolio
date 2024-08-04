import style from "./timeline-item.style.js";
import parse from "html-react-parser";
import TimelineIcon from "../timeline-icon/timeline-icon";

const Description = ({ description }) => {
  const renderedDescription = description.map((paragraph, index) => {
    const [tag, content] = paragraph.split("---");
    if (tag === "ul") {
      let listCounter = index + 1;
      let list = "<ul>";
      while (listCounter < description.length) {
        const [listTag, listContent] = description[listCounter].split("---");
        list += `<${listTag}>${listContent}</${listTag}>`;
        ++listCounter;
      }
      list += "</ul>";
      return list;
    } else if (tag !== "li") return `<${tag}>${content}</${tag}>`;
  });
  return parse(renderedDescription.join(""));
};

const TimelineItem = ({ date, title, description, isFirst, isLast }) => {
  return (
    <li className={style.timelineContainer}>
      {!isFirst && <hr className={style.timelineConnection} />}
      <div className={style.timelineDate}>{date}</div>
      <TimelineIcon />
      <div className={style.timelineElement}>
        <div className={style.timelineExpandable}>
          <input type='checkbox' />
          <div className={style.timelineExpandableTitle}>{title}</div>
          <div className={style.timelineExpandableContent}>
            <Description description={description} />
          </div>
        </div>
      </div>
      {!isLast && <hr className={style.timelineConnection} />}
    </li>
  );
};

export default TimelineItem;
