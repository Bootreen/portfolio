import { homeContainer } from "./home.style";

const Home = () => {
  return (
    <article className={homeContainer}>
      <p>
        Hello, I’m Oleksii Butrin. My journey is one of passion, resilience, and
        continuous learning.
      </p>
      <p>
        I hold a Bachelor’s degree in Computer Systems and Networks from the
        State Technical University of Donetsk. With over 20 years as an IT
        columnist and editor, I have gained a deep understanding of user needs
        and technical knowledge. The onset of war prompted a return to my IT
        roots. My technical toolkit includes JavaScript, HTML, CSS, and
        frameworks like React and Next.js.
      </p>
      <p>
        Currently, I am advancing through the Taktsoft Fullstack Developer
        Bootcamp, learning backend technologies such as SQL, NoSQL databases,
        and API development, positioning me as a versatile Fullstack Developer.
        Beyond IT, I have managed projects at a flight school in Kyiv and
        founded a hot sauces brand, merging creativity with business acumen.
      </p>
      <p>
        Recognized for my calm demeanor, persistence, and attention to detail, I
        am fluent in Ukrainian, Russian, very good in English, and advancing in
        German.
      </p>
      <p>Let’s collaborate to create something meaningful and impactful!</p>
    </article>
  );
};

export default Home;
