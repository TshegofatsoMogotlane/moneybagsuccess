import React from 'react';
import { Container } from './Home.styled';
import { Card, Card2, Card3, Card4 } from '../../components/card/Card';
// import Post from '../../components/posts/Post';

const Home = () => {
  return (
    <Container>
      <div className="cards">
        {/* <Post /> */}
        <Card />
        <Card2 />
        <Card3 />
        <Card4 />
      </div>
    </Container>
  );
};

export default Home;

