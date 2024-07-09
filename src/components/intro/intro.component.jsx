import {
  styleDescriptionContainer,
  styleDescriptionContent,
  styleDescriptionHeading,
  styleDescriptionParagraph,
  stylePhotoSquare,
  stylePhotoVertical,
} from "./intro.style";
import { content } from "../../store/content";
import { usePortfolioStore } from "../../store/store";

const Intro = () => {
  const locale = usePortfolioStore(({ activeLanguage }) => activeLanguage);
  const {
    about: { heading, description },
  } = content;
  return (
    <div className={styleDescriptionContainer}>
      <div className={styleDescriptionContent}>
        <img src='/photo-sq.jpg' className={stylePhotoSquare} />
        <img src='/photo-ver.jpg' className={stylePhotoVertical} />
        <div>
          <h1 className={styleDescriptionHeading}>{heading[locale]}</h1>
          {description[locale].map((paragraph, index) => (
            <p key={index} className={styleDescriptionParagraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
