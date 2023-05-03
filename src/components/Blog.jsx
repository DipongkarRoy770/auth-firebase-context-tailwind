import React from "react";

const Blog = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h4 className=" text-2xl font-semibold">
        Tell us the differences between uncontrolled and controlled components ?
      </h4>
      <div className="flex flex-col mt-5  gap-4 lg:flex-row">
        <div className="grid flex-grow h-60 bg-base-200 ">
          <h4 className="pl-4 text-2xl font-semibold pt-4">
            Controlled Component :
          </h4>
          <ul className="pl-8 -mt-6	">
            <li className=" list-decimal">Managed by React state </li>
            <li className=" list-decimal">
              Parent component updates state on user interaction{" "}
            </li>
            <li className=" list-decimal">
              Data flows from parent component to component
            </li>
            <li className=" list-decimal">Easier to debug </li>
            <li className=" list-decimal">
              Generally faster as there's less state management
            </li>
          </ul>
        </div>
        <div className="grid flex-grow h-60 bg-base-200 ">
          <h4 className="pl-4 text-2xl font-semibold pt-4">
            Uncontrolled Component :
          </h4>
          <ul className="pl-8 -mt-6	">
            <li className=" list-decimal">
              Managed by component's own internal state{" "}
            </li>
            <li className=" list-decimal">
              Component updates own internal state on user interaction{" "}
            </li>
            <li className=" list-decimal">Data flows within the component</li>
            <li className=" list-decimal">More difficult to debug </li>
            <li className=" list-decimal">
              Generally slower as there's more state management
            </li>
          </ul>
        </div>
      </div>
      <h4 className="text-2xl font-semibold mt-5">
        How to validate React props using PropTypes ?
      </h4>
      <div className="h-96 grid flex-grow md:h-60 bg-base-200 pl-4 pt-5 mt-5">
        <p>
          Props and PropTypes are important mechanisms for passing read-only
          attributes between React components.
        </p>
        <p>
          We can use React props, short for properties, to send data from one
          component to another. If a component receives the wrong type of props,
          it can cause bugs and unexpected errors in your app.
        </p>
        <p>
          Since JavaScript doesn’t have a built-in type checking solution, many
          developers use extensions like TypeScript and Flow. However, React has
          an internal mechanism for props validation called PropTypes. In this
          article, we’ll learn how to validate props with React PropTypes.
        </p>
      </div>
      <h4 className="text-2xl font-semibold mt-5">
        Tell us the difference between nodejs and express js?
      </h4>
      <div className="flex flex-col mt-5  gap-4 lg:flex-row">
        <div className="grid flex-grow h-60 md:h-48 bg-base-200 pl-4 pt-5 mt-5">
          <h2 className="text-1xl font-semibold">Express.js :</h2>
          <p>
            Express is a small framework that sits on top of Node.js's web
            server functionality to simplify its APIs and add helpful new
            features. It makes it easier to organize your application's
            functionality with middle ware and routing. It adds helpful
            utilities to Node.js's HTTP objects. It facilitates the rendering of
            dynamic HTTP objects.
          </p>
        </div>
        <div className="grid flex-grow h-60 md:h-48 bg-base-200 pl-4 pt-5 mt-5">
          <h2 className="text-1xl font-semibold">Node.js :</h2>
          <p>
            Node.js is an open source and cross-platform runtime environment for
            executing JavaScript code outside of a browser. You need to remember
            that NodeJS is not a framework and it's not a programming language.
            Most of the people are confused and understand it's a framework or a
            programming language. We often use Node.js for building back-end
            services like APIs like Web App or Mobile App.
          </p>
        </div>
      </div>
      <h4 className="text-2xl font-semibold mt-5">
        What is a custom hook, and why will you create a custom hook?
      </h4>
      <div className="grid flex-grow h-32 md:mb-8 bg-base-200 pl-4 pt-5 mt-5">
        
        <p>
          A custom Hook is a JavaScript function whose name starts with ”use”
          and that may call other Hooks
        </p>
        <p className="mt-0">
          Custom React JS hooks can help developers save time, are reliable,
          reusable, and make the code clean. Creating custom React JS hooks is
          relatively easy, and you can search for many open sources where you
          can get some custom hooks from the library already created by
          developers
        </p>
      </div>
    </div>
  );
};

export default Blog;
