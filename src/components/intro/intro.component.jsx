import style from "./intro.style";
import { content } from "../../store/content";
import { usePortfolioStore } from "../../store/store";

const Intro = () => {
  const locale = usePortfolioStore(({ activeLanguage }) => activeLanguage);
  const {
    about: { heading, description },
  } = content;
  return (
    <div className={style.descriptionContainer}>
      <div className={style.descriptionContent}>
        <img src='/photo-sq.jpg' className={style.photoSquare} />
        <img src='/photo-ver.jpg' className={style.photoVertical} />
        <div>
          <h1 className={style.descriptionHeading}>{heading[locale]}</h1>
          {description[locale].map((paragraph, index) => (
            <p key={index} className={style.descriptionParagraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
