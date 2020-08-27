import React, { useState } from 'react';
import Icon from '../Icon';
import Text from '../Typography/Text';
import {
  Wrap,
  Label,
  LabelWrap,
  IconWrap
} from './styled';

const Checkbox = ({
  checked = false,
  disabled = false,
  onChange = () => {},
  children,
  ...props
}) => {
  const [value, setValue] = useState(checked);
  const handleOnChange = () => {
    setValue(!value);
    onChange(!value);
  };

  return (
    <Wrap disabled={disabled} {...props}>
      <LabelWrap>
        <IconWrap checked={value}>
          {value &&
            <Icon
              name="checkbox"
              height="10px"
              width="13px"
              disabled={disabled}
            />
          }
        </IconWrap>
        <input
          type="checkbox"
          checked={value}
          disabled={disabled}
          onChange={handleOnChange}
        />
        <Text>
          <Label disabled={disabled}>{children}</Label>
        </Text>
      </LabelWrap>
    </Wrap>
  );
};

export default Checkbox;
