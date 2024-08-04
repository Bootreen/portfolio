import style from "./timeline-item.style.js";
import TimelineIcon from "../timeline-icon/timeline-icon";

const DescriptionParagraph = ({ paragraph }) => (
  <p className={style.descriptionParagraph}>{paragraph}</p>
);

const DescriptionListItem = ({ listItem }) => (
  <li className={style.descriptionListItem}>{listItem}</li>
);

const DescriptionList = ({ list }) => (
  <ul className={style.descriptionList}>
    {list.map((listItem, i) => (
      <DescriptionListItem key={i} listItem={listItem} />
    ))}
  </ul>
);

const Description = ({ description }) => (
  <>
    {description.map((paragraph, i) => {
      const [tag, content] = paragraph.split("---");
      if (tag === "ul") {
        let list = [];
        for (let j = i + 1; j < description.length; ++j) {
          const [listTag, listItem] = description[j].split("---");
          if (listTag === "li") list.push(listItem);
        }
        return <DescriptionList key={i} list={list} />;
      } else if (tag !== "li")
        return <DescriptionParagraph key={i} paragraph={content} />;
    })}
  </>
);

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
