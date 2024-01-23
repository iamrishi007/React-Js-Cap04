<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Components</title>
</head>
<body>

  <div id="root"></div>

  <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

  <script type="text/babel">
    // Define Header component
    const Header = (props) => (
      <header>
        <h1>{props.title}</h1>
      </header>
    );

    // Define Content component
    const Content = () => (
      <div>
        <p>This is the main content.</p>
      </div>
    );

    // Define Footer component
    const Footer = (props) => (
      <footer>
        <p>{props.footerText}</p>
      </footer>
    );

    // Define App component that uses Header, Content, and Footer
    const App = () => (
      <div>
        <Header title="React App" />
        <Content />
        <Footer footerText="Copyright © 2024" />
      </div>
    );

    // Render the App component into the root element
    ReactDOM.render(<App />, document.getElementById('root'));
  </script>

</body>
</html>
