export const ABOUT_SECTION_TITlE = 'About Me';

export const ABOUT_SECTION_DESC = `I have
    6 years professional experience in
    front-end development working with
    multiple agencies & in house companies
    — helping teams collaborate and work
    better together, streamline workflow,
    and deliver quality websites and
    applications.`;

export const WHAT_I_WORK_ON_TITlE = "What I'm Working On";

export const WHAT_I_WORK_ON_TEXT = () => (
    <>
        My focus at the moment is building
        reusable design systems,{' '}
        <abbr title="Continous Integration">
            CI
        </abbr>{' '}
        and{' '}
        <abbr title="Test Driven Development">
            TDD
        </abbr>
        . I also love all things todo with
        performance & web accessibility.
    </>
);

export const ACTIVE_PROJECTS_TITLE = "Active Projects";

export const ACTIVE_PROJECTS = [
    () => (
        <>
            <a
                href="https://titanui.netlify.com/"
                target="_blank"
                rel="noopener"
            >
                <b>Titan Ui</b>
            </a>{' '}
            - A reusable CSS Framework which
            comes with Typescript React
            Components that help spin up
            websites faster.{' '}
        </>
    ),
    () => (
        <>
            <a
                href="https://performance-kit.netlify.com"
                target="_blank"
                rel="noopener"
            >
                <b>Performance Kit V2</b>
            </a>{' '}
            - A NextJS project that outputs
            static generated blog pages
            focused around performance
        </>
    ),
    () => (
        <>
            <a
                href="https://www.howtographql.com/"
                target="_blank"
                rel="noopener"
            >
                <b>
                    How to graphql tutorials
                </b>
            </a>{' '}
            - Learning more about using
            graphql and how to use it with a
            react project. Hopefully a new
            project can spark from it.
        </>
    )
];

export const SKILLS_TITLE = "Skills";

export const SKILLS = [
    () => (
        <>
            <b>HTML</b>: templating languages, style guides, pattern libraries, prototyping
        </>
    ),
    () => (
        <>
            <b>CSS</b>: Sass, Less, PostCSS, BEM & ITCSS
        </>
    ),
    () => (
        <>
            <b>JavaScript</b>: ES6+, React, Redux, NextJS, Gatsby
        </>
    ),
    () => (
        <>
            <b>Accessibility</b>: testing, audits, education and improvement
        </>
    ),
    () => (
        <>
            <b>Team leadership</b>: code standards and best practices, training, consultation, hiring
        </>
    ),
    () => (
        <>
            <b>Workflow</b>: Git, automation, testing, continuous integration and delivery, kanban & scrum
        </>
    )
];

export const OTHER_TITLE = "Other Information";

export const OTHER = [
    () => (
        <>
            <b>Speaker</b>: meetups, internal workshops & internal meetings
        </>
    ),
    () => (
        <>
            <b>Hackathons</b>: Google PWA Hackathon (winner), Google AMP Hackathon (2nd) & internal code in the dark (4th)
        </>
    ),
    () => (
        <>
            <b>Design Tools</b>: Abstract, Sketch, Zepline, Invision, Photoshop & Illustrator
        </>
    ),
    () => (
        <>
            <b>Platforms</b>: AWS, Sitecore, Umbraco, Magento, Contentful & Netlify
        </>
    ),
    () => (
        <>
            <b>CI Tools</b>: TeamCity, Jenkins, AWS Pipeline, Netlify & Travis CI
        </>
    )
];

