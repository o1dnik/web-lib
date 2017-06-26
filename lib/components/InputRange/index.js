import cn from 'classnames';
import Range from 'react-input-range';

import PropTypes from 'prop-types';

import React from 'react';

var InputRange = function InputRange(props) {
  var id = props.id,
      input = props.input,
      onChange = props.onChange,
      label = props.label,
      disabled = props.disabled;
  var minValue = props.minValue,
      maxValue = props.maxValue,
      step = props.step,
      formatLabel = props.formatLabel;


  var wrapperCss = cn({
    'input-range-wrapper': true
  });

  return React.createElement(
    'div',
    { className: wrapperCss },
    label && React.createElement(
      'label',
      { htmlFor: id },
      label
    ),
    React.createElement(Range, {
      name: props.name || input.name,
      minValue: minValue,
      disabled: disabled,
      maxValue: maxValue,
      step: step,
      value: props.value || input.value,
      formatLabel: formatLabel,
      labelPrefix: props.labelPrefix,
      labelSuffix: props.labelSuffix,
      onChange: onChange || input.onChange,
      onChangeComplete: props.onChangeComplete
    })
  );
};

InputRange.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onChangeComplete: PropTypes.func,
  onDragStart: PropTypes.func,
  onDrop: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.any,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  step: PropTypes.number,
  labelPrefix: PropTypes.string,
  labelSuffix: PropTypes.string,
  formatLabel: PropTypes.func,

  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.any
  })

};

InputRange.defaultProps = {
  input: {}
};

export default InputRange;