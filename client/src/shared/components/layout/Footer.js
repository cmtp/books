import React from 'react';
import { Container } from 'semantic-ui-react';

const Footer = () => (
  <Container>
    <footer>&copy; Christian {new Date().getFullYear()} </footer>
  </Container>
);

export default Footer;
