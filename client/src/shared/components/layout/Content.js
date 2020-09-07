import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

const Content = (props) => {
  const { children } = props;
  return <Container>{children}</Container>;
};

Content.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Content;
