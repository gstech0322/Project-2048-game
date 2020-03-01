import React, { useCallback, useEffect, useState } from 'react';
import StyledInput from './StyledInput';
import StyledKnob from './StyledKnob';
import StyledSwitch from './StyledSwitch';
import Box from '../Box';
import Text from '../Text';
const Switch = ({ value, activeValue, inactiveValue, knobColor = 'foreground', activeColor = 'background', inactiveColor = 'background', title, active = false, onChange, }) => {
    const [currentValue, setCurrentValue] = useState(active ? activeValue : value);
    const handleSwitch = useCallback(() => {
        setCurrentValue((v) => (v === activeValue ? inactiveValue : activeValue));
    }, [activeValue, inactiveValue]);
    useEffect(() => {
        onChange(currentValue);
    }, [currentValue, onChange]);
    return (<Box onClick={handleSwitch}>
      {title && (<Box marginInlineEnd="s3">
          <Text color="primary" textTransform="capitalize" fontSize={16}>
            {title}
          </Text>
        </Box>)}
      <StyledSwitch>
        <StyledInput defaultChecked={currentValue === activeValue}/>
        <StyledKnob active={currentValue === activeValue} knobColor={knobColor} activeColor={activeColor} inactiveColor={inactiveColor}/>
      </StyledSwitch>
    </Box>);
};
export default Switch;
