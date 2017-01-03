import React, {PropTypes, Component} from 'react';
import cn from 'classnames';
import Tag from '../Tag';


class Tags extends Component {

  static propTypes = {
    tags: PropTypes.array.isRequired,
    onClick: PropTypes.func,
    onClose: PropTypes.func,
    hideClose: PropTypes.bool,
    closeIcon: PropTypes.string,
    long: PropTypes.bool,
    active: PropTypes.bool
  };

  render() {
    const {tags, ...rest} = this.props;

    const css = cn({'tags-wrapper': true});  // make flexible

    return (
      <div className={css}>
        {tags.map((tag, key) =>
          <Tag {...rest} key={key} id={tag.id} label={tag.label} />
        )}
      </div>
    );
  }

}

export default Tags;
