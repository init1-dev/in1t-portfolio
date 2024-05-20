export interface ProjectInterface {
    name: string;
    subtitle: string;
    technologies: string[];
    description: string;
    links: {
        code: string;
        demo: string;
    }
}

export const projectsList: ProjectInterface[] = [
    {
        name: "Oxygen Shop",
        subtitle: "oxygen-shop",
        technologies: [
            "html",
            "scss",
            "js"
        ],
        description: "Shop landing page developed using Html, Scss and JavaScript",
        links: {
            code: "https://github.com/init1-dev/oxygen-shop",
            demo: "https://init1-dev.github.io/oxygen-shop/"
        }
    },
    {
        name: "React Image Search",
        subtitle: "react-image-search-app",
        technologies: [
            "react",
            "router",
            "redux",
            "typescript"
        ],
        description: "Responsive image search app made using React, TypeScript and Redux with styled-components",
        links: {
            code: "https://github.com/init1-dev/react-image-search-app",
            demo: "http://react-image-search-app.s3-website.eu-west-3.amazonaws.com/"
        }
    },
    {
        name: "Miranda Web",
        subtitle: "hotel-miranda-web",
        technologies: [
            "html",
            "scss",
            "js"
        ],
        description: "Miranda Hotel web using HTML/CSS",
        links: {
            code: "https://github.com/init1-dev/hotel-miranda-web",
            demo: "http://hotel-miranda-web.s3-website.eu-west-3.amazonaws.com/"
        }
    },
    {
        name: "Miranda Dashboard",
        subtitle: "hotel-miranda-dashboard",
        technologies: [
            "react",
            "router",
            "redux",
            "typescript"
        ],
        description: "Hotel dashboard app made using React with styled-components (only desktop, no responsive)",
        links: {
            code: "https://github.com/init1-dev/hotel-miranda-dashboard",
            demo: "http://hotel-miranda-dashboard-init.s3-website.eu-west-3.amazonaws.com/login"
        }
    },
];

/*
{
    name: "",
    subtitle: "",
    technologies: [
        
    ],
    description: "",
    links: {
        code: "",
        demo: ""
    }
},
*/