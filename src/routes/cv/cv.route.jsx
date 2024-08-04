import TimelineItem from "../../components/timeline-item/timeline-item";
import style from "./cv.style.js";

const CurriculumVitae = () => {
  return (
    <article className={style.cvContainer}>
      <ul className={style.timelineList}>
        <TimelineItem
          date='from 2024'
          title='Further training as Fullstack developer'
          content='Taktsoft Talents Bootcamp, Bonn. Learning the following technologies: RESTful APIs, Node.js, Express, SQL & NoSQL (Postgres, Mongo DB), CRUD operations.'
          isFirst={true}
          isLast={false}
        />
        <TimelineItem
          date='from 2024'
          title='Further training as Fullstack developer'
          content='Taktsoft Talents Bootcamp, Bonn. Learning the following technologies: RESTful APIs, Node.js, Express, SQL & NoSQL (Postgres, Mongo DB), CRUD operations.'
          isFirst={false}
          isLast={false}
        />
        <TimelineItem
          date='from 2024'
          title='Further training as Fullstack developer'
          content='Taktsoft Talents Bootcamp, Bonn. Learning the following technologies: RESTful APIs, Node.js, Express, SQL & NoSQL (Postgres, Mongo DB), CRUD operations.'
          isFirst={false}
          isLast={true}
        />
      </ul>
    </article>
  );
};

export default CurriculumVitae;
