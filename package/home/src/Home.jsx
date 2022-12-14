import React from 'react';
import { Card } from 'reactstrap';

const Home = () => {
  return (
    <section>
      <Card>
        <h1 className="display-3">Hello, Module Federation!</h1>
        <p className="lead">
          This is a simple hero unit, a simple Jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
      </Card>
    </section>
  );
};

export default Home;
