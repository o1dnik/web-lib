import React, {Component, PropTypes} from 'react';
import {Field} from 'redux-form';
import cn from 'classnames';
import Select from '../Select';

class SmartDoubleSelect extends Component {
  static propTypes = {
    onRemove: PropTypes.func
  };

  render() {

    const {
      levelProps, selectProps, onRemove, select, level, resetLevelOnSelectChange
    } = this.props;

    const valid = select.meta.valid && level.meta.valid;

    const levelDisabled = Boolean(!select.input.value || select.meta.invalid);

    const selectDisabled = selectProps.disabledIfValid && select.meta.valid;

    const css = cn({
      'smart-double-select': true,
      'options-box': true,
      done: valid
    });

    return (
      <div className={css}>

        {onRemove &&
        <span className='close' onClick={onRemove}>
          <i className='ion-close'/>
        </span>}

        <div className='select-group-wrapper'>

          <Field
            name='select'
            component={Select}
            onChange={() => {
              resetLevelOnSelectChange && level.input.onChange('');
            }}
            disabled={selectDisabled}
            {...selectProps}
            noArrow={selectProps.disabled}
          />

          <Field
            name='level'
            component={Select}
            disabled={levelDisabled || levelProps.disabled}
            {...levelProps}
            noArrow={levelDisabled || levelProps.disabled}
          />

        </div>

      </div>
    );
  }

}

export default SmartDoubleSelect;
