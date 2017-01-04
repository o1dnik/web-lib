import cn from 'classnames';
import Range from 'react-input-range';

import React, {PropTypes} from 'react';

const InputRange = (props) => {

  const {id, input, onChange, label} = props;
  const {minValue, maxValue, step, formatLabel} = props;

  const wrapperCss = cn({'input-range': true});

  return (
    <div className={wrapperCss}>

      {label && <label htmlFor={id}>{label}</label>}

      <Range
        name={props.name || input.name}
        minValue={minValue}
        maxValue={maxValue}
        step={step}
        value={props.value || input.value}
        formatLabel={formatLabel}
        labelPrefix={props.labelPrefix}
        labelSuffix={props.labelSuffix}
        onChange={onChange || input.onChange}
        onChangeComplete={props.onChangeComplete}
      />

    </div>
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
    value: PropTypes.string
  })

};

InputRange.defaultProps = {
  input: {},
  meta: {}
};

export default InputRange;