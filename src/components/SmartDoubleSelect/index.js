import React, {Component, PropTypes} from 'react';
import {Field} from 'redux-form';
import cn from 'classnames';
import Select from '../Select';

class SmartDoubleSelect extends Component {
  static propTypes = {
    onRemove: PropTypes.func,

    selectKey: PropTypes.string,
    levelKey: PropTypes.string,

    names: PropTypes.array,

    levelProps: PropTypes.object,
    selectProps: PropTypes.object,

    resetLevelOnSelectChange: PropTypes.bool,
    inOneRow: PropTypes.bool
  };

  static defaultProps = {
    selectKey: 'id',
    levelKey: 'level',
    levelProps: {},
    selectProps: {},
    resetLevelOnSelectChange: false,
    inOneRow: false
  }

  render() {

    const {
      levelProps, selectProps, onRemove, inOneRow,
      resetLevelOnSelectChange, selectKey, levelKey
    } = this.props;

    const select = this.props[selectKey];
    const level = this.props[levelKey];

    const valid = select.meta.valid && level.meta.valid;

    const levelDisabled = Boolean(!select.input.value || select.meta.invalid);

    const selectDisabled = selectProps.disabledIfValid && select.meta.valid;

    const css = cn({
      'smart-double-select': true,
      'options-box': true,
      done: valid
    });

    const wrapperCss = cn({
      'select-group-wrapper': inOneRow
    });

    return (
      <div className={css}>

        {onRemove &&
        <span className='close' onClick={onRemove}>
          <i className='ion-close'/>
        </span>}

        <div className={wrapperCss}>

          <Field
            component={Select}
            onChange={() => {
              resetLevelOnSelectChange && level.input.onChange('');
            }}
            disabled={selectDisabled || selectProps.disabled}
            {...selectProps}
            noArrow={selectProps.disabled}
            name={selectKey}
          />

          <Field
            component={Select}
            disabled={levelDisabled || levelProps.disabled}
            {...levelProps}
            noArrow={levelDisabled || levelProps.disabled}
            name={levelKey}
          />

        </div>

      </div>
    );
  }

}

export default SmartDoubleSelect;
