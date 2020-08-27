import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './sprite.svg';

const SVG = styled.svg`
  height: ${props => props.height};
  width: ${props => props.width};
`;

const Icon = ({ name, height = 16, width = 16, ...props }) => {
  if (!name) {
    throw new Error('Unknown icon name!');
  }

  return (
    <SVG {...props} height={height} width={width}>
      <use xlinkHref={`#${name}`} height={height} width={width} />
    </SVG>
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default Icon;
