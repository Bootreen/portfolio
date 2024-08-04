import style from "./cv.style.js";
import { content } from "../../store/content";
import TimelineItem from "../../components/timeline-item/timeline-item";
import { usePortfolioStore } from "../../store/store";

const CurriculumVitae = () => {
  const { cv } = content;
  const locale = usePortfolioStore(({ activeLanguage }) => activeLanguage);
  return (
    <div className={style.cvContainer}>
      <ul className={style.timelineList}>
        {cv.map(({ date, title, description }, i) => (
          <TimelineItem
            key={i}
            date={date[locale]}
            title={title[locale]}
            description={description[locale]}
            isFirst={i === 0}
            isLast={i === cv.length - 1}
          />
        ))}
      </ul>
    </div>
  );
};

export default CurriculumVitae;
