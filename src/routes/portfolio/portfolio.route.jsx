import {
  styleProjectsContainer,
  styleProjectsContainerLarge,
  styleProjectsContainerHuge,
  styleProjectsColumn,
} from "./portfolio.style";
import { clsx } from "clsx";
import ProjectCard from "../../components/project-card/project-card.component";
import { content } from "../../store/content";
import { usePortfolioStore } from "../../store/store";

const Portfolio = () => {
  const { projects } = content;
  const locale = usePortfolioStore(({ activeLanguage }) => activeLanguage);
  const { width: windowWidth } = usePortfolioStore(
    ({ windowDimentions }) => windowDimentions
  );
  const isLarge = windowWidth >= 1280;
  const isHuge = windowWidth >= 1920;
  const columns = new Array(isHuge ? 3 : isLarge ? 2 : 1).fill(0);
  return (
    <div
      className={clsx(
        styleProjectsContainer, //                 default grid layout - 1 column
        isLarge && styleProjectsContainerLarge, // windowWidth >= 1280 - 2 columns
        isHuge && styleProjectsContainerHuge //    windowWidth >= 1920 - 3 columns
      )}
    >
      {columns.map((_, columnIndex) => (
        <div key={columnIndex} className={styleProjectsColumn}>
          {projects[locale].map(
            ({ title, thumbnail, features, description, buttons }, index) => {
              // dynamically distribute project cards to the separate columns
              // but with row order like this:
              // columns:   1       2         3
              //          ----- -------- -----------
              // element  | 0 | | 0  1 | | 0  1  2 |
              // indices  | 1 | | 2  3 | | 3  4  5 |
              //          | 2 | | 4  5 | | 6  7  8 |
              // ...
              if (index % columns.length === columnIndex)
                return (
                  <ProjectCard
                    key={index}
                    title={title}
                    thumbnail={thumbnail}
                    features={features}
                    description={description}
                    buttons={buttons}
                    isChecked={index === 0}
                  />
                );
            }
          )}
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
