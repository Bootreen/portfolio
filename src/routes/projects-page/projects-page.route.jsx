import style from "./projects-page.style";
import { content } from "../../store/content";
import { clsx } from "clsx";
import { useParams, useOutletContext } from "react-router-dom";
import { usePortfolioStore } from "../../store/store";
import ProjectCard from "../../components/project-card/project-card.component";

const ProjectsPage = () => {
  const { projects } = content;
  const locale = usePortfolioStore(({ activeLanguage }) => activeLanguage);
  const { pageNumber } = useParams();
  const [isLarge, isHuge, maxColumns, maxRows] = useOutletContext();
  const columns = new Array(maxColumns).fill(0);

  return (
    <div
      className={clsx(
        style.projectsContainer, //                 default grid layout - 1 column
        isLarge && style.projectsContainerLarge, // windowWidth >= 1280 - 2 columns
        isHuge && style.projectsContainerHuge //    windowWidth >= 1920 - 3 columns
      )}
    >
      {columns.map((_, columnIndex) => (
        <div key={columnIndex} className={style.projectsColumn}>
          {projects
            .sort(({ id: a }, { id: b }) => a - b)
            // filter projects that belong to the current page
            .filter(
              (_, i) =>
                i > maxColumns * maxRows * (pageNumber - 1) - 1 &&
                i <= maxColumns * maxRows * pageNumber - 1
            )
            .map(
              (
                { project: { title, image, features, description, buttons } },
                index
              ) => {
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
                      title={title[locale]}
                      image={image[locale]}
                      features={features[locale]}
                      description={description[locale]}
                      buttons={buttons[locale]}
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

export default ProjectsPage;
