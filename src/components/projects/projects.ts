export interface ProjectInterface {
    name: string;
    subtitle: string;
    technologies: string[];
    description: string;
    links: {
        img: string;
        code: string;
        demo: string;
    }
}

export const projectsList: ProjectInterface[] = [
    {
        name: "React Image Search",
        subtitle: "react-image-search-app",
        technologies: [
            "responsive",
            "react",
            "router",
            "redux",
            "typescript"
        ],
        description: "Responsive image search app made using React, TypeScript and Redux with styled-components",
        links: {
            img: "https://in1t-container.s3.eu-west-3.amazonaws.com/portfolio/image-search.png",
            code: "https://github.com/init1-dev/react-image-search-app",
            demo: "http://react-image-search-app.s3-website.eu-west-3.amazonaws.com/"
        }
    },
    {
        name: "Miranda Dashboard",
        subtitle: "hotel-miranda-dashboard",
        technologies: [
            "Desktop",
            "react",
            "router",
            "redux",
            "typescript"
        ],
        description: "Hotel dashboard app made using React with styled-components (only desktop, no responsive)",
        links: {
            img: "https://in1t-container.s3.eu-west-3.amazonaws.com/portfolio/miranda-dashboard.png",
            code: "https://github.com/init1-dev/hotel-miranda-dashboard",
            demo: "http://hotel-miranda-dashboard-init.s3-website.eu-west-3.amazonaws.com/login"
        }
    },
    {
        name: "Miranda Web",
        subtitle: "hotel-miranda-web",
        technologies: [
            "responsive",
            "html",
            "scss",
            "js"
        ],
        description: "Miranda Hotel web using HTML/CSS",
        links: {
            img: "https://in1t-container.s3.eu-west-3.amazonaws.com/portfolio/miranda-hotel.png",
            code: "https://github.com/init1-dev/hotel-miranda-web",
            demo: "http://hotel-miranda-web.s3-website.eu-west-3.amazonaws.com/"
        }
    },
    {
        name: "Oxygen Shop",
        subtitle: "oxygen-shop",
        technologies: [
            "responsive",
            "html",
            "scss",
            "js"
        ],
        description: "Shop landing page developed using Html, Scss and JavaScript",
        links: {
            img: "https://in1t-container.s3.eu-west-3.amazonaws.com/portfolio/oxygenshop.png",
            code: "https://github.com/init1-dev/oxygen-shop",
            demo: "https://init1-dev.github.io/oxygen-shop/"
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