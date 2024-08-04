import style from "./portfolio.style";
import { content } from "../../store/content";
import { clsx } from "clsx";
import { useEffect } from "react";
import { useParams, useNavigate, Outlet } from "react-router-dom";
import { usePortfolioStore } from "../../store/store";
import { PATHS } from "../../store/paths";
import { MEDIA } from "../../store/constants";

const Portfolio = () => {
  const { pageNumber } = useParams();
  const navigate = useNavigate();
  const { projects } = content;
  const { width: windowWidth, height: windowHeight } = usePortfolioStore(
    ({ windowDimentions }) => windowDimentions
  );
  const { WIDTH_SM, WIDTH_XL, WIDTH_2XL, HEIGHT_XL, HEIGHT_2XL } = MEDIA;
  const isLarge = windowWidth >= WIDTH_XL;
  const isHuge = windowWidth >= WIDTH_2XL;
  const maxColumns = isHuge ? 3 : isLarge ? 2 : 1;
  const maxRows =
    windowHeight >= HEIGHT_2XL && windowWidth > WIDTH_SM
      ? 3
      : windowHeight >= HEIGHT_XL && windowWidth > WIDTH_SM
      ? 2
      : 1;
  const pages = new Array(
    Math.ceil(projects.length / (maxColumns * maxRows))
  ).fill(0);
  const { PARENT } = PATHS;
  // set the 1st page in 2 cases:
  // 1. On the first Portfolio route render
  // 2. If page number is higher than calculated total pages' number
  // (user resized viewport and now it can display more elements per page)
  useEffect(() => {
    if (!pageNumber || pageNumber > pages.length) navigate(PARENT + 1);
  });

  return (
    <div className={style.projectsPageContainer}>
      <div className={style.portfolioPaginator}>
        <h2></h2>
        {pages.map((_, i) => (
          <button
            key={i}
            className={clsx(
              style.portfolioPageButton,
              pageNumber == i + 1 && style.portfolioPageButtonActive
            )}
            onClick={() => navigate(PARENT + (i + 1))}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <Outlet context={[isLarge, isHuge, maxColumns, maxRows]} />
    </div>
  );
};

export default Portfolio;
