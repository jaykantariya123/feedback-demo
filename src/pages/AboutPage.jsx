import React from "react";
import Card from "../components/shared/Card";
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1> about this project</h1>
        <p>this is a react app to leave feedback for a product or service</p>
        <p> Version: 1.0.0</p>
        <p>
          <a href="/">Back to Home </a>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;