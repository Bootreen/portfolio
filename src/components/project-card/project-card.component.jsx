import style from "./project-card.style";

const ProjectCard = ({
  title,
  image,
  features,
  description,
  buttons,
  isChecked,
}) => (
  <div className={style.projectCardContainer}>
    <input type='radio' name='projects' defaultChecked={isChecked} />
    <div className={style.projectCardPreview}>
      <img className={style.projectCardThumbnail} src={image} />
      <div className={style.projectCardInfoContainer}>
        <h3 className={style.projectCardTitle}>{title}</h3>
        <ul className={style.projectCardFeatures}>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
    <div className={style.projectCardDetails}>
      <img className={style.projectCardImage} src={image} />
      {description.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <div className={style.projectCardButtonsContainer}>
        {buttons.map(({ caption, url }, index) => (
          <a key={index} className={style.navButton} href={url}>
            {caption}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;
