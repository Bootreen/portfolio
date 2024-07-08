import {
  styleProjectCardContainer,
  styleProjectCardPreview,
  styleProjectCardThumbnail,
  styleProjectCardInfoContainer,
  styleProjectCardTitle,
  styleProjectCardFeatures,
  styleProjectCardDetails,
  styleProjectCardButtonsContainer,
  styleNavButton,
} from "./project-card.style";
import { content } from "../../store/content";
import { usePortfolioStore } from "../../store/store";

const ProjectCard = () => {
  const locale = usePortfolioStore(({ activeLanguage }) => activeLanguage);
  const { projects } = content;
  return projects[locale].map(
    ({ title, thumbnail, features, description, buttons }, index) => (
      <div key={index} className={styleProjectCardContainer}>
        <input type='radio' name='projects' defaultChecked={index === 0} />
        <div className={styleProjectCardPreview}>
          <img className={styleProjectCardThumbnail} src={thumbnail} />
          <div className={styleProjectCardInfoContainer}>
            <h3 className={styleProjectCardTitle}>{title}</h3>
            <ul className={styleProjectCardFeatures}>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styleProjectCardDetails}>
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className={styleProjectCardButtonsContainer}>
            {buttons.map(({ caption, url }, index) => (
              <a key={index} className={styleNavButton} href={url}>
                {caption}
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default ProjectCard;
