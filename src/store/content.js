export const content = {
  menuItems: {
    // for some yet unknown reason isActive attribute from NavLink
    // doesn't work properly when rendering menu items from array
    // so, for now I render each of them separately
    about: { EN: "About", DE: "Über mich", UA: "Про мене" },
    portfolio: { EN: "Portfolio", DE: "Portfolio", UA: "Роботи" },
    cv: { EN: "CV", DE: "CV", UA: "CV" },
    contact: { EN: "Contact", DE: "Kontakt", UA: "Контакти" },
  },
  footer: {
    butrin: {
      EN: `© ${new Date().getFullYear()}, Oleksii Butrin`,
      DE: `© ${new Date().getFullYear()}, Oleksii Butrin`,
      UA: `© ${new Date().getFullYear()}, Олексій Бутрін`,
    },
    github: {
      EN: "I'm on Hithub",
      DE: "Ich bin auf Github",
      UA: "Я на Github",
    },
  },
  about: {
    heading: {
      EN: "Hello, I'm Oleksii Butrin",
      DE: "Hallo, ich heiße Oleksii Butrin",
      UA: "Привіт, я Олексій Бутрін",
    },
    description: {
      EN: [
        "My journey is passion, resilience, and continuous learning",
        'I obtained a bachelor\'s degree in "Computer Systems and Networks" and have worked in the information technology industry for over 20 years. Most of my career has been spent as a columnist and editor for various IT periodicals. This experience has allowed me to stay at the forefront of technological advancements and gain a deep understanding of the IT industry from a user perspective.',
        "The onset of the war in Ukraine forced me to seek new career opportunities, and I decided to return to my IT roots as an application developer.",
        "My current technology stack includes excellent knowledge of JavaScript, HTML, and CSS, as well as frameworks like React, Next.js, and Tailwind CSS.",
        "I am currently enrolled in the Taktsoft Fullstack Developer Bootcamp, honing my Frontend skills and further developing my Backend abilities, including server-side rendering, working with SQL and NoSQL databases, REST, OpenAPI, and more. My goal is to become a professional and versatile Fullstack developer.",
        "In the teams I've worked with, I have always been valued for my calm demeanor, persistence, attention to detail, and consistent sense of humor. I am fluent in Ukrainian, Russian, very proficient in English, and making progress in German.",
        "Let's collaborate to create something meaningful and impactful!",
      ],
      DE: [
        "Mein Lebensweg ist geprägt von Leidenschaft, Widerstandsfähigkeit und kontinuierlichem Lernen.",
        "Ich habe einen Bachelor-Abschluss in „Computer-Systeme und Netzwerke“ und habe über 20 Jahre in der Informationstechnologie-Branche gearbeitet. Ein Großteil meiner Karriere verbrachte ich als Kolumnist und Redakteur für verschiedene IT Online- und Printmedien. Diese Erfahrung ermöglichte es mir, stets an der Spitze des technologischen Fortschritts zu bleiben und ein tiefes Verständnis der IT-Branche aus Anwendersicht zu gewinnen.",
        "Der Beginn des Krieges in der Ukraine zwang mich, nach neuen Karrieremöglichkeiten zu suchen, und ich beschloss, zu meinen IT-Wurzeln als Anwendungsentwickler zurückzukehren.",
        "Mein aktueller Technologiestack umfasst hervorragende Kenntnisse in JavaScript, HTML und CSS sowie Frameworks wie React, Next.js und Tailwind CSS.",
        "Derzeit nehme ich am Taktsoft Fullstack Developer Bootcamp teil, um meine Frontend-Kenntnisse zu verfeinern und meine Backend-Fähigkeiten weiterzuentwickeln, einschließlich serverseitigem Rendering, Arbeiten mit SQL- und NoSQL-Datenbanken, REST, OpenAPI und mehr. Mein Ziel ist es, ein professioneller und vielseitiger Fullstack-Entwickler zu werden.",
        "In den Teams, in denen ich gearbeitet habe, wurde ich immer für meine ruhige Art, Beharrlichkeit, Liebe zum Detail und meinen beständigen Sinn für Humor geschätzt. Ich spreche fließend Ukrainisch, Russisch, sehr gut Englisch und mache Fortschritte im Deutschen.",
        "Lassen Sie uns zusammenarbeiten, um etwas Bedeutendes und Einflussreiches zu schaffen!",
      ],
      UA: [
        "Мій життєвий шлях — це пристрасть, стійкість і постійне навчання.",
        "Я отримав ступінь бакалавра за спеціальністю «Комп'ютерні системи та мережі» і понад 20 років пропрацював у індустрії інформаційних технологій. Більша частина моєї кар'єри пройшла в якості колумніста та редактора в різних IT-виданнях. Завдяки цьому я не тільки завжди залишався на передовій технологічного прогресу, але й зміг отримати глибоке розуміння IT-індустрії з користувацької точки зору.",
        "Початок війни в Україні змусив мене шукати нові кар'єрні можливості, і я вирішив повернутися до своїх IT-коренів як розробник додатків.",
        "Мій поточний стек технологій включає відмінне знання JavaScript, HTML і CSS, а також фреймворків React, Next.js і Tailwind CSS.",
        "Зараз я проходжу навчання в Taktsoft Fullstack Developer Bootcamp, відточуючи свої знання в галузі Frontend і додатково освоюючи Backend навички — серверний рендеринг, роботу з SQL і NoSQL базами даних, REST, OpenAPI та багато іншого. Моя мета — стати професійним і різностороннім Fullstack розробником.",
        "У колективах, де я працював, мене завжди цінували за спокійний характер, наполегливість і увагу до деталей, а також незмінне почуття гумору. Я вільно володію українською, російською, дуже добре англійською і просуваюся у вивченні німецької.",
        "Давайте співпрацювати, щоб створити щось значуще та впливове!",
      ],
    },
  },
  projects: {
    EN: [
      {
        title: "Frontend Quiz App",
        thumbnail: "/quiz.jpg",
        features: [
          "Mobile-ready design",
          "Answer options shuffling",
          "Answers' highlighting",
          "Fancy debrief",
        ],
        description: [
          "In this project, I participated not only as a developer but also as a team lead. I designed the project structure, the application logic, and selected the tools we used. Every day, I assigned tasks to other team members, monitored the progress, and assisted colleagues when necessary.",
          "The idea of using funny GIFs and its implementation was also my responsibility.",
        ],
        buttons: [
          { caption: "Open project", url: "https://roh-quiz.vercel.app/" },
          {
            caption: "Repository",
            url: "https://github.com/Bootreen/roh-quiz",
          },
        ],
      },
      {
        title: "CSS Methdologies",
        thumbnail: "/css-meth.jpg",
        features: [
          "Complex state logic",
          "Database browser component",
          "Code syntax highlighting",
          "Dynamic styles' switching",
        ],
        description: [
          "This project showcases various CSS methodologies, developed using the Next.js framework and the highlight.js library. It includes a sophisticated interactive web component — a database viewer featuring tabs, a list, quick search, and an advanced filter in a separate modal window. For the description, a custom lightweight markup language, similar to Markdown, is employed to denote sections and code snippets. A simple parser is implemented to process these descriptions and render them as React components.",
        ],
        buttons: [
          { caption: "Open project", url: "https://css-meth.vercel.app/" },
          {
            caption: "Repository",
            url: "https://github.com/Bootreen/css-meth",
          },
        ],
      },
      {
        title: "Calculator",
        thumbnail: "/calculator.jpg",
        features: [
          "Supports operations chaining",
          "Conventional order of operations",
          "Keyboard numpad can be used",
          "Supports decimals and negatives",
        ],
        description: [
          "This is a calculator built using React and React Hooks. Despite its compact code size, it offers numerous features: it displays the operation history in a separate indicator, supports working with decimals and negative numbers, and adheres to the conventional order of mathematical operations. As I developed it at the beginning of my journey into frontend development, it performs calculations using the eval() function. If I were to write it now, I would implement custom parsing and computation handling.",
        ],
        buttons: [
          {
            caption: "View on Codepen.io",
            url: "https://codepen.io/bootreen/pen/PoageKZ",
          },
        ],
      },
    ],
    DE: [
      {
        title: "Frontend-Quiz-App",
        thumbnail: "/quiz.jpg",
        features: [
          "Mobilfreundliches Design",
          "Antwortoptionen mischen",
          "Hervorhebung der Antworten",
          "Anschauliche Nachbesprechung",
        ],
        description: [
          "Bei diesem Projekt habe ich nicht nur als Entwickler, sondern auch als Teamleiter mitgewirkt. Ich habe die Projektstruktur, die Logik der Anwendung und die Auswahl der verwendeten Tools entworfen. Jeden Tag habe ich Aufgaben an andere Teammitglieder verteilt, den Fortschritt überwacht und bei Bedarf Kollegen unterstützt.",
          "Die Idee, lustige GIFs zu verwenden, und deren Umsetzung war ebenfalls meine Verantwortung.",
        ],
        buttons: [
          { caption: "Projekt öffnen", url: "https://roh-quiz.vercel.app/" },
          {
            caption: "Repository",
            url: "https://github.com/Bootreen/roh-quiz",
          },
        ],
      },
      {
        title: "CSS-Methodologien",
        thumbnail: "/css-meth.jpg",
        features: [
          "Komplexe Zustandslogik",
          "Datenbank-Browser-Komponente",
          "Syntax-Hervorhebung",
          "Dynamischer Stilwechsel",
        ],
        description: [
          "Dieses Projekt zeigt verschiedene CSS-Methodologien, entwickelt mit dem Next.js-Framework und der highlight.js-Bibliothek. Es enthält eine anspruchsvolle interaktive Web-Komponente — einen Datenbank-Betrachter mit Registerkarten, einer Liste, einer schnellen Suche und einem erweiterten Filter in einem separaten Modalfenster. Für die Beschreibung wird eine benutzerdefinierte, leichtgewichtige Auszeichnungssprache ähnlich Markdown verwendet, um Abschnitte und Code-Snippets zu kennzeichnen. Ein einfacher Parser wurde implementiert, um diese Beschreibungen zu verarbeiten und als React-Komponenten darzustellen.",
        ],
        buttons: [
          { caption: "Projekt öffnen", url: "https://css-meth.vercel.app/" },
          {
            caption: "Repository",
            url: "https://github.com/Bootreen/css-meth",
          },
        ],
      },
      {
        title: "Taschenrechner",
        thumbnail: "/calculator.jpg",
        features: [
          "Verkettung von Operationen",
          "Reihenfolge der Operationen",
          "Tastaturnummernblock nutzbar",
          "Dezimal- und negative Zahlen",
        ],
        description: [
          "Dies ist ein Taschenrechner, der mit React und React Hooks entwickelt wurde. Trotz seiner kompakten Codegröße bietet er zahlreiche Funktionen: Er zeigt den Verlauf der Operationen in einem separaten Indikator an, unterstützt die Arbeit mit Brüchen und negativen Zahlen und hält sich an die konventionelle Reihenfolge der mathematischen Operationen. Da ich ihn zu Beginn meines Frontend-Studiums geschrieben habe, führt er Berechnungen mit der eval()-Funktion durch. Wenn ich ihn jetzt schreiben würde, würde ich eine benutzerdefinierte Parser- und Berechnungslogik implementieren.",
        ],
        buttons: [
          {
            caption: "Auf Codepen.io anzeigen",
            url: "https://codepen.io/bootreen/pen/PoageKZ",
          },
        ],
      },
    ],
    UA: [
      {
        title: "Frontend Quiz App",
        thumbnail: "/quiz.jpg",
        features: [
          "Мобільний дизайн",
          "Рандомний порядок відповідей",
          "Підсвічування відповідей",
          "Класний розбір результатів",
        ],
        description: [
          "У цьому проекті я брав участь не тільки як розробник, але й як тімлід. Я розробив структуру проекту, логіку роботи додатку та обрав інструменти, які ми використовували. Щодня я розподіляв завдання серед інших членів команди, контролював хід роботи та допомагав колегам у разі необхідності.",
          "Ідея використання смішних GIF та їх реалізація також були моєю відповідальністю.",
        ],
        buttons: [
          { caption: "Відкрити проект", url: "https://roh-quiz.vercel.app/" },
          {
            caption: "Репозиторій",
            url: "https://github.com/Bootreen/roh-quiz",
          },
        ],
      },
      {
        title: "Методології CSS",
        thumbnail: "/css-meth.jpg",
        features: [
          "Складна логіка стану",
          "Компонент перегляду бази даних",
          "Підсвічування синтаксису коду",
          "Динамічна зміна стилів",
        ],
        description: [
          "Цей проект демонструє різні методології CSS, розроблені за допомогою фреймворку Next.js і бібліотеки highlight.js. Він включає складний інтерактивний веб-компонент — переглядач бази даних із вкладками, списком, швидким пошуком та розширеним фільтром у окремому модальному вікні. Для опису використовується спеціальна легка мова розмітки, схожа на Markdown, щоб позначати розділи та вставки коду. Було реалізовано простий парсер для обробки цих описів і рендерингу їх у компоненти React.",
        ],
        buttons: [
          { caption: "Відкрити проект", url: "https://css-meth.vercel.app/" },
          {
            caption: "Репозиторій",
            url: "https://github.com/Bootreen/css-meth",
          },
        ],
      },
      {
        title: "Калькулятор",
        thumbnail: "/calculator.jpg",
        features: [
          "Підтримує ланцюжок операцій",
          "Звичайний порядок операцій",
          "Можна використовувати numpad",
          "Десяткові та від’ємні числа",
        ],
        description: [
          "Це калькулятор, створений за допомогою React і React Hooks. Незважаючи на компактний розмір коду, він пропонує безліч функцій: він показує історію операцій в окремому індикаторі, підтримує роботу з дробами та від’ємними числами і дотримується звичайного порядку математичних операцій. Оскільки я розробив його на початку свого вивчення Frontend, він виконує обчислення за допомогою функції eval(). Якби я писав це зараз, я б реалізував власний парсинг і обробку обчислень.",
        ],
        buttons: [
          {
            caption: "Подивитися на Codepen.io",
            url: "https://codepen.io/bootreen/pen/PoageKZ",
          },
        ],
      },
    ],
  },
};
