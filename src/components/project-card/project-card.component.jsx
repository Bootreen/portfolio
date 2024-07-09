import {
  styleProjectCardContainer,
  styleProjectCardPreview,
  styleProjectCardThumbnail,
  styleProjectCardImage,
  styleProjectCardInfoContainer,
  styleProjectCardTitle,
  styleProjectCardFeatures,
  styleProjectCardDetails,
  styleProjectCardButtonsContainer,
  styleNavButton,
} from "./project-card.style";

const ProjectCard = ({
  title,
  thumbnail,
  features,
  description,
  buttons,
  isChecked,
}) => (
  <div className={styleProjectCardContainer}>
    <input type='radio' name='projects' defaultChecked={isChecked} />
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
      <img className={styleProjectCardImage} src={thumbnail} />
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
);

export default ProjectCard;
