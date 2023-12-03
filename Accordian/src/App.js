import React from "react";
import Collapsible from "react-collapsible";
import "./App.css";
const App = () => {
  return (
    <div className="Accordion">
      <h3>React Question and Answers</h3>
      <span className="note">click on question to see answers</span>
      <Collapsible
        className="collapsible_contentInner"
        trigger="What is Components in React"
        
      
      open={false}
      onOpen={() => console.log("collapsible opened")}
      onOpening={() => console.log("collapsioble opening")}
      onClose={() => console.log("Collapsible closed")}
      onClosing={() => console.log("collapsible closing")}
      transitionTime={1000}
      >


        <div className="collapsible_contentOuter">
        Components are the building blocks of any React application, and a single app usually consists of multiple components. It splits the user interface into independent, reusable parts that can be processed separately
        </div>
      </Collapsible>
      <Collapsible
        className="collapsible_contentInner"
        trigger="What is Virtual DOM?"
        
      
      open={false}
      onOpen={() => console.log("collapsible opened")}
      onOpening={() => console.log("collapsioble opening")}
      onClose={() => console.log("Collapsible closed")}
      onClosing={() => console.log("collapsible closing")}
      transitionTime={1000}
      >


        <div className="collapsible_contentOuter">
          'React keeps a lightweight representation of the real DOM in the
          memory, and that is known as the virtual DOM. When the state of an
          object changes, virtual DOM changes only that object in the real DOM,
          rather than updating all the objects.'
        </div>
      </Collapsible>
      <Collapsible
        className="collapsible_contentInner"
        trigger="What is Reacj.js"
        
      
      open={false}
      onOpen={() => console.log("collapsible opened")}
      onOpening={() => console.log("collapsioble opening")}
      onClose={() => console.log("Collapsible closed")}
      onClosing={() => console.log("collapsible closing")}
      transitionTime={1000}
      >


        <div className="collapsible_contentOuter">
        React.js is a library build by Facebook in 2011, React keeps a lightweight representation of the real DOM in the
          memory, and that is known as the virtual DOM. When the state of an
          object changes, virtual DOM changes only that object in the real DOM,
          rather than updating all the objects.
        </div>
      </Collapsible>
      <Collapsible
        className="collapsible_contentInner"
        trigger="What is DOM?"
        
      
      open={false}
      onOpen={() => console.log("collapsible opened")}
      onOpening={() => console.log("collapsioble opening")}
      onClose={() => console.log("Collapsible closed")}
      onClosing={() => console.log("collapsible closing")}
      transitionTime={1000}
      >


        <div className="collapsible_contentOuter">
          DOM is Document Object Model
        </div>
      </Collapsible>
    </div>
  );
};

export default App;
