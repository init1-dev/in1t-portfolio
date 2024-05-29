export interface ProjectInterface {
    name: string;
    subtitle: string;
    design: string;
    technologies: technologyInterface[];
    description: string;
    links: {
        img: string;
        code: string;
        demo: string;
    }
}

interface technologyInterface {
    name: string;
    icon: string;
}

export const projectsList: ProjectInterface[] = [
    {
        name: "React Image Search",
        subtitle: "react-image-search-app",
        design: "Responsive",
        technologies: [
            {
                name: "react",
                icon: "/react.svg"
            },
            {
                name: "router",
                icon: "/react-router.png"
            },
            {
                name: "redux",
                icon: "/redux.svg"
            },
            {
                name: "typescript",
                icon: "/typescript.svg"
            },
        ],
        description: "Responsive image search app made using React, TypeScript and Redux with styled-components.",
        links: {
            img: "https://in1t-container.s3.eu-west-3.amazonaws.com/portfolio/image-search.png",
            code: "https://github.com/init1-dev/react-image-search-app",
            demo: "http://react-image-search-app.s3-website.eu-west-3.amazonaws.com/"
        }
    },
    {
        name: "Miranda Web PHP",
        subtitle: "hotel-miranda-PHP",
        design: "Responsive",
        technologies: [
            {
                name: "html",
                icon: "/HTML5.svg"
            },
            {
                name: "scss",
                icon: "/sass.svg"
            },
            {
                name: "js",
                icon: "/javascript.svg"
            },
            {
                name: "php",
                icon: "/php.svg"
            },
        ],
        description: "Responsive hotel website made using Html, Scss, JavaScript and PHP.",
        links: {
            img: "https://in1t-container.s3.eu-west-3.amazonaws.com/portfolio/miranda-hotel.png",
            code: "https://github.com/init1-dev/hotel-miranda-PHP",
            demo: "http://ec2-13-39-112-151.eu-west-3.compute.amazonaws.com/"
        }
    },
    // {
    //     name: "Miranda Web",
    //     subtitle: "hotel-miranda-web",
    //     design: "Responsive",
    //     technologies: [
    //         {
    //             name: "html",
    //             icon: "/HTML5.svg"
    //         },
    //         {
    //             name: "scss",
    //             icon: "/sass.svg"
    //         },
    //         {
    //             name: "js",
    //             icon: "/javascript.svg"
    //         },
    //     ],
    //     description: "Responsive hotel website made using Html, Scss and JavaScript.",
    //     links: {
    //         img: "https://in1t-container.s3.eu-west-3.amazonaws.com/portfolio/miranda-hotel.png",
    //         code: "https://github.com/init1-dev/hotel-miranda-web",
    //         demo: "http://hotel-miranda-web.s3-website.eu-west-3.amazonaws.com/"
    //     }
    // },
    {
        name: "Miranda Dashboard",
        subtitle: "hotel-miranda-dashboard",
        design: "Desktop",
        technologies: [
            {
                name: "react",
                icon: "/react.svg"
            },
            {
                name: "router",
                icon: "/react-router.png"
            },
            {
                name: "redux",
                icon: "/redux.svg"
            },
            {
                name: "typescript",
                icon: "/typescript.svg"
            },
        ],
        description: "Hotel dashboard app made using React, TypeScript and Redux with styled-components (only desktop).",
        links: {
            img: "https://in1t-container.s3.eu-west-3.amazonaws.com/portfolio/miranda-dashboard.png",
            code: "https://github.com/init1-dev/hotel-miranda-dashboard",
            demo: "http://hotel-miranda-dashboard-init.s3-website.eu-west-3.amazonaws.com/login"
        }
    },
    {
        name: "Hotel Miranda Node API",
        subtitle: "typescript-node-express",
        design: "API",
        technologies: [
            {
                name: "node",
                icon: "/nodejs.svg"
            },
            {
                name: "express",
                icon: "/express.svg"
            },
            {
                name: "typescript",
                icon: "/typescript.svg"
            },
        ],
        description: "Hotel Miranda dashbord project API made using NodeJs, Express and TypeScript.",
        links: {
            img: "https://in1t-container.s3.eu-west-3.amazonaws.com/portfolio/dashboard_API.png",
            code: "https://github.com/init1-dev/typescript-node-express",
            demo: "https://4oi46otzmb.execute-api.eu-west-3.amazonaws.com/dev/"
        }
    },
    {
        name: "Oxygen Shop",
        subtitle: "oxygen-shop",
        design: "Responsive",
        technologies: [
            {
                name: "html",
                icon: "/HTML5.svg"
            },
            {
                name: "scss",
                icon: "/sass.svg"
            },
            {
                name: "js",
                icon: "/javascript.svg"
            },
        ],
        description: "Responsive shop landing page made using Html, Scss and JavaScript.",
        links: {
            img: "https://in1t-container.s3.eu-west-3.amazonaws.com/portfolio/oxygenshop.png",
            code: "https://github.com/init1-dev/oxygen-shop",
            demo: "https://init1-dev.github.io/oxygen-shop/"
        }
    },
];