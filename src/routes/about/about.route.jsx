import {
  descriptionContainer,
  descriptionContent,
  descriptionHeading,
  descriptionParagraph,
  photoSquare,
  photoVertical,
} from "./about.style";
import { content } from "../../store/content";
import { usePortfolioStore } from "../../store/store";

const About = () => {
  const locale = usePortfolioStore(({ activeLanguage }) => activeLanguage);
  const {
    about: { heading, description },
  } = content;
  return (
    <div className={descriptionContainer}>
      <div className={descriptionContent}>
        <img src='/photo-sq.jpg' className={photoSquare} />
        <img src='/photo-ver.jpg' className={photoVertical} />
        <div>
          <h1 className={descriptionHeading}>{heading[locale]}</h1>
          {description[locale].map((paragraph, index) => (
            <p key={index} className={descriptionParagraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
