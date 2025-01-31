import React from "react";
import Rainbow from "../hoc/Rainbow";

const About = () => {
  return (
    <div class="container">
      <h4 className="center">About</h4>
      <p>
        Materialize comes in two different forms. You can select which version
        you want depending on your preference and expertise. To start using
        Materialize, all you have to do is download one of the options below.
      </p>
    </div>
  );
};
export default Rainbow(About);
