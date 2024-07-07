// import { aboutStyle } from "./about.style";

const About = () => {
  return (
    <div className='pt-12 pb-0 hero bg-base-200 min-h-screen md:pb-36'>
      <div className='hero-content flex-col lg:flex-row'>
        <img
          src='/photo-sq.jpg'
          className='max-w-xs rounded-lg shadow-2xl md:max-w-sm lg:hidden'
        />
        <img
          src='/photo-ver.jpg'
          className='hidden max-w-lg mr-6 rounded-lg shadow-2xl lg:block'
        />
        <div>
          <h1 className='pb-4 text-2xl text-center font-bold md:text-3xl lg:text-4xl lg:text-left xl:text-5xl'>
            Hello, I’m Oleksii Butrin
          </h1>
          <p className='py-3 text-base md:text-lg lg:text-xl'>
            My journey is one of passion, resilience, and continuous learning.
          </p>
          <p className='py-3 text-base md:text-lg lg:text-xl'>
            I hold a Bachelor’s degree in Computer Systems and Networks from the
            State Technical University of Donetsk. With over 20 years as an IT
            columnist and editor, I have gained a deep understanding of user
            needs and technical knowledge. The onset of war prompted a return to
            my IT roots. My technical toolkit includes JavaScript, HTML, CSS,
            and frameworks like React and Next.js.
          </p>
          <p className='py-3 text-base md:text-lg lg:text-xl'>
            Currently, I am advancing through the Taktsoft Fullstack Developer
            Bootcamp, learning backend technologies such as SQL, NoSQL
            databases, and API development, positioning me as a versatile
            Fullstack Developer. Beyond IT, I have managed projects at a flight
            school in Kyiv and founded a hot sauces brand, merging creativity
            with business acumen.
          </p>
          <p className='py-3 text-base md:text-lg lg:text-xl'>
            Recognized for my calm demeanor, persistence, and attention to
            detail, I am fluent in Ukrainian, Russian, very good in English, and
            advancing in German.
          </p>
          <p className='py-3 text-base md:text-lg lg:text-xl'>
            Let’s collaborate to create something meaningful and impactful!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
