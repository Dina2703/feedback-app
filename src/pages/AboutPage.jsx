import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>this is a React app to leave feedback for a product or service</p>
        <p>Version: 1.0.0</p>

        <p>
          <a href="/">back to Home</a>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
