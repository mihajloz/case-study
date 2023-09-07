import hero from "./assets/hero.png";
import pwa from "./assets/pwa.png";
import charts from "./assets/charts.png";
import delivery from "./assets/delivery.png";
import tests from "./assets/tests.png";
import coverage from "./assets/coverage.png";
import aws from "./assets/aws.png";

const CaseStudy = () => {
  return (
    <div className="max-w-[1000px] px-[100px]">
      <img src={hero} alt="hero" />
      <h1 className="font-bold text-[35px]">
        Case Study - Building the EventScout App
      </h1>
      <a
        href="https://www.mihajloz.github.com/case-study"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-white/90 text-black px-6 py-2 rounded-full hover:bg-yellow-400 duration-200">
          Visit App
        </button>
      </a>
      <h2 className="heading">Project Overview</h2>
      <p>
        The Meet App project aimed to develop a serverless progressive web
        application (PWA) with React, emphasizing test-driven development (TDD)
        principles. The application&apos;s primary objective was to provide
        users with a tool for discovering upcoming events in various cities,
        utilizing the Google Calendar API to fetch event data.
      </p>
      <p className="mt-4">
        This case study offers insights into the problem addressed, the methods
        employed, the tools and skills utilized, and the challenges overcome
        during the course of the Meet App project. It highlights the
        project&apos;s alignment with industry trends and its contribution to
        the portfolio of skills and accomplishments of the project lead and
        collaborators.
      </p>

      <h2 className="heading">Problem Statement</h2>
      <p>
        Serverless architecture and progressive web applications (PWAs) have
        emerged as significant trends. The challenge of this project was to
        create an application that combined both the concept of serverless
        architecture and PWAs to provide users the ability to effortlessly
        discover and engage with upcoming events.
      </p>
      <p>
        Moreover, the project aimed to underscore competence in test-driven
        development (TDD) as well as data visualization.
      </p>

      <h2 className="heading">Project Context</h2>
      <p>
        The Meet App project aligns with the evolving trends in web development,
        emphasizing serverless architecture, PWAs, and TDD. Serverless
        architecture eliminates the need for backend maintenance and offers
        scalability, while PWAs provide enhanced user experiences with features
        like offline access and push notifications. By adopting TDD, the project
        aimed to ensure code quality through test coverage.
      </p>

      <h2 className="heading">Project Duration</h2>
      <p>3 weeks</p>
      <h2 className="heading">Project Team</h2>
      <p>Lead Developer: Mihajlo Z.</p>
      <p>Collaborators: James G. M. (Mentor), Jonathan N. (Tutor)</p>

      <h2 className="heading">Tools, Skills, and Methodologies</h2>
      <ul className="list-disc ml-6">
        <li>
          <span className="font-bold">Tools:</span> React, Google Calendar API,
          AWS Lambda, GitHub, GitHub Pages, OAuth2 authentication, Service
          Worker, Lighthouse, Data visualization libraries.
        </li>
        <li>
          <span className="font-bold">Skills:</span> React development,
          serverless architecture, test-driven development, API integration,
          responsive web design, PWA implementation, data visualization,
          continuous integration (CI), continuous delivery (CD).
        </li>
        <li>
          <span className="font-bold">Methodologies:</span> Agile development,
          Object-Oriented Programming (OOP), user story mapping, integration
          testing, end-to-end testing, progressive enhancement.
        </li>
      </ul>

      <h2 className="heading">Project Objectives</h2>
      <ul className="list-decimal ml-6">
        <li>Develop a serverless PWA using React.</li>
        <li>Implement a TDD approach in the development process.</li>
        <li>Integrate the Google Calendar API for fetching event data.</li>
        <li>Achieve cross-browser compatibility.</li>
        <li>Ensure responsive design for various screen sizes.</li>
        <li>Pass Lighthouse&apos;s PWA checklist.</li>
        <li>
          Enable offline usage and home screen installation on mobile devices.
        </li>
        <li>Implement data visualization through charts.</li>
        <li>Attain test coverage of at least 90%.</li>
        <li>Monitor application performance using online tools.</li>
      </ul>

      <h2 className="heading">Building the App</h2>
      <p className="mb-4">
        The middle of the Meet App project was a journey of exploration and
        implementation. It saw the application take shape through meticulous
        testing, integration of serverless functions, adoption of OOP
        principles, and the realization of PWAs.
      </p>
      {/**list of tasks done in the project */}

      <h2 className="heading-2">1. TDD & Test Scenarios</h2>

      <img src={tests} alt="Testing" className="mb-4 w-[500px]" />

      <p>
        The project began with the focus was on setting the foundation for a
        test-driven development approach. User stories were crafted to outline
        the app&apos;s key features, defining what users could expect from the
        application. These stories were then translated into multiple test
        scenarios, guiding the development process.
      </p>

      <p className="mb-4">
        To ensure a collaborative and version-controlled environment,
        create-react-app was utilized to create a React application, which was
        promptly pushed to GitHub. This initial setup laid the groundwork for
        subsequent development tasks.
      </p>

      <hr className="mb-4" />

      <h2 className="heading-2">2. Serverless Functions & Authentication</h2>

      <p>
        The project looked into the serverless architecture and authentication.
        The merits and usefulness of serverless development were evaluated,
        recognizing its potential for streamlined backend management.
      </p>

      <p className="mb-4">
        To connect the React app with a protected API, OAuth2 authentication was
        implemented, setting the stage for secure data access. AWS credentials
        were obtained, marking the project&apos;s move towards serverless
        functions hosted on AWS Lambda.
      </p>
      <hr className="mb-4" />

      <h2 className="heading-2">3. Writing & Testing AWS Lambda Functions</h2>

      <img
        src={aws}
        alt="Serverless functions in AWS"
        className="mb-4 w-[400px]"
      />

      <p>
        In this phase of the project, the focus was on writing AWS Lambda
        functions. These serverless functions were instrumental in implementing
        serverless technology within the app. Rigorous testing was conducted to
        ensure the reliability and functionality of these functions.
      </p>

      <p className="mb-4">
        A serverless deployment package was prepared, laying the groundwork for
        the seamless integration of serverless functionality into the
        application.
      </p>
      <hr className="mb-4" />

      <h2 className="heading-2">4. Unit Testing</h2>

      <p>
        Unit testing played a vital role in verifying the correctness of the
        application&apos;s components. Detailed analysis was carried out to
        identify key use cases for unit testing. Unit tests were written to
        assess different components of the app, with a focus on achieving test
        coverage exceeding 90%.
      </p>

      <p className="mb-4">
        Mock data was utilized to test components, and implementation code was
        refined based on unit test results. This rigorous testing approach
        ensured the robustness of the app&apos;s core functionalities.
      </p>
      <hr className="mb-4" />

      <h2 className="heading-2">5. Integration Testing</h2>

      <p>
        This task marked the transition to integration testing. I analyzed the
        use cases for integration tests, which assess the interaction between
        different components and services within the app.
      </p>

      <p className="mb-4">
        Integration tests were carefully crafted to validate the seamless
        integration of real data from an API into the web app. The goal was to
        ensure that the app functioned cohesively and provided users with a
        seamless experience.
      </p>
      <hr className="mb-4" />

      <h2 className="heading-2">
        6. User Acceptance Testing & End-to-End Testing
      </h2>

      <img src={coverage} alt="Test coverage" className="mb-4 w-[500px]" />

      <p>
        User acceptance testing (UAT) and end-to-end testing became pivotal in
        this section. UAT focused on validating the app&apos;s functionality
        from a user&apos;s perspective. Acceptance tests were written to help
        non-developer stakeholders understand the implementation code, ensuring
        alignment with user expectations.
      </p>

      <p className="mb-4">
        Automated end-to-end testing further solidified the app&apos;s
        reliability. Testing errors were diligently handled in the terminal, and
        adjustments were made to enhance the app&apos;s performance and
        functionality. The test coverage can be seen above.
      </p>
      <hr className="mb-4" />

      <h2 className="heading-2">7. Continuous Delivery</h2>

      <img
        src={delivery}
        alt="Continuous delivery"
        className="mb-4 w-[600px]"
      />

      <p>
        Here we delved into the practices of continuous integration and
        continuous delivery (CI/CD).
      </p>

      <p className="mb-4">
        Integration of an Application Performance Monitoring (APM) tool
        bolstered the development process, allowing for real-time monitoring and
        fine-tuning of the app&apos;s performance.
      </p>
      <hr className="mb-4" />

      <h2 className="heading-2">8. Object-Oriented Programming (OOP)</h2>

      <p className="mb-4">
        The focus was on Object-Oriented Programming (OOP) principles in this
        task. Core OOP concepts were explored and differentiated when to apply
        functional programming (FP) and when to apply object-oriented
        programming.
      </p>

      <hr className="mb-4" />

      <h2 className="heading-2">9. Progressive Web Apps</h2>

      <img src={pwa} alt="Progressive web apps" className="mb-4 w-[300px]" />

      <p>
        I delved into Progressive Web Apps (PWAs), a core aspect of the
        project&apos;s objectives. PWAs were examined: what they are, how they
        compared to traditional web apps, and their core functionality.
      </p>

      <p className="mb-4">
        Implementing progressive functionality was a key milestone, enabling
        offline usage and the addition of the app to a user&apos;s home screen.
        This task brought the project closer to achieving its PWA goals.
      </p>
      <hr className="mb-4" />

      <h2 className="heading-2">10. Data Visualization</h2>

      <img src={charts} alt="Data Visualization" className="mb-4 w-[600px]" />

      <p>
        In this section, the project ventured into data visualization, an
        essential feature to enhance the user experience. API data was
        transformed into visual formats using specialized visualization
        libraries.
      </p>

      <p className="mb-4">
        The implementation of data visualization features, including charts,
        added depth to the application&apos;s user interface. Extensive research
        into library documentation ensured the effective utilization of these
        visual elements.
      </p>

      <h2 className="heading">Challenges Faced</h2>
      <p>
        Throughout the project, several challenges were encountered and
        successfully addressed:
      </p>
      <ol className="list-decimal ml-6 mt-4">
        <li>
          <span className="font-bold">Serverless Implementation: </span>
          Configuring AWS Lambda and setting up the serverless architecture
          presented a learning curve.
        </li>
        <li>
          <span className="font-bold">Data Visualization: </span>Integrating
          data visualization libraries required extensive research and
          experimentation.
        </li>
        <li>
          <span className="font-bold">Offline Functionality: </span>Ensuring
          seamless offline access and synchronization with the online version
          posed technical challenges.
        </li>
        <li>
          <span className="font-bold">Cross-Browser Compatibility: </span>
          Achieving consistent performance and compatibility across different
          browsers, including older versions like IE11, required meticulous
          testing and debugging.
        </li>
        <li>
          <span className="font-bold">Test Coverage: </span>Maintaining a test
          coverage rate of 90% required continuous efforts in writing and
          updating test cases.
        </li>
        <li>
          <span className="font-bold">Continuous Deployment: </span>
          Implementing CI/CD practices, including performance monitoring,
          demanded meticulous configuration.
        </li>
      </ol>

      <h2 className="heading">Conclusion</h2>
      <p className="mb-20">
        The Meet App project successfully achieved its objectives, delivering a
        serverless PWA with React that provides users with an intuitive platform
        for discovering upcoming events. By implementing TDD principles,
        adhering to best practices in serverless architecture and PWA
        development, and effectively addressing challenges, the project
        demonstrates expertise in cutting-edge web development technologies.
        Moreover, the project showcases a commitment to continuous improvement
        and a forward-looking approach to web development.
      </p>
    </div>
  );
};

export default CaseStudy;
