const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]


// Loop through the resources and populate the divs with the data
for (let i = 0; i < 5; i++) {
    const currentResource = resources[i];
    const currentDiv = document.getElementById('resources' + (i + 1));

    const heading = document.createElement('h2');
    heading.textContent = currentResource.category;

    const paragraph = document.createElement('p');
    paragraph.textContent = currentResource.text;

    currentDiv.appendChild(heading);
    currentDiv.appendChild(paragraph);

    const ul = document.createElement('ul');
    currentResource.sources.forEach(source => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = source.title;
        link.href = source.url;
        link.target = "_blank"; // Open the link in a new tab
        li.appendChild(link);
        ul.appendChild(li);
    });

    currentDiv.appendChild(ul);
}

// Get all buttons
const buttons = document.querySelectorAll('button');

// Add click event listeners to the buttons
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Hide all divs
        const divs = document.querySelectorAll('div[id^="resources"]');
        divs.forEach((div) => {
        div.classList.remove('active');
    });

        // Show the corresponding div
        const targetDivId = "resources" + (index + 1);
        const targetDiv = document.getElementById(targetDivId);
        targetDiv.classList.add('active');
    });
});

// Add click event listeners to the buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      // Remove "active" class from all buttons
        buttons.forEach((btn) => {
        btn.classList.remove('active');
    });

      // Add "active" class to the clicked button
        button.classList.add('active');
    });
});