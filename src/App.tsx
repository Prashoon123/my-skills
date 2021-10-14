import "./App.css";
import { useEffect, useState } from "react";

import { DndContext } from "@dnd-kit/core";

import Draggable from "./components/Draggable";
import Droppable from "./components/Droppable";

function App() {
  const containers: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "React Native",
    "Gatsby",
    "Node.js",
    "Express",
    "Firebase",
    "Git",
    "Tailwind CSS",
  ];
  const containerImages: string[] = [
    "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
    "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
    "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
    "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
    "https://raw.githubusercontent.com/github/explore/28b02bbc9ad9f7a503c43775aebeb515dc2da5fc/topics/nextjs/nextjs.png",
    "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react-native/react-native.png",
    "https://raw.githubusercontent.com/github/explore/e94815998e4e0713912fed477a1f346ec04c3da2/topics/gatsby/gatsby.png",
    "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png",
    "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png",
    "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png",
    "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png",
    "https://raw.githubusercontent.com/github/explore/882462b8ecc337fd9c9b2572bc463a1cbc88fb6a/topics/tailwind/tailwind.png",
  ];
  const [isDropped, setIsDropped] = useState<boolean>(false);
  const [skill, setSkill] = useState<string>("");
  const [data, setData] = useState<string>("");

  function handleDragEnd(event: any) {
    if (
      event.over &&
      (event.over.id === "droppable1" || "droppable2") &&
      event.active
    ) {
      setIsDropped(true);
      setSkill(event.active.id);
    }
  }

  function getData(): void {
    switch (skill) {
      case "HTML":
        setData(
          "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript."
        );
        break;
      case "CSS":
        setData(
          "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
        );
        break;
      case "JavaScript":
        setData(
          "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions."
        );
        break;
      case "React":
        setData(
          "React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."
        );
        break;
      case "Next.js":
        setData(
          "Next.js is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites."
        );
        break;
      case "React Native":
        setData(
          "React Native is an open-source UI software framework created by Facebook, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities."
        );
        break;
      case "Gatsby":
        setData(
          "Gatsby is an open-source framework that combines functionality from React, GraphQL and Webpack into a single tool for building static websites and apps. ... Here, we'll explore the framework itself––what it is, what it's built on, and what differentiates it from other tools in the world of static web applications."
        );
        break;
      case "Node.js":
        setData(
          "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser."
        );
        break;
      case "Express":
        setData(
          "Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js."
        );
        break;
      case "Firebase":
        setData(
          "Firebase is a platform developed by Google for creating mobile and web applications. It was originally an independent company founded in 2011. In 2014, Google acquired the platform and it is now their flagship offering for app development."
        );
        break;
      case "Git":
        setData(
          "Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows."
        );
        break;
      case "Tailwind CSS":
        setData(
          "Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override."
        );
        break;
      default:
        setData(
          "React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."
        );
    }
  }

  useEffect((): void => {
    if (skill) {
      getData();
    }
  }, [skill]);

  return (
    <div className="app">
      <h1>My Skills</h1>

      <DndContext onDragEnd={handleDragEnd}>
        <Droppable id="droppable1">
          {isDropped ? <h2>{data}</h2> : <h2>Drop here</h2>}
        </Droppable>

        <div className="app__options">
          {containers.map((id, index) => (
            <Draggable key={id} id={id}>
              <img src={containerImages[index]} alt="" />

              <div style={{ height: 20 }} />

              <h2>{id}</h2>
            </Draggable>
          ))}
        </div>

        <Droppable id="droppable2">
          {isDropped ? <h2>{data}</h2> : <h2>Drop here</h2>}
        </Droppable>
      </DndContext>
    </div>
  );
}

export default App;
