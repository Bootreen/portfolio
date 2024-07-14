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
        "My journey is passion, resilience, and continuous learning.",
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
        image: "/quiz.jpg",
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
        image: "/css-meth.jpg",
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
        image: "/calculator.jpg",
        features: [
          "Supports operation chaining",
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
      {
        title: "Drum Machine",
        image: "/drum-machine.jpg",
        features: [
          "Custom Knob component",
          "4 sound banks",
          "Keyboard input",
          "Swipe control",
        ],
        description: [
          "In this project, I practiced sound playback in web apps and creating custom React components. I created two knob components for volume control and switching sound banks. From a more experienced developer perspective, I'd improve element addressing by using event.target instead of IDs. Despite this 'childish' approach, it works flawlessly.",
        ],
        buttons: [
          {
            caption: "View on Codepen.io",
            url: "https://codepen.io/bootreen/pen/RwJEymx",
          },
        ],
      },
      {
        title: "Markdown Previewer",
        image: "/markdown.jpg",
        features: [
          "Wise tool choice",
          "Realtime edit/view",
          "Color syntax",
          "Tiny: only a dozen lines!",
        ],
        description: [
          "This small project is a great illustration of how effective toolset choice can solve application tasks without reinventing the wheel. Besides React, this app uses three libraries: Marked.js, HTML-react-parser, and Highlight.js that do all the work. As a result, the task was solved in just a few lines of code.",
        ],
        buttons: [
          {
            caption: "View on Codepen.io",
            url: "https://codepen.io/bootreen/pen/oNyqBzy",
          },
        ],
      },
      {
        title: "ToDo Reminder",
        image: "/reminder.jpg",
        features: [
          "Slick minimalistic design",
          "Easy to use",
          "Create/check/delete tasks",
          "Fully responsive",
        ],
        description: [
          "In this training project, I practiced state management and creating simple yet visually appealing modern CSS styles suitable for both desktop and mobile devices.",
        ],
        buttons: [
          {
            caption: "Open project",
            url: "https://marv-todo.vercel.app/",
          },
          {
            caption: "Repository",
            url: "https://github.com/Bootreen/todo",
          },
        ],
      },
      {
        title: "User DB Viewer",
        image: "/table.jpg",
        features: [
          "Column sorting",
          "Adjustable filters",
          "Filters chaining",
          "Highly scalable",
        ],
        description: [
          "Despite its apparent simplicity, this training project demonstrates several interesting solutions. All filters and controls are rendered by a single component, which takes all data from a preset file. This allows adding/removing filters on the fly without changing the main code — just add or remove the corresponding object in the preset. The app state is stored in a nested object, and Zustand and Immer libraries are used for managing these nested states.",
          "Chaining all user-selected filters to apply them to the data array is done using a special recursive function, chainFilter().",
        ],
        buttons: [
          {
            caption: "Open project",
            url: "https://react-array.vercel.app/",
          },
          {
            caption: "Repository",
            url: "https://github.com/Bootreen/react-array",
          },
        ],
      },
      {
        title: "Laptop Store Mockup",
        image: "/wbl.jpg",
        features: [
          "CSS gallery hack",
          "Keyboard support",
          "Fully responsive",
          "Graceful degradation",
        ],
        description: [
          "In this project, I tried several new approaches. I was curious if a carousel for viewing a gallery could be implemented purely with CSS, without extra script code, and found several ways to do this. I chose the most unusual approach: through deep modification of a form with radio buttons. While this approach works and can be made responsive for mobile devices, it's better to use more standard solutions in real projects, leaving such experiments purely for academic interest.",
          "Also, my favorite approach, Graceful degradation, is used here, with simplification, reduction, or complete disabling of HTML elements as the viewport size decreases, maintaining readability even on small screens. Check how the table on the Specs tab behaves when you resize the screen.",
        ],
        buttons: [
          {
            caption: "Open project",
            url: "https://csshacks.vercel.app/",
          },
          {
            caption: "Repository",
            url: "https://github.com/Bootreen/css-final",
          },
        ],
      },
      {
        title: "Tribute Page",
        image: "/tribute.jpg",
        features: [
          "Nice CSS from scratch",
          "Multicolumn layout",
          "Fully responsive",
          "Graceful degradation",
        ],
        description: [
          'One of my first works on creating static web pages using pure HTML + CSS. Even then, I leaned towards a more "mature" style of layout, using Flexbox/Grid and relative units for HTML elements.',
          "The page is dedicated to my favorite series The Wire, which I consider without exaggeration the best series in television history.",
        ],
        buttons: [
          {
            caption: "View on Codepen.io",
            url: "https://codepen.io/bootreen/full/xxpPJvY",
          },
        ],
      },
      {
        title: "Portfolio",
        image: "/portfolio.jpg",
        features: [
          "TailwindCSS + DaisyUI",
          "Adaptive layout",
          "Multilanguage support",
          "Light/Dark theme",
        ],
        description: [
          "Who said a portfolio can't link to itself? 😎 In programming, recursion is quite normal.",
          "Seriously though, there are many interesting solutions here, be sure to check the repository. For example, this app detects user preferences for light and dark themes and automatically applies the right one. Manual switching is also supported. All content is localized in three languages and switches on the fly.",
          "One of the toughest features is properly displaying an HTML accordion in a grid, where the app constantly tracks the actual viewport width and adjusts the number of columns and project card sorting accordingly (see component portfolio.route.jsx).",
        ],
        buttons: [
          {
            caption: "Repository",
            url: "https://github.com/Bootreen/portfolio",
          },
        ],
      },
    ],
    DE: [
      {
        title: "Frontend-Quiz-App",
        image: "/quiz.jpg",
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
        image: "/css-meth.jpg",
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
        image: "/calculator.jpg",
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
      {
        title: "Drum-Maschine",
        image: "/drum-machine.jpg",
        features: [
          "Benutzerdefinierter Knopf",
          "4 Soundbänke",
          "Tastatureingabe",
          "Wischsteuerung",
        ],
        description: [
          "In diesem Projekt habe ich die Wiedergabe von Sounds in Web-Apps und die Erstellung benutzerdefinierter React-Komponenten geübt. Ich habe zwei Knopfkomponenten für die Lautstärkeregelung und das Umschalten der Soundbänke erstellt. Aus der Sicht eines erfahreneren Entwicklers würde ich die Adressierung von HTML-Elementen durch event.target und nicht durch ID verbessern. Trotz dieses 'kindischen' Ansatzes funktioniert es einwandfrei.",
        ],
        buttons: [
          {
            caption: "Auf Codepen.io anzeigen",
            url: "https://codepen.io/bootreen/pen/RwJEymx",
          },
        ],
      },
      {
        title: "Markdown-Vorschau",
        image: "/markdown.jpg",
        features: [
          "Kluger Tool-Choice",
          "Echtzeit Bearbeitung/Ansicht",
          "Farbige Syntax",
          "Klein: 10 Zeilen!",
        ],
        description: [
          "Dieses kleine Projekt zeigt hervorragend, wie die Wahl der richtigen Werkzeuge Anwendungsaufgaben lösen kann, ohne das Rad neu zu erfinden. Neben React verwendet diese App drei Bibliotheken: Marked.js, HTML-react-parser und Highlight.js, die die ganze Arbeit erledigen. Dadurch wurde die Aufgabe in nur wenigen Codezeilen gelöst.",
        ],
        buttons: [
          {
            caption: "Auf Codepen.io anzeigen",
            url: "https://codepen.io/bootreen/pen/oNyqBzy",
          },
        ],
      },
      {
        title: "ToDo-Erinnerung",
        image: "/reminder.jpg",
        features: [
          "Minimalistisches Design",
          "Einfach zu bedienen",
          "Aufgaben verwalten",
          "Vollständig responsiv",
        ],
        description: [
          "In diesem Trainingsprojekt habe ich nicht nur das Zustandsmanagement geübt, sondern auch das manuelle Erstellen einfacher, aber optisch ansprechender moderner CSS-Stile, die sowohl für Desktops als auch für mobile Geräte geeignet sind.",
        ],
        buttons: [
          {
            caption: "Projekt öffnen",
            url: "https://marv-todo.vercel.app/",
          },
          {
            caption: "Repository",
            url: "https://github.com/Bootreen/todo",
          },
        ],
      },
      {
        title: "Benutzer-DB-Viewer",
        image: "/table.jpg",
        features: [
          "Spaltensortierung",
          "Anpassbare Filter",
          "Filterverknüpfung",
          "Hoch skalierbar",
        ],
        description: [
          "Trotz seiner scheinbaren Einfachheit zeigt dieses Trainingsprojekt mehrere interessante Lösungen. Alle Filter und Steuerelemente werden von einer einzigen Komponente gerendert, die alle Daten aus einer Voreinstellungsdatei entnimmt. Dies ermöglicht das Hinzufügen/Entfernen von Filtern ohne Änderung des Hauptcodes: einfach das entsprechende Objekt in der Voreinstellung hinzufügen oder entfernen. Der Anwendungszustand wird in einem verschachtelten Objekt gespeichert, und die Bibliotheken Zustand und Immer werden zur Verwaltung dieser verschachtelten Zustände verwendet.",
          "Die Verknüpfung aller vom Benutzer ausgewählten Filter zur Anwendung auf das Datenarray erfolgt mithilfe einer speziellen rekursiven Funktion, chainFilter().",
        ],
        buttons: [
          {
            caption: "Projekt öffnen",
            url: "https://react-array.vercel.app/",
          },
          {
            caption: "Repository",
            url: "https://github.com/Bootreen/react-array",
          },
        ],
      },
      {
        title: "Laptop-Laden-Mockup",
        image: "/wbl.jpg",
        features: [
          "CSS-Galerie-Hack",
          "Tastaturunterstützung",
          "Vollständig responsiv",
          "Anmutige Degradierung",
        ],
        description: [
          "In diesem Projekt habe ich mehrere neue Ansätze ausprobiert. Ich war neugierig, ob ein Karussell zur Anzeige einer Galerie rein mit CSS und ohne zusätzlichen Skriptcode implementiert werden kann und fand mehrere Wege dies zu tun. Ich wählte den ungewöhnlichsten Ansatz — durch tiefe Modifikation eines Formulars mit Radio-Buttons. Während dieser Ansatz funktioniert und für mobile Geräte responsiv gemacht werden kann, ist es in realen Projekten besser, standardmäßigere Lösungen zu verwenden, und solche Experimente rein akademischem Interesse zu überlassen.",
          "Auch mein Lieblingsansatz, die Anmutige Degradierung, wird hier verwendet, mit Vereinfachung, Reduktion oder vollständigem Deaktivieren von HTML-Elementen bei abnehmender Viewport-Größe, um die Lesbarkeit auch auf kleinen Bildschirmen zu erhalten. Schauen Sie sich an, wie sich die Tabelle auf der Registerkarte Specs verhält, wenn Sie die Bildschirmgröße ändern.",
        ],
        buttons: [
          {
            caption: "Projekt öffnen",
            url: "https://csshacks.vercel.app/",
          },
          {
            caption: "Repository",
            url: "https://github.com/Bootreen/css-final",
          },
        ],
      },
      {
        title: "Tributseite",
        image: "/tribute.jpg",
        features: [
          "Schönes CSS von Grund auf",
          "Mehrspaltiges Layout",
          "Vollständig responsiv",
          "Anmutige Degradierung",
        ],
        description: [
          'Eine meiner ersten Arbeiten zur Erstellung statischer Webseiten mit reinem HTML + CSS. Schon damals neigte ich zu einem "reiferen" Layoutstil, indem ich Flexbox/Grid und relative Einheiten für HTML-Elemente verwendete.',
          "Die Seite ist meinem Lieblingsserie The Wire gewidmet, die ich ohne Übertreibung für die beste Serie in der Fernsehgeschichte halte.",
        ],
        buttons: [
          {
            caption: "Auf Codepen.io anzeigen",
            url: "https://codepen.io/bootreen/full/xxpPJvY",
          },
        ],
      },
      {
        title: "Portfolio",
        image: "/portfolio.jpg",
        features: [
          "TailwindCSS + DaisyUI",
          "Adaptives Layout",
          "Mehrsprachige Unterstützung",
          "Licht/Dunkel-Thema",
        ],
        description: [
          "Wer hat gesagt, dass ein Portfolio nicht auf sich selbst verlinken kann? 😎 In der Programmierung ist Rekursion ganz normal.",
          "Aber im Ernst, hier gibt es viele interessante Lösungen, schauen Sie unbedingt im Repository vorbei. Zum Beispiel erkennt diese App Benutzerpräferenzen für helle und dunkle Themen und wählt automatisch die richtige Anzeige aus. Manuelles Umschalten wird ebenfalls unterstützt. Alle Inhalte sind in drei Sprachen lokalisiert und wechseln im laufenden Betrieb.",
          "Eine der schwierigsten Funktionen ist die ordnungsgemäße Anzeige eines HTML-Akkordeons im Raster, bei dem die App ständig die tatsächliche Viewport-Breite überwacht und die Anzahl der Spalten und die Sortierung der Projektkarten entsprechend anpasst (siehe Komponente portfolio.route.jsx).",
        ],
        buttons: [
          {
            caption: "Repository",
            url: "https://github.com/Bootreen/portfolio",
          },
        ],
      },
    ],
    UA: [
      {
        title: "Frontend Quiz App",
        image: "/quiz.jpg",
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
        image: "/css-meth.jpg",
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
        image: "/calculator.jpg",
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
      {
        title: "Драм-машина",
        image: "/drum-machine.jpg",
        features: [
          "Користувальницький регулятор",
          "4 банки звуків",
          "Введення з клавіатури",
          "Керування свайпом",
        ],
        description: [
          "У цьому проєкті я практикував відтворення звуків у веб-додатках і створення користувацьких компонентів React. Я створив два компоненти регулятора для керування гучністю та перемикання банків звуків. З точки зору досвідченішого розробника, я б покращив звернення до HTML-елементів через event.target замість ID. Незважаючи на цей 'дитячий' підхід, він працює бездоганно.",
        ],
        buttons: [
          {
            caption: "Переглянути на Codepen.io",
            url: "https://codepen.io/bootreen/pen/RwJEymx",
          },
        ],
      },
      {
        title: "Переглядач Markdown",
        image: "/markdown.jpg",
        features: [
          "Розумний вибір інструментів",
          "Редагування/перегляд",
          "Підсвічування синтаксису",
          "Малий: лише 10 рядків!",
        ],
        description: [
          "Цей невеликий проєкт чудово ілюструє, як вибір правильного набору інструментів може вирішити завдання додатків без винаходу велосипеда. Крім React, цей додаток використовує три бібліотеки: Marked.js, HTML-react-parser та Highlight.js, які виконують всю роботу. В результаті завдання було вирішено всього за кілька рядків коду.",
        ],
        buttons: [
          {
            caption: "Переглянути на Codepen.io",
            url: "https://codepen.io/bootreen/pen/oNyqBzy",
          },
        ],
      },
      {
        title: "Нагадувач ToDo",
        image: "/reminder.jpg",
        features: [
          "Мінімалістичний дизайн",
          "Простота у використанні",
          "Керування завданнями",
          "Повністю адаптивний",
        ],
        description: [
          "У цьому тренувальному проєкті я практикував не тільки керування станом додатка, але й створення простих, але візуально привабливих сучасних CSS-стилів, придатних як для настільних систем, так і для мобільних пристроїв.",
        ],
        buttons: [
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
      {
        title: "Переглядач User DB",
        image: "/table.jpg",
        features: [
          "Сортування стовпців",
          "Регульовані фільтри",
          "Чейнінг фільтрів",
          "Висока масштабованість",
        ],
        description: [
          "Незважаючи на очевидну простоту, цей навчальний проєкт демонструє кілька цікавих рішень. Усі фільтри та елементи керування відображаються одним компонентом, який бере всі дані з файлу пресету. Це дозволяє додавати/видаляти фільтри без зміни основного коду — достатньо додати або видалити відповідний об'єкт у пресеті. Стан додатку зберігається у вкладеному об'єкті, і для управління цими вкладеними станами використовуються бібліотеки Zustand та Immer.",
          "Зв'язування всіх вибраних користувачем фільтрів для застосування їх до масиву даних здійснюється за допомогою спеціальної рекурсивної функції chainFilter().",
        ],
        buttons: [
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
      {
        title: "Макет магазину",
        image: "/wbl.jpg",
        features: [
          "CSS-хак для галереї",
          "Підтримка клавіатури",
          "Повністю адаптивний",
          "Graceful degradation",
        ],
        description: [
          "У цьому проєкті я вирішив спробувати кілька нових підходів. Мені було цікаво, чи можна реалізувати карусель для перегляду галереї тільки за допомогою CSS без додаткового скриптового коду, і я знайшов кілька способів це зробити. Я обрав найоригінальніший підхід, через глибоку модифікацію форми з радіо-кнопками. Незважаючи на те, що цей підхід працює і його навіть можна адаптувати для мобільних пристроїв, у реальних проєктах краще використовувати більш стандартні рішення, залишивши такі експерименти для академічного інтересу.",
          "Також тут використаний мій улюблений підхід, граціозна деградація, зі спрощенням, скороченням або повним відключенням HTML-елементів при зменшенні розміру viewport, що дозволяє зберігати читабельність навіть на маленьких екранах. Подивіться, як веде себе таблиця на вкладці Специфікації при зміні розміру екрану.",
        ],
        buttons: [
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
      {
        title: "Сторінка-трибута",
        image: "/tribute.jpg",
        features: [
          "Гарний CSS з нуля",
          "Багатоколонкове розташування",
          "Повністю адаптивний",
          "Грейсфул деградація",
        ],
        description: [
          'Одна з моїх перших робіт зі створення статичних веб-сторінок за допомогою чистого HTML + CSS. Навіть тоді я схилявся до більш "дорослого" стилю верстки, використовуючи Flexbox/Grid та відносні одиниці для HTML-елементів.',
          "Сторінка присвячена моєму улюбленому серіалу The Wire, який я вважаю без перебільшення найкращим серіалом в історії телебачення.",
        ],
        buttons: [
          {
            caption: "Переглянути на Codepen.io",
            url: "https://codepen.io/bootreen/full/xxpPJvY",
          },
        ],
      },
      {
        title: "Портфоліо",
        image: "/portfolio.jpg",
        features: [
          "TailwindCSS + DaisyUI",
          "Адаптивний макет",
          "Підтримка кількох мов",
          "Світла/Темна тема",
        ],
        description: [
          "Хто сказав, що портфоліо не може посилатися на себе? 😎 У програмуванні рекурсія цілком звичайна річ.",
          "А якщо серйозно, тут реалізовано багато цікавих рішень, обов'язково зазирніть у репозиторій. Наприклад, цей додаток визначає переваги користувача для світлої і темної теми та автоматично вибирає відповідний варіант. Ручне переключення також підтримується. Весь контент локалізовано на три мови і змінюється на льоту.",
          "Одна з найскладніших функцій — правильне відображення HTML-акордеону в сітці, де додаток постійно відстежує фактичну ширину вікна і відповідно змінює кількість стовпців і сортування карток проектів (див. компонент portfolio.route.jsx).",
        ],
        buttons: [
          {
            caption: "Репозиторій",
            url: "https://github.com/Bootreen/portfolio",
          },
        ],
      },
    ],
  },
};
