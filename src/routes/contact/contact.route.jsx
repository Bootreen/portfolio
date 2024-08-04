import style from "./contact.style";

const Contact = () => {
  return (
    <article className={style.contactContainer}>
      <ul>
        <li>
          <a className={style.link} href='mailto:alex@tangelocat.com'>
            alex@tangelocat.com
          </a>
        </li>
        <li className={style.listElement}>
          Telegram:{" "}
          <a className={style.link} href='https://t.me/bootreen'>
            @bootreen
          </a>
        </li>
        <li>
          <a
            className={style.link}
            href='https://www.linkedin.com/in/alex-bootreen/'
          >
            LinkedIn/in/alex-bootreen
          </a>
        </li>
        <li>
          <a className={style.link} href='https://github.com/bootreen'>
            GitHub/bootreen
          </a>
        </li>
      </ul>
    </article>
  );
};

export default Contact;
