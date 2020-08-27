import React from 'react';
import PropTypes from 'prop-types';
import { Text, Button } from './styled';

class ButtonComponent extends React.PureComponent {
  render() {
    const {
      size,
      children,
      className,
      onClick
    } = this.props;

    return (
      <Button
        className={className}
        size={size}
        onClick={onClick}
      >
        <Text>{children}</Text>
      </Button>
    );
  }
}

ButtonComponent.defaultProps = {
  size: 'large',
};

ButtonComponent.propTypes = {
  size: PropTypes.string,
};

export default ButtonComponent;
