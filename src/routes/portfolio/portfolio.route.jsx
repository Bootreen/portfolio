import { styleProjectsContainer } from "./portfolio.style";
import ProjectCard from "../../components/project-card/project-card.component";
import { content } from "../../store/content";
import { usePortfolioStore } from "../../store/store";

const Portfolio = () => {
  const locale = usePortfolioStore(({ activeLanguage }) => activeLanguage);
  const { projects } = content;
  return (
    <div className={styleProjectsContainer}>
      {projects[locale].map(
        ({ title, thumbnail, features, description, buttons }, index) => (
          <ProjectCard
            key={index}
            title={title}
            thumbnail={thumbnail}
            features={features}
            description={description}
            buttons={buttons}
            isChecked={index === 0}
          />
        )
      )}
    </div>
  );
};

export default Portfolio;
