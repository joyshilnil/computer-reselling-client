import React from "react";

const Blog = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-6">
        
      <div className="card w-96 h-auto bg-base-100 shadow-xl">
        <figure>
          <img src="https://www.freecodecamp.org/news/content/images/2022/02/how-to-manage-state-react.png" alt="Shoes" className="w-100"  />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          What are the different ways to manage a state in a React application?
          </h2>
          <p>There are several other ways to manage state​s in React, including the use of: Hooks. React Context API. Apollo Link State.</p>
        </div>
      </div>
      
      <div className="card h-auto w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://res.cloudinary.com/dillionmegida/image/upload/v1589585860/images/blogs_cover/Javascript_hyywra.png" alt="Shoes" className="w-100" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          How does prototypical inheritance work?
          </h2>
          <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://www.pullrequest.com/blog/benefits-of-writing-unit-tests/images/benefits-of-writing-unit-tests.jpg" alt="Shoes" className="w-100"  />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          What is a unit test? Why should we write unit tests?
          </h2>
          <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://presence.agency/wp-content/uploads/2020/07/1_lC1kj3IeXoE8Z3OCKJoWkw.jpeg" alt="Shoes"  className="w-100" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          React vs. Angular vs. Vue?
          </h2>
          <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
