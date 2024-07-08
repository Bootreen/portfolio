import { styleProjectsContainer } from "./portfolio.style";
import ProjectCard from "../../components/project-card/project-card.component";

const Portfolio = () => {
  return (
    <div className={styleProjectsContainer}>
      <ProjectCard />

      {/* <div className='collapse collapse-arrow bg-base-100 mb-4 rounded-lg'>
        <input type='radio' name='my-accordion-2' defaultChecked />
        <div className='collapse-title text-xl font-medium flex flex-row justify-start'>
          <img className='w-64 h-40 rounded-md m-4' src='/css-meth.jpg' />
          <div className='h-full p-4 self-center flex flex-col'>
            <h3 className='pl-5 pb-4 text-2xl text-secondary font-bold'>
              CSS Methdologies
            </h3>
            <ul className='pl-5 list-disc text-lg'>
              <li>Complex state logic</li>
              <li>Database browser component</li>
              <li>Code highlighting</li>
              <li>Dynamic styles switching</li>
            </ul>
          </div>
        </div>
        <div className='collapse-content prose m-auto'>
          <p className='ml-4'>
            This project showcases various CSS methodologies, developed using
            the Next.js framework and the highlight.js library. It includes a
            sophisticated interactive web component — a database viewer
            featuring tabs, a list, quick search, and an advanced filter in a
            separate modal window. For the description, a custom lightweight
            markup language, similar to Markdown, is employed to denote sections
            and code snippets. A simple parser is implemented to process these
            descriptions and render them as React components.
          </p>
          <div className='flex flex-row justify-end'>
            <button className='btn btn-accent mr-4 rounded-md'>
              Open project
            </button>
            <button className='btn btn-accent rounded-md'>Repository</button>
          </div>
        </div>
      </div>

      <div className='collapse collapse-arrow bg-base-100 mb-4 rounded-lg'>
        <input type='radio' name='my-accordion-2' defaultChecked />
        <div className='collapse-title text-xl font-medium flex flex-row justify-start'>
          <img className='w-64 h-40 rounded-md m-4' src='/calculator.jpg' />
          <div className='h-full p-4 self-center flex flex-col'>
            <h3 className='pl-5 pb-4 text-2xl text-secondary font-bold'>
              Calculator
            </h3>
            <ul className='pl-5 list-disc text-lg'>
              <li>Supports operations chaining</li>
              <li>Conventional order of operations</li>
              <li>Keyboard numpad can be used</li>
              <li>Supports decimals and negatives</li>
            </ul>
          </div>
        </div>
        <div className='collapse-content prose m-auto'>
          <p className='w-full'>
            This is a calculator built using React and React Hooks. Despite its
            compact code size, it offers numerous features: it displays the
            operation history in a separate indicator, supports working with
            fractions and negative numbers, and adheres to the conventional
            order of mathematical operations. As I developed it at the beginning
            of my journey into frontend development, it performs calculations
            using the eval() function. If I were to write it now, I would
            implement custom parsing and computation handling.
          </p>
          <div className='flex flex-row justify-end'>
            <button className='btn btn-accent mr-4 rounded-md'>
              Open project
            </button>
            <button className='btn btn-accent rounded-md'>Repository</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Portfolio;
