import React from 'react';
import { Container, Grid, Header as SemHeader } from 'semantic-ui-react';

const Header = () => (
  <header>
    <Container>
      <Grid>
        <Grid.Row columns={12}>
          <Grid.Column>
            <SemHeader>My Blog</SemHeader>
          </Grid.Column>
          <Grid.Column>Home</Grid.Column>
          <Grid.Column floated="right">Signup</Grid.Column>
          <Grid.Column>Login</Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </header>
);

export default Header;
