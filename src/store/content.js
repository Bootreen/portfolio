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
      EN: "I'm on Github",
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
        "I am a seasoned web developer with an extensive background in the tech industry. My journey is defined by passion, resilience, and continuous learning. With over 20 years in the information technology industry, I have a deep understanding of the IT landscape from both a technical and user perspective.",
        "My expertise lies in TypeScript, JavaScript, HTML5, and CSS3. I am proficient with React and Next.js, and skilled in CSS tools such as SASS/SCSS, Tailwind CSS, NextUI, and Styled Components. My backend capabilities include working with SQL and NoSQL databases, particularly PostgreSQL and MongoDB, as well as technologies like Node.js/Express, REST, and GraphQL. Additionally, I am adept at state management using Redux and Zustand + Immer. I also have experience with generative AI APIs.",
        "Fluent in Ukrainian, Russian, and highly proficient in English, I am also making progress in German. In the teams I've worked with, I am valued for my trustworthiness, work ethic, persistence, attention to detail, and consistent sense of humor. I enjoy refining existing codebases and optimizing solutions for better performance and clean code.",
        "Let's collaborate to create something meaningful and impactful!",
      ],
      DE: [
        "Ich bin ein erfahrener Webentwickler mit umfassendem Hintergrund in der Technologiebranche. Meine Reise ist geprägt von Leidenschaft, Ausdauer und stetigem Lernen. Mit über 20 Jahren Erfahrung in der IT-Branche habe ich ein tiefes Verständnis der IT-Landschaft aus technischer und nutzerorientierter Sicht.",
        "Meine Expertise liegt in TypeScript, JavaScript, HTML5 und CSS3. Ich beherrsche React und Next.js und bin versiert im Umgang mit CSS-Tools wie SASS/SCSS, Tailwind CSS, NextUI und Styled Components. Meine Backend-Fähigkeiten umfassen die Arbeit mit SQL- und NoSQL-Datenbanken, besonders PostgreSQL und MongoDB, sowie Technologien wie Node.js/Express, REST und GraphQL. Außerdem bin ich erfahren im Zustandsmanagement mit Redux und Zustand + Immer. Ich habe auch Erfahrung mit generativen KI-APIs.",
        "Fließend in Ukrainisch und Russisch, mit ausgezeichneten Englischkenntnissen, verbessere ich zudem mein Deutsch. In den Teams, in denen ich gearbeitet habe, werde ich für meine Vertrauenswürdigkeit, Arbeitsmoral, Beharrlichkeit, Detailgenauigkeit und mein beständiges Gefühl für Humor geschätzt. Es bereitet mir Freude, bestehende Codebasen zu verfeinern und Lösungen für bessere Leistung und sauberen Code zu optimieren.",
        "Lassen Sie uns zusammenarbeiten, um etwas Sinnvolles und Wirkungvolles zu schaffen!",
      ],
      UA: [
        "Я досвідчений веб-розробник із великим досвідом у сфері технологій. Моя кар'єра визначена пристрастю, витривалістю та безперервним навчанням. З понад 20-річним досвідом у сфері інформаційних технологій я глибоко розумію ІТ-ландшафт як з технічного, так і з користувацького боку.",
        "Моя експертиза охоплює TypeScript, JavaScript, HTML5 і CSS3. Я добре володію React і Next.js, а також вміло працюю з CSS-інструментами, такими як SASS/SCSS, Tailwind CSS, NextUI та Styled Components. Мої бекенд-навички включають роботу з SQL і NoSQL базами даних, зокрема PostgreSQL і MongoDB, а також технологіями Node.js/Express, REST і GraphQL. Крім того, я добре володію управлінням станом додатків за допомогою Redux і Zustand + Immer. Також маю досвід роботи з generative AI API.",
        "Вільно володію українською та російською, відмінно володію англійською і вдосконалюю свої знання німецької. У командах, з якими я працював, мене цінують за надійність, робочу етику, наполегливість, увагу до деталей та незмінне почуття гумору. Мені подобається вдосконалювати існуючі бази коду та оптимізувати рішення для підвищення продуктивності й чистоти коду.",
        "Давайте разом створювати щось значуще та вагоме!",
      ],
    },
  },
  projects: [
    {
      id: 10,
      project: {
        title: {
          EN: "Sarge Obvious",
          DE: "Sarge Obvious",
          UA: "Sarge Obvious",
        },
        image: {
          EN: "/sarge-obvious.png",
          DE: "/sarge-obvious.png",
          UA: "/sarge-obvious.png",
        },
        features: {
          EN: [
            "Google Gemini AI API",
            "Formulas and code snippets support",
            "PostgreSQL for session storage",
            "Fully responsive",
          ],
          DE: [
            "Google Gemini AI API",
            "Formeln und Code-Snippets",
            "PostgreSQL für Sitzungsdaten",
            "Vollständig responsiv",
          ],
          UA: [
            "Google Gemini AI API",
            "Підтримка формул та код-сніпетів",
            "PostgreSQL для зберігання сесій",
            "Повністю адаптивний",
          ],
        },
        description: {
          EN: [
            "This AI-powered learning assistant called 'Sarge Obvious' generates study materials in real-time. It can be guides, flashcards, matching pairs, and quizzes for any given topic. My app adds to basic AI chat a feature, that it lacks — interactivity.",
            "It supports Clerk-based authentication with the ability to save session data.",
            "The app is mobile-ready, supports light/dark themes, and renders Markdown correctly with formulas and code snippets.",
          ],
          DE: [
            "Dieser KI-gestützte Lernassistent namens 'Sarge Offensichtlich' erstellt Lernmaterialien in Echtzeit. Es können Anleitungen, Lernkarten, Zuordnungspaare und Quizze für jedes Thema generiert werden. Meine App fügt dem grundlegenden KI-Chat eine fehlende Funktion hinzu — Interaktivität.",
            "Es unterstützt die Clerk-basierte Authentifizierung mit der Möglichkeit, Sitzungsdaten zu speichern.",
            "Die App ist für mobile Geräte optimiert, unterstützt helle/dunkle Themes und rendert Markdown korrekt mit Formeln und Code-Snippets.",
          ],
          UA: [
            "Цей навчальний асистент на базі штучного інтелекту під назвою 'Sarge Obvious' генерує навчальні матеріали в реальному часі. Це можуть бути гіди, картки, пари та вікторини для будь-якої теми. Моя програма додає до базового AI-чату те, чого йому бракує — інтерактивність.",
            "Підтримується автентифікація через Clerk з можливістю збереження сесійних даних.",
            "Додаток адаптований для мобільних пристроїв, підтримує світлу/темну тему та коректно відображає Markdown із формулами та код-сніпетами.",
          ],
        },
        buttons: {
          EN: [
            {
              caption: "Open project",
              url: "https://sarge-obvious.vercel.app/",
            },
            {
              caption: "Repository",
              url: "https://github.com/Bootreen/obvious",
            },
          ],
          DE: [
            {
              caption: "Projekt öffnen",
              url: "https://sarge-obvious.vercel.app/",
            },
            {
              caption: "Repository",
              url: "https://github.com/Bootreen/obvious",
            },
          ],
          UA: [
            {
              caption: "Відкрити проект",
              url: "https://sarge-obvious.vercel.app/",
            },
            {
              caption: "Репозиторій",
              url: "https://github.com/Bootreen/obvious",
            },
          ],
        },
      },
    },
    {
      id: 11,
      project: {
        title: {
          EN: "Frontend Quiz App",
          DE: "Frontend-Quiz-App",
          UA: "Frontend Quiz App",
        },
        image: {
          EN: "/quiz.jpg",
          DE: "/quiz.jpg",
          UA: "/quiz.jpg",
        },
        features: {
          EN: [
            "Mobile-ready design",
            "Answer options shuffling",
            "Answers' highlighting",
            "Fancy debrief",
          ],
          DE: [
            "Mobilfreundliches Design",
            "Antwortoptionen mischen",
            "Hervorhebung der Antworten",
            "Anschauliche Nachbesprechung",
          ],
          UA: [
            "Мобільний дизайн",
            "Рандомний порядок відповідей",
            "Підсвічування відповідей",
            "Класний розбір результатів",
          ],
        },
        description: {
          EN: [
            "In this project, I participated not only as a developer but also as a team lead. I designed the project structure, the application logic, and selected the tools we used. Every day, I assigned tasks to other team members, monitored the progress, and assisted colleagues when necessary.",
            "The idea of using funny GIFs and its implementation was also my responsibility.",
          ],
          DE: [
            "Bei diesem Projekt habe ich nicht nur als Entwickler, sondern auch als Teamleiter mitgewirkt. Ich habe die Projektstruktur, die Logik der Anwendung und die Auswahl der verwendeten Tools entworfen. Jeden Tag habe ich Aufgaben an andere Teammitglieder verteilt, den Fortschritt überwacht und bei Bedarf Kollegen unterstützt.",
            "Die Idee, lustige GIFs zu verwenden, und deren Umsetzung war ebenfalls meine Verantwortung.",
          ],
          UA: [
            "У цьому проекті я брав участь не тільки як розробник, але й як тімлід. Я розробив структуру проекту, логіку роботи додатку та обрав інструменти, які ми використовували. Щодня я розподіляв завдання серед інших членів команди, контролював хід роботи та допомагав колегам у разі необхідності.",
            "Ідея використання смішних GIF та їх реалізація також були моєю відповідальністю.",
          ],
        },
        buttons: {
          EN: [
            {
              caption: "Open project",
              url: "https://roh-quiz.vercel.app/",
            },
            {
              caption: "Repository",
              url: "https://github.com/Bootreen/roh-quiz",
            },
          ],
          DE: [
            {
              caption: "Projekt öffnen",
              url: "https://roh-quiz.vercel.app/",
            },
            {
              caption: "Repository",
              url: "https://github.com/Bootreen/roh-quiz",
            },
          ],
          UA: [
            {
              caption: "Відкрити проект",
              url: "https://roh-quiz.vercel.app/",
            },
            {
              caption: "Репозиторій",
              url: "https://github.com/Bootreen/roh-quiz",
            },
          ],
        },
      },
    },
    {
      id: 12,
      project: {
        title: {
          EN: "CSS Methodologies",
          DE: "CSS-Methodologien",
          UA: "Методології CSS",
        },
        image: {
          EN: "/css-meth.jpg",
          DE: "/css-meth.jpg",
          UA: "/css-meth.jpg",
        },
        features: {
          EN: [
            "Complex state logic",
            "Database browser component",
            "Code syntax highlighting",
            "Dynamic styles' switching",
          ],
          DE: [
            "Komplexe Zustandslogik",
            "Datenbank-Browser-Komponente",
            "Syntax-Hervorhebung",
            "Dynamischer Stilwechsel",
          ],
          UA: [
            "Складна логіка стану",
            "Компонент перегляду бази даних",
            "Підсвічування синтаксису коду",
            "Динамічна зміна стилів",
          ],
        },
        description: {
          EN: [
            "This project showcases various CSS methodologies, developed using the Next.js framework and the highlight.js library. It includes a sophisticated interactive web component — a database viewer featuring tabs, a list, quick search, and an advanced filter in a separate modal window. For the description, a custom lightweight markup language, similar to Markdown, is employed to denote sections and code snippets. A simple parser is implemented to process these descriptions and render them as React components.",
          ],
          DE: [
            "Dieses Projekt zeigt verschiedene CSS-Methodologien, entwickelt mit dem Next.js-Framework und der highlight.js-Bibliothek. Es enthält eine anspruchsvolle interaktive Web-Komponente — einen Datenbank-Betrachter mit Registerkarten, einer Liste, einer schnellen Suche und einem erweiterten Filter in einem separaten Modalfenster. Für die Beschreibung wird eine benutzerdefinierte, leichtgewichtige Auszeichnungssprache ähnlich Markdown verwendet, um Abschnitte und Code-Snippets zu kennzeichnen. Ein einfacher Parser wurde implementiert, um diese Beschreibungen zu verarbeiten und als React-Komponenten darzustellen.",
          ],
          UA: [
            "Цей проект демонструє різні методології CSS, розроблені за допомогою фреймворку Next.js і бібліотеки highlight.js. Він включає складний інтерактивний веб-компонент — переглядач бази даних із вкладками, списком, швидким пошуком та розширеним фільтром у окремому модальному вікні. Для опису використовується спеціальна легка мова розмітки, схожа на Markdown, щоб позначати розділи та вставки коду. Було реалізовано простий парсер для обробки цих описів і рендерингу їх у компоненти React.",
          ],
        },
        buttons: {
          EN: [
            {
              caption: "Open project",
              url: "https://css-meth.vercel.app/",
            },
            {
              caption: "Repository",
              url: "https://github.com/Bootreen/css-meth",
            },
          ],
          DE: [
            {
              caption: "Projekt öffnen",
              url: "https://css-meth.vercel.app/",
            },
            {
              caption: "Repository",
              url: "https://github.com/Bootreen/css-meth",
            },
          ],
          UA: [
            {
              caption: "Відкрити проект",
              url: "https://css-meth.vercel.app/",
            },
            {
              caption: "Репозиторій",
              url: "https://github.com/Bootreen/css-meth",
            },
          ],
        },
      },
    },
    {
      id: 13,
      project: {
        title: {
          EN: "Library Backend",
          DE: "Bibliotheks-Backend",
          UA: "Бекенд бібліотеки",
        },
        image: {
          EN: "/library.jpg",
          DE: "/library.jpg",
          UA: "/library.jpg",
        },
        features: {
          EN: [
            "Express + PostgreSQL",
            "Textbook project structure",
            "Error handling",
            "Bulk operations",
          ],
          DE: [
            "Express + PostgreSQL",
            "Vorbildliche Projektstruktur",
            "Fehlerbehandlung",
            "Massenoperationen",
          ],
          UA: [
            "Express + PostgreSQL",
            "Класична структура проекту",
            "Обробка помилок",
            "Масові операції",
          ],
        },
        description: {
          EN: [
            "An Express server for a group training project. Despite the training nature of the task, I approached the project in a professional manner. Controllers, routers, and a separate database layer are used. Beyond the basic requirements, I implemented bulk content addition (up to hundreds of records at a time) for testing convenience. Error handling is written for all database interactions, and comprehensive documentation is created for the project's API.",
          ],
          DE: [
            "Ein Express-Server für ein Gruppenprojekt. Trotz des Übungscharakters der Aufgabe habe ich das Projekt professionell angegangen. Controller, Router und eine separate Datenbankschicht werden verwendet. Über die Grundanforderungen hinaus habe ich das massenhafte Hinzufügen von Inhalten (bis zu Hunderten von Einträgen gleichzeitig) zur Erleichterung des Testens implementiert. Fehlerbehandlung ist für alle Datenbankinteraktionen geschrieben, und umfassende Dokumentation ist für die API des Projekts erstellt.",
          ],
          UA: [
            "Express-сервер для групового навчального проекту. Незважаючи на тренувальний характер завдання, я підійшов до проекту по-дорослому. Використовуються контролери, роутери, робота з БД винесена в окремий шар. Понад базове ТЗ реалізовано масове додавання контенту (до сотень записів за раз) для зручності тестування. Для всіх звернень до БД написана обробка помилок, а для API проекту складена вичерпна документація.",
          ],
        },
        buttons: {
          EN: [
            {
              caption: "Open project",
              url: "https://boot-library.onrender.com/",
            },
            {
              caption: "Repository",
              url: "https://github.com/Bootreen/library",
            },
          ],
          DE: [
            {
              caption: "Projekt öffnen",
              url: "https://boot-library.onrender.com/",
            },
            {
              caption: "Repository",
              url: "https://github.com/Bootreen/library",
            },
          ],
          UA: [
            {
              caption: "Відкрити проект",
              url: "https://boot-library.onrender.com/",
            },
            {
              caption: "Репозиторій",
              url: "https://github.com/Bootreen/library",
            },
          ],
        },
      },
    },
    {
      id: 14,
      project: {
        title: {
          EN: "Portfolio",
          DE: "Portfolio",
          UA: "Портфоліо",
        },
        image: {
          EN: "/portfolio.jpg",
          DE: "/portfolio.jpg",
          UA: "/portfolio.jpg",
        },
        features: {
          EN: [
            "Tailwind CSS + DaisyUI",
            "Adaptive layout",
            "Multilanguage support",
            "Light/Dark theme",
          ],
          DE: [
            "Tailwind CSS + DaisyUI",
            "Adaptives Layout",
            "Mehrsprachige Unterstützung",
            "Licht/Dunkel-Thema",
          ],
          UA: [
            "Tailwind CSS + DaisyUI",
            "Адаптивний макет",
            "Підтримка кількох мов",
            "Світла/Темна тема",
          ],
        },
        description: {
          EN: [
            "Who said a portfolio can't link to itself? 😎 In programming, recursion is quite normal.",
            "Seriously though, there are many interesting solutions here, be sure to check the repository. For example, this app detects user preferences for light and dark themes and automatically applies the right one. Manual switching is also supported. All content is localized in three languages and switches on the fly.",
            "One of the toughest features is properly displaying an HTML accordion in a grid, where the app constantly tracks the actual viewport width and adjusts the number of columns and project card sorting accordingly (see component portfolio.route.jsx).",
          ],
          DE: [
            "Wer hat gesagt, dass ein Portfolio nicht auf sich selbst verlinken kann? 😎 In der Programmierung ist Rekursion ganz normal.",
            "Aber im Ernst, hier gibt es viele interessante Lösungen, schauen Sie unbedingt im Repository vorbei. Zum Beispiel erkennt diese App Benutzerpräferenzen für helle und dunkle Themen und wählt automatisch die richtige Anzeige aus. Manuelles Umschalten wird ebenfalls unterstützt. Alle Inhalte sind in drei Sprachen lokalisiert und wechseln im laufenden Betrieb.",
            "Eine der schwierigsten Funktionen ist die ordnungsgemäße Anzeige eines HTML-Akkordeons im Raster, bei dem die App ständig die tatsächliche Viewport-Breite überwacht und die Anzahl der Spalten und die Sortierung der Projektkarten entsprechend anpasst (siehe Komponente portfolio.route.jsx).",
          ],
          UA: [
            "Хто сказав, що портфоліо не може посилатися на себе? 😎 У програмуванні рекурсія цілком звичайна річ.",
            "А якщо серйозно, тут реалізовано багато цікавих рішень, обов'язково зазирніть у репозиторій. Наприклад, цей додаток визначає переваги користувача для світлої і темної теми та автоматично вибирає відповідний варіант. Ручне переключення також підтримується. Весь контент локалізовано на три мови і змінюється на льоту.",
            "Одна з найскладніших функцій — правильне відображення HTML-акордеону в сітці, де додаток постійно відстежує фактичну ширину вікна і відповідно змінює кількість стовпців і сортування карток проектів (див. компонент portfolio.route.jsx).",
          ],
        },
        buttons: {
          EN: [
            {
              caption: "Repository",
              url: "https://github.com/Bootreen/portfolio",
            },
          ],
          DE: [
            {
              caption: "Repository",
              url: "https://github.com/Bootreen/portfolio",
            },
          ],
          UA: [
            {
              caption: "Репозиторій",
              url: "https://github.com/Bootreen/portfolio",
            },
          ],
        },
      },
    },
    {
      id: 15,
      project: {
        title: {
          EN: "Calculator",
          DE: "Taschenrechner",
          UA: "Калькулятор",
        },
        image: {
          EN: "/calculator.jpg",
          DE: "/calculator.jpg",
          UA: "/calculator.jpg",
        },
        features: {
          EN: [
            "Supports operation chaining",
            "Conventional order of operations",
            "Keyboard numpad can be used",
            "Supports decimals and negatives",
          ],
          DE: [
            "Verkettung von Operationen",
            "Reihenfolge der Operationen",
            "Tastaturnummernblock nutzbar",
            "Dezimal- und negative Zahlen",
          ],
          UA: [
            "Підтримує ланцюжок операцій",
            "Звичайний порядок операцій",
            "Можна використовувати numpad",
            "Десяткові та від'ємні числа",
          ],
        },
        description: {
          EN: [
            "This is a calculator built using React and React Hooks. Despite its compact code size, it offers numerous features: it displays the operation history in a separate indicator, supports working with decimals and negative numbers, and adheres to the conventional order of mathematical operations. As I developed it at the beginning of my journey into frontend development, it performs calculations using the eval() function. If I were to write it now, I would implement custom parsing and computation handling.",
          ],
          DE: [
            "Dies ist ein Taschenrechner, der mit React und React Hooks entwickelt wurde. Trotz seiner kompakten Codegröße bietet er zahlreiche Funktionen: Er zeigt den Verlauf der Operationen in einem separaten Indikator an, unterstützt die Arbeit mit Brüchen und negativen Zahlen und hält sich an die konventionelle Reihenfolge der mathematischen Operationen. Da ich ihn zu Beginn meines Frontend-Studiums geschrieben habe, führt er Berechnungen mit der eval()-Funktion durch. Wenn ich ihn jetzt schreiben würde, würde ich eine benutzerdefinierte Parser- und Berechnungslogik implementieren.",
          ],
          UA: [
            "Це калькулятор, створений за допомогою React і React Hooks. Незважаючи на компактний розмір коду, він пропонує безліч функцій: він показує історію операцій в окремому індикаторі, підтримує роботу з дробами та від'ємними числами і дотримується звичайного порядку математичних операцій. Оскільки я розробив його на початку свого вивчення Frontend, він виконує обчислення за допомогою функції eval(). Якби я писав це зараз, я б реалізував власний парсинг і обробку обчислень.",
          ],
        },
        buttons: {
          EN: [
            {
              caption: "View on Codepen.io",
              url: "https://codepen.io/bootreen/pen/PoageKZ",
            },
          ],
          DE: [
            {
              caption: "Auf Codepen.io anzeigen",
              url: "https://codepen.io/bootreen/pen/PoageKZ",
            },
          ],
          UA: [
            {
              caption: "Подивитися на Codepen.io",
              url: "https://codepen.io/bootreen/pen/PoageKZ",
            },
          ],
        },
      },
    },
    {
      id: 16,
      project: {
        title: {
          EN: "ToDo Reminder",
          DE: "ToDo-Erinnerung",
          UA: "Нагадувач ToDo",
        },
        image: {
          EN: "/reminder.jpg",
          DE: "/reminder.jpg",
          UA: "/reminder.jpg",
        },
        features: {
          EN: [
            "Slick minimalistic design",
            "Easy to use",
            "Create/check/delete tasks",
            "Fully responsive",
          ],
          DE: [
            "Minimalistisches Design",
            "Einfach zu bedienen",
            "Aufgaben verwalten",
            "Vollständig responsiv",
          ],
          UA: [
            "Мінімалістичний дизайн",
            "Простота у використанні",
            "Керування завданнями",
            "Повністю адаптивний",
          ],
        },
        description: {
          EN: [
            "In this training project, I practiced state management and creating simple yet visually appealing modern CSS styles suitable for both desktop and mobile devices.",
          ],
          DE: [
            "In diesem Trainingsprojekt habe ich nicht nur das Zustandsmanagement geübt, sondern auch das manuelle Erstellen einfacher, aber optisch ansprechender moderner CSS-Stile, die sowohl für Desktops als auch für mobile Geräte geeignet sind.",
          ],
          UA: [
            "У цьому тренувальному проєкті я практикував не тільки керування станом додатка, але й створення простих, але візуально привабливих сучасних CSS-стилів, придатних як для настільних систем, так і для мобільних пристроїв.",
          ],
        },
        buttons: {
          EN: [
            {
              caption: "Open project",
              url: "https://marv-todo.vercel.app/",
            },
            {
              caption: "Repository",
              url: "https://github.com/Bootreen/todo",
            },
          ],
          DE: [
            {
              caption: "Projekt öffnen",
              url: "https://marv-todo.vercel.app/",
            },
            {
              caption: "Repository",
              url: "https://github.com/Bootreen/todo",
            },
          ],
          UA: [
            {
              caption: "Відкрити проєкт",
              url: "https://marv-todo.vercel.app/",
            },
            {
              caption: "Репозиторій",
              url: "https://github.com/Bootreen/todo",
            },
          ],
        },
      },
    },
    {
      id: 17,
      project: {
        title: {
          EN: "User DB Viewer",
          DE: "Benutzer-DB-Viewer",
          UA: "Переглядач User DB",
        },
        image: {
          EN: "/table.jpg",
          DE: "/table.jpg",
          UA: "/table.jpg",
        },
        features: {
          EN: [
            "Column sorting",
            "Adjustable filters",
            "Filters chaining",
            "Highly scalable",
          ],
          DE: [
            "Spaltensortierung",
            "Anpassbare Filter",
            "Filterverknüpfung",
            "Hoch skalierbar",
          ],
          UA: [
            "Сортування стовпців",
            "Регульовані фільтри",
            "Чейнінг фільтрів",
            "Висока масштабованість",
          ],
        },
        description: {
          EN: [
            "Despite its apparent simplicity, this training project demonstrates several interesting solutions. All filters and controls are rendered by a single component, which takes all data from a preset file. This allows adding/removing filters on the fly without changing the main code — just add or remove the corresponding object in the preset. The app state is stored in a nested object, and Zustand and Immer libraries are used for managing these nested states.",
            "Chaining all user-selected filters to apply them to the data array is done using a special recursive function, chainFilter().",
          ],
          DE: [
            "Trotz seiner scheinbaren Einfachheit zeigt dieses Trainingsprojekt mehrere interessante Lösungen. Alle Filter und Steuerelemente werden von einer einzigen Komponente gerendert, die alle Daten aus einer Voreinstellungsdatei entnimmt. Dies ermöglicht das Hinzufügen/Entfernen von Filtern ohne Änderung des Hauptcodes: einfach das entsprechende Objekt in der Voreinstellung hinzufügen oder entfernen. Der Anwendungszustand wird in einem verschachtelten Objekt gespeichert, und die Bibliotheken Zustand und Immer werden zur Verwaltung dieser verschachtelten Zustände verwendet.",
            "Die Verknüpfung aller vom Benutzer ausgewählten Filter zur Anwendung auf das Datenarray erfolgt mithilfe einer speziellen rekursiven Funktion, chainFilter().",
          ],
          UA: [
            "Незважаючи на очевидну простоту, цей навчальний проєкт демонструє кілька цікавих рішень. Усі фільтри та елементи керування відображаються одним компонентом, який бере всі дані з файлу пресету. Це дозволяє додавати/видаляти фільтри без зміни основного коду — достатньо додати або видалити відповідний об'єкт у пресеті. Стан додатку зберігається у вкладеному об'єкті, і для управління цими вкладеними станами використовуються бібліотеки Zustand та Immer.",
            "Зв'язування всіх вибраних користувачем фільтрів для застосування їх до масиву даних здійснюється за допомогою спеціальної рекурсивної функції chainFilter().",
          ],
        },
        buttons: {
          EN: [
            {
              caption: "Open project",
              url: "https://react-array.vercel.app/",
            },
            {
              caption: "Repository",
              url: "https://github.com/Bootreen/react-array",
            },
          ],
          DE: [
            {
              caption: "Projekt öffnen",
              url: "https://react-array.vercel.app/",
            },
            {
              caption: "Repository",
              url: "https://github.com/Bootreen/react-array",
            },
          ],
          UA: [
            {
              caption: "Відкрити проєкт",
              url: "https://react-array.vercel.app/",
            },
            {
              caption: "Репозиторій",
              url: "https://github.com/Bootreen/react-array",
            },
          ],
        },
      },
    },
    {
      id: 18,
      project: {
        title: {
          EN: "Drum Machine",
          DE: "Drum-Maschine",
          UA: "Драм-машина",
        },
        image: {
          EN: "/drum-machine.jpg",
          DE: "/drum-machine.jpg",
          UA: "/drum-machine.jpg",
        },
        features: {
          EN: [
            "Custom Knob component",
            "4 sound banks",
            "Keyboard input",
            "Swipe control",
          ],
          DE: [
            "Benutzerdefinierter Knopf",
            "4 Soundbänke",
            "Tastatureingabe",
            "Wischsteuerung",
          ],
          UA: [
            "Користувальницький регулятор",
            "4 банки звуків",
            "Введення з клавіатури",
            "Керування свайпом",
          ],
        },
        description: {
          EN: [
            "In this project, I practiced sound playback in web apps and creating custom React components. I created two knob components for volume control and switching sound banks. From a more experienced developer perspective, I'd improve element addressing by using event.target instead of IDs. Despite this 'childish' approach, it works flawlessly.",
          ],
          DE: [
            "In diesem Projekt habe ich die Wiedergabe von Sounds in Web-Apps und die Erstellung benutzerdefinierter React-Komponenten geübt. Ich habe zwei Knopfkomponenten für die Lautstärkeregelung und das Umschalten der Soundbänke erstellt. Aus der Sicht eines erfahreneren Entwicklers würde ich die Adressierung von HTML-Elementen durch event.target und nicht durch ID verbessern. Trotz dieses 'kindischen' Ansatzes funktioniert es einwandfrei.",
          ],
          UA: [
            "У цьому проєкті я практикував відтворення звуків у веб-додатках і створення користувацьких компонентів React. Я створив два компоненти регулятора для керування гучністю та перемикання банків звуків. З точки зору досвідченішого розробника, я б покращив звернення до HTML-елементів через event.target замість ID. Незважаючи на цей 'дитячий' підхід, він працює бездоганно.",
          ],
        },
        buttons: {
          EN: [
            {
              caption: "View on Codepen.io",
              url: "https://codepen.io/bootreen/pen/RwJEymx",
            },
          ],
          DE: [
            {
              caption: "Auf Codepen.io anzeigen",
              url: "https://codepen.io/bootreen/pen/RwJEymx",
            },
          ],
          UA: [
            {
              caption: "Переглянути на Codepen.io",
              url: "https://codepen.io/bootreen/pen/RwJEymx",
            },
          ],
        },
      },
    },
    {
      id: 19,
      project: {
        title: {
          EN: "Markdown Previewer",
          DE: "Markdown-Vorschau",
          UA: "Переглядач Markdown",
        },
        image: {
          EN: "/markdown.jpg",
          DE: "/markdown.jpg",
          UA: "/markdown.jpg",
        },
        features: {
          EN: [
            "Wise tool choice",
            "Realtime edit/view",
            "Color syntax",
            "Tiny: only a dozen lines!",
          ],
          DE: [
            "Kluger Tool-Choice",
            "Echtzeit Bearbeitung/Ansicht",
            "Farbige Syntax",
            "Klein: 10 Zeilen!",
          ],
          UA: [
            "Розумний вибір інструментів",
            "Редагування/перегляд",
            "Підсвічування синтаксису",
            "Малий: лише 10 рядків!",
          ],
        },
        description: {
          EN: [
            "This small project is a great illustration of how effective toolset choice can solve application tasks without reinventing the wheel. Besides React, this app uses three libraries: Marked.js, HTML-react-parser, and Highlight.js that do all the work. As a result, the task was solved in just a few lines of code.",
          ],
          DE: [
            "Dieses kleine Projekt zeigt hervorragend, wie die Wahl der richtigen Werkzeuge Anwendungsaufgaben lösen kann, ohne das Rad neu zu erfinden. Neben React verwendet diese App drei Bibliotheken: Marked.js, HTML-react-parser und Highlight.js, die die ganze Arbeit erledigen. Dadurch wurde die Aufgabe in nur wenigen Codezeilen gelöst.",
          ],
          UA: [
            "Цей невеликий проєкт чудово ілюструє, як вибір правильного набору інструментів може вирішити завдання додатків без винаходу велосипеда. Крім React, цей додаток використовує три бібліотеки: Marked.js, HTML-react-parser та Highlight.js, які виконують всю роботу. В результаті завдання було вирішено всього за кілька рядків коду.",
          ],
        },
        buttons: {
          EN: [
            {
              caption: "View on Codepen.io",
              url: "https://codepen.io/bootreen/pen/oNyqBzy",
            },
          ],
          DE: [
            {
              caption: "Auf Codepen.io anzeigen",
              url: "https://codepen.io/bootreen/pen/oNyqBzy",
            },
          ],
          UA: [
            {
              caption: "Переглянути на Codepen.io",
              url: "https://codepen.io/bootreen/pen/oNyqBzy",
            },
          ],
        },
      },
    },
    {
      id: 20,
      project: {
        title: {
          EN: "Laptop Store Mockup",
          DE: "Laptop-Laden-Mockup",
          UA: "Макет магазину",
        },
        image: {
          EN: "/wbl.jpg",
          DE: "/wbl.jpg",
          UA: "/wbl.jpg",
        },
        features: {
          EN: [
            "CSS gallery hack",
            "Keyboard support",
            "Fully responsive",
            "Graceful degradation",
          ],
          DE: [
            "CSS-Galerie-Hack",
            "Tastaturunterstützung",
            "Vollständig responsiv",
            "Anmutige Degradierung",
          ],
          UA: [
            "CSS-хак для галереї",
            "Підтримка клавіатури",
            "Повністю адаптивний",
            "Graceful degradation",
          ],
        },
        description: {
          EN: [
            "In this project, I tried several new approaches. I was curious if a carousel for viewing a gallery could be implemented purely with CSS, without extra script code, and found several ways to do this. I chose the most unusual approach: through deep modification of a form with radio buttons. While this approach works and can be made responsive for mobile devices, it's better to use more standard solutions in real projects, leaving such experiments purely for academic interest.",
            "Also, my favorite approach, Graceful degradation, is used here, with simplification, reduction, or complete disabling of HTML elements as the viewport size decreases, maintaining readability even on small screens. Check how the table on the Specs tab behaves when you resize the screen.",
          ],
          DE: [
            "In diesem Projekt habe ich mehrere neue Ansätze ausprobiert. Ich war neugierig, ob ein Karussell zur Anzeige einer Galerie rein mit CSS und ohne zusätzlichen Skriptcode implementiert werden kann und fand mehrere Wege dies zu tun. Ich wählte den ungewöhnlichsten Ansatz — durch tiefe Modifikation eines Formulars mit Radio-Buttons. Während dieser Ansatz funktioniert und für mobile Geräte responsiv gemacht werden kann, ist es in realen Projekten besser, standardmäßigere Lösungen zu verwenden, und solche Experimente rein akademischem Interesse zu überlassen.",
            "Auch mein Lieblingsansatz, die Anmutige Degradierung, wird hier verwendet, mit Vereinfachung, Reduktion oder vollständigem Deaktivieren von HTML-Elementen bei abnehmender Viewport-Größe, um die Lesbarkeit auch auf kleinen Bildschirmen zu erhalten. Schauen Sie sich an, wie sich die Tabelle auf der Registerkarte Specs verhält, wenn Sie die Bildschirmgröße ändern.",
          ],
          UA: [
            "У цьому проєкті я вирішив спробувати кілька нових підходів. Мені було цікаво, чи можна реалізувати карусель для перегляду галереї тільки за допомогою CSS без додаткового скриптового коду, і я знайшов кілька способів це зробити. Я обрав найоригінальніший підхід, через глибоку модифікацію форми з радіо-кнопками. Незважаючи на те, що цей підхід працює і його навіть можна адаптувати для мобільних пристроїв, у реальних проєктах краще використовувати більш стандартні рішення, залишивши такі експерименти для академічного інтересу.",
            "Також тут використаний мій улюблений підхід, граціозна деградація, зі спрощенням, скороченням або повним відключенням HTML-елементів при зменшенні розміру viewport, що дозволяє зберігати читабельність навіть на маленьких екранах. Подивіться, як веде себе таблиця на вкладці Специфікації при зміні розміру екрану.",
          ],
        },
        buttons: {
          EN: [
            {
              caption: "Open project",
              url: "https://csshacks.vercel.app/",
            },
            {
              caption: "Repository",
              url: "https://github.com/Bootreen/css-final",
            },
          ],
          DE: [
            {
              caption: "Projekt öffnen",
              url: "https://csshacks.vercel.app/",
            },
            {
              caption: "Repository",
              url: "https://github.com/Bootreen/css-final",
            },
          ],
          UA: [
            {
              caption: "Відкрити проєкт",
              url: "https://csshacks.vercel.app/",
            },
            {
              caption: "Репозиторій",
              url: "https://github.com/Bootreen/css-final",
            },
          ],
        },
      },
    },
    {
      id: 21,
      project: {
        title: {
          EN: "Tribute Page",
          DE: "Tributseite",
          UA: "Сторінка-трибута",
        },
        image: {
          EN: "/tribute.jpg",
          DE: "/tribute.jpg",
          UA: "/tribute.jpg",
        },
        features: {
          EN: [
            "Nice CSS from scratch",
            "Multicolumn layout",
            "Fully responsive",
            "Graceful degradation",
          ],
          DE: [
            "Schönes CSS von Grund auf",
            "Mehrspaltiges Layout",
            "Vollständig responsiv",
            "Anmutige Degradierung",
          ],
          UA: [
            "Гарний CSS з нуля",
            "Багатоколонкове розташування",
            "Повністю адаптивний",
            "Грейсфул деградація",
          ],
        },
        description: {
          EN: [
            'One of my first works on creating static web pages using pure HTML + CSS. Even then, I leaned towards a more "mature" style of layout, using Flexbox/Grid and relative units for HTML elements.',
            "The page is dedicated to my favorite series The Wire, which I consider without exaggeration the best series in television history.",
          ],
          DE: [
            'Eine meiner ersten Arbeiten zur Erstellung statischer Webseiten mit reinem HTML + CSS. Schon damals neigte ich zu einem "reiferen" Layoutstil, indem ich Flexbox/Grid und relative Einheiten für HTML-Elemente verwendete.',
            "Die Seite ist meinem Lieblingsserie The Wire gewidmet, die ich ohne Übertreibung für die beste Serie in der Fernsehgeschichte halte.",
          ],
          UA: [
            'Одна з моїх перших робіт зі створення статичних веб-сторінок за допомогою чистого HTML + CSS. Навіть тоді я схилявся до більш "дорослого" стилю верстки, використовуючи Flexbox/Grid та відносні одиниці для HTML-елементів.',
            "Сторінка присвячена моєму улюбленому серіалу The Wire, який я вважаю без перебільшення найкращим серіалом в історії телебачення.",
          ],
        },
        buttons: {
          EN: [
            {
              caption: "View on Codepen.io",
              url: "https://codepen.io/bootreen/full/xxpPJvY",
            },
          ],
          DE: [
            {
              caption: "Auf Codepen.io anzeigen",
              url: "https://codepen.io/bootreen/full/xxpPJvY",
            },
          ],
          UA: [
            {
              caption: "Переглянути на Codepen.io",
              url: "https://codepen.io/bootreen/full/xxpPJvY",
            },
          ],
        },
      },
    },
    {
      id: 22,
      project: {
        title: {
          EN: "Pomodoro Clock",
          DE: "Pomodoro-Uhr",
          UA: "Помодоро-годинник",
        },
        image: {
          EN: "/pomodoro.jpg",
          DE: "/pomodoro.jpg",
          UA: "/pomodoro.jpg",
        },
        features: {
          EN: [
            "Individual work/break timers",
            "React hooks for state management",
            "Sound playback for alarm clock",
            "Neat ms conversion",
          ],
          DE: [
            "Individuelle Timer",
            "Hooks für Zustandsverwaltung",
            "Soundwiedergabe für Wecker",
            "Intelligente ms-Umwandlung",
          ],
          UA: [
            "Два таймера для роботи/перерви",
            "Hooks для керування станом",
            "Звук для будильника",
            "Умний перерахунок мс",
          ],
        },
        description: {
          EN: [
            "A simple Pomodoro timer to help combat procrastination on complex tasks. The most interesting aspect here, in my opinion, is the implementation of the millisecond-to-second/minute conversion, which I achieved with a single expression using nested ternary operators.",
          ],
          DE: [
            "Ein einfacher Pomodoro-Timer zur Bekämpfung von Prokrastination bei komplexen Aufgaben. Das Interessanteste hierbei ist meiner Meinung nach die Implementierung der Umrechnung von Millisekunden in Sekunden/Minuten, die ich mit einem einzigen Ausdruck unter Verwendung von verschachtelten ternären Operatoren erreicht habe.",
          ],
          UA: [
            "Простий помодоро-таймер для боротьби з прокрастинацією на складних завданнях. Найцікавіший аспект тут, на мою думку, — це реалізація перетворення мілісекунд у секунди/хвилини, яке я здійснив за допомогою одного виразу з використанням вкладених тернарних операторів.",
          ],
        },
        buttons: {
          EN: [
            {
              caption: "View on Codepen.io",
              url: "https://codepen.io/bootreen/pen/zYLYOZP",
            },
          ],
          DE: [
            {
              caption: "Auf Codepen.io ansehen",
              url: "https://codepen.io/bootreen/pen/zYLYOZP",
            },
          ],
          UA: [
            {
              caption: "Переглянути на Codepen.io",
              url: "https://codepen.io/bootreen/pen/zYLYOZP",
            },
          ],
        },
      },
    },
  ],
  cv: [
    {
      date: { EN: "from Sep 2025", DE: "seit Sep. 2025", UA: "з вер. 2025" },
      title: {
        EN: "Volunteer Web-Developer",
        DE: "Ehrenamtlicher Webentwickler",
        UA: "Веброзробник-волонтер",
      },
      description: {
        EN: [
          "p---Development and technical maintenance of the theater website (based on Next.js)",
          "p---Hosting setup and management, content localization (DE/UA → EN)",
        ],
        DE: [
          "p---Entwicklung und technische Betreuung der Theater-Website (auf Basis des Next.js)",
          "p---Einrichtung und Verwaltung des Hostings, Lokalisierung der Inhalte (DE/UA → EN)",
        ],
        UA: [
          "p---Розробка та технічна підтримка вебсайту театру (на основі Next.js)",
          "p---Налаштування та управління хостингом, локалізація контенту (DE/UA → EN)",
        ],
      },
    },
    {
      date: {
        EN: "May - Sep 2024",
        DE: "Mai - Sep. 2024",
        UA: "трав. - вер. 2024",
      },
      title: {
        EN: "Further training as Fullstack Developer",
        DE: "Weiterbildung zum Fullstack-Entwickler",
        UA: "Подальше навчання на Fullstack-розробника",
      },
      description: {
        EN: [
          "p---Taktsoft Talents Bootcamp, Bonn.",
          "p---Learning the following technologies: RESTful APIs, Node.js, Express, SQL & NoSQL (Postgres, Mongo DB), Next.js, Tailwind CSS, TypeScript, Testing, Authorization.",
        ],
        DE: [
          "p---Taktsoft Talents Bootcamp, Bonn.",
          "p---Erlernen der folgenden Technologien: RESTful APIs, Node.js, Express, SQL & NoSQL (Postgres, Mongo DB), Next.js, Tailwind CSS, TypeScript, Testing, Autorisierung.",
        ],
        UA: [
          "p---Taktsoft Talents Bootcamp, Бонн.",
          "p---Опанування наступними технологіями: RESTful APIs, Node.js, Express, SQL та NoSQL (Postgres, Mongo DB), Next.js, Tailwind CSS, TypeScript, тестування, авторизація.",
        ],
      },
    },
    {
      date: {
        EN: "2016 – 2023",
        DE: "2016 – 2023",
        UA: "2016 – 2023",
      },
      title: {
        EN: "Founder, Frontend Developer",
        DE: "Gründer, Frontend-Entwickler",
        UA: "Засновник, Frontend-розробник",
      },
      description: {
        EN: [
          "p---Tangelo Cat — Ukrainian brand for hot sauces (Kyiv, Ukraine).",
          "ul---",
          "li---Designed and developed HTML landing pages and a SaaS-based e-shop.",
          "li---Created and managed website content.",
          "li---Social media marketing.",
        ],
        DE: [
          "p---Tangelo Cat — Ukrainische Marke für scharfe Saucen (Kyjiw, Ukraine).",
          "ul---",
          "li---Entwurf und Entwicklung von HTML-Landingpages und eines SaaS-basierten e-Shops.",
          "li---Verwaltung und Erstellung von Website-Inhalten und -Texten.",
          "li---Social Media-Marketing.",
        ],
        UA: [
          "p---Tangelo Cat — Український бренд гострих соусів (Київ, Україна).",
          "ul---",
          "li---Розробка та створення HTML-ландінгів та інтернет-магазину на SaaS.",
          "li---Управління та створення контенту та текстів для вебсайту.",
          "li---Маркетинг у соціальних мережах.",
        ],
      },
    },
    {
      date: {
        EN: "2021 – 2022",
        DE: "2021 – 2022",
        UA: "2021 – 2022",
      },
      title: {
        EN: "Project Manager and Website Editor",
        DE: "Projektmanager und Website-Redakteur",
        UA: "Проєктний менеджер і веб-редактор",
      },
      description: {
        EN: [
          "p---Flight school und -agency Plane Ukraine (Kyiv, Ukraine).",
          "ul---",
          "li---Content management (website) and copywriting for the flight school.",
          "li---Developed and maintained a comprehensive database of Ukrainian sport airfields.",
          "li---Managed website usability (UX) improvements.",
        ],
        DE: [
          "p---Flugschule und -agentur Plane Ukraine (Kyjiw, Ukraine).",
          "ul---",
          "li---Content-Management (Website) und Texterstellung für die Flugschule.",
          "li---Aufbau und Pflege einer umfassenden Datenbank ukrainischer Sport-Flugplätze.",
          "li---Verwaltung von Verbesserungen der Benutzerfreundlichkeit (UX) der Website.",
        ],
        UA: [
          "p---Авіашкола та агентство Plane Ukraine (Київ, Україна).",
          "ul---",
          "li---Управління контентом (вебсайт) та створення текстів для авіашколи.",
          "li---Розробка та підтримка комплексної бази даних українських малих аеродромів.",
          "li---Управління покращенням зручності використання (UX) вебсайту.",
        ],
      },
    },
    {
      date: {
        EN: "2012 – 2015",
        DE: "2012 – 2015",
        UA: "2012 – 2015",
      },
      title: {
        EN: "Editor/Copywriter",
        DE: "Redakteur/Texter",
        UA: "Редактор/копірайтер",
      },
      description: {
        EN: [
          "p---Digital Socium Marketing Agency (Moscow, Russia).",
          "ul---",
          "li---Client presentations.",
          "li---Conducted project analyses and reporting.",
          "li---Created and developed content plans.",
        ],
        DE: [
          "p---Digital Socium Marketingagentur (Moskau, Russland).",
          "ul---",
          "li---Kundenpräsentationen.",
          "li---Durchführung von Projektanalysen und Berichtswesen.",
          "li---Texterstellung und Weiterentwicklung von Contentplänen.",
        ],
        UA: [
          "p---Маркетингова агенція Digital Socium (Москва, Росія).",
          "ul---",
          "li---Презентації для клієнтів.",
          "li---Проведення проектних аналізів та звітності.",
          "li---Створення та розвиток контент-планів.",
        ],
      },
    },
    {
      date: {
        EN: "2013 – 2014",
        DE: "2013 – 2014",
        UA: "2013 – 2014",
      },
      title: {
        EN: "Editor/Translator",
        DE: "Redakteur/Übersetzer",
        UA: "Редактор/перекладач",
      },
      description: {
        EN: [
          "p---Technowars Magazine and Website (Moscow, Russia).",
          "ul---",
          "li---Editing and proofreading the digital news feed and other content.",
          "li---Technical translations, specializing in aerospace.",
        ],
        DE: [
          "p---Technowars-Magazin und -Website (Moskau, Russland).",
          "ul---",
          "li---Redaktion und Korrektur des digitalen Nachrichtenfeeds sowie weiterer Inhalte.",
          "li---Technische Übersetzungen, spezialisiert auf Luft- und Raumfahrt.",
        ],
        UA: [
          "p---Журнал та вебсайт Technowars (Москва, Росія).",
          "ul---",
          "li---Редагування та коректура цифрового новинного потоку та іншого контенту.",
          "li---Технічні переклади, спеціалізація – авіація та космонавтика.",
        ],
      },
    },
    {
      date: {
        EN: "2006 – 2012",
        DE: "2006 – 2012",
        UA: "2006 – 2012",
      },
      title: {
        EN: "Chief Editor",
        DE: "Chefredakteur",
        UA: "Головний редактор",
      },
      description: {
        EN: [
          "p---Gameland.ru Website (Moscow, Russia).",
          "ul---",
          "li---Project management and development of the Gameland.ru website.",
          "li---Led a team of freelance writers.",
          "li---Editorial oversight and mentoring of authors.",
        ],
        DE: [
          "p---Gameland.ru-Webseite (Moskau, Russland).",
          "ul---",
          "li---Projektleitung und Entwicklung der Website Gameland.ru.",
          "li---Teamleitung der freiberuflichen Texter.",
          "li---Redaktionelle Aufsicht und Mentoring der Autoren.",
        ],
        UA: [
          "p---Вебсайт Gameland.ru (Москва, Росія).",
          "ul---",
          "li---Управління проектом і розвиток вебсайту Gameland.ru.",
          "li---Керівництво командою фріланс-авторів.",
          "li---Редакційний нагляд і менторинг авторів.",
        ],
      },
    },
    {
      date: {
        EN: "1999 – 2006",
        DE: "1999 – 2006",
        UA: "1999 – 2006",
      },
      title: {
        EN: "Author/Editor",
        DE: "Autor/Redakteur",
        UA: "Автор/редактор",
      },
      description: {
        EN: ["p---Various IT magazines (Donetsk, Ukraine/Moscow, Russia)."],
        DE: [
          "p---Verschiedene IT-Zeitschriften (Donezk, Ukraine/Moskau, Russland).",
        ],
        UA: ["p---Різні IT-журнали (Донецьк, Україна/Москва, Росія)."],
      },
    },
    {
      date: {
        EN: "1998 – 1999",
        DE: "1998 – 1999",
        UA: "1998 – 1999",
      },
      title: {
        EN: "Prepress Operator",
        DE: "Anlagenbediener Druckvorstufe",
        UA: "Оператор підготовки до друку",
      },
      description: {
        EN: ["p---Rotaprint Printing House (Makiivka, Ukraine)."],
        DE: ["p---Rotaprint-Druckerei (Makiivka, Ukraine)."],
        UA: ["p---Друкарня Rotaprint (Макіївка, Україна)."],
      },
    },
    {
      date: {
        EN: "1993 – 1998",
        DE: "1993 – 1998",
        UA: "1993 – 1998",
      },
      title: {
        EN: "Bachelor's Degree in Computer Systems and Networks",
        DE: "Bachelor in Computersysteme und Netzwerke",
        UA: "Бакалавр з комп'ютерних систем і мереж",
      },
      description: {
        EN: ["p---Donetsk State Technical University (Donetsk, Ukraine)."],
        DE: ["p---Staatliche Technische Universität Donezk (Donezk, Ukraine)."],
        UA: [
          "p---Донецький державний технічний університет (Донецьк, Україна).",
        ],
      },
    },
  ],
};
