import React, {PropTypes} from 'react';
import {Line} from 'rc-progress';
import omit from 'lodash/omit';
import cn from 'classnames';

const ProgressBarComponent = (props) => {

  const {className, label} = props;

  const css = cn({
    progressbar: true
  }, className);

  return (
    <div className={css}>
      {label}
      <Line {
              ...omit(
                props,
                Object.keys(ProgressBarComponent.propTypes)
              )
            }
      />
    </div>
  );
};

ProgressBarComponent.propTypes = {
  className: PropTypes.string,
  label: PropTypes.node
};

export default ProgressBarComponent;
