import React, {Component, PropTypes} from 'react'
import cn from 'classnames'

import DEFAULT_PROFILE_IMAGE from '../../assets/img/default-logo.png'

class ThreadCard extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    expiresAt: PropTypes.string.isRequired,
    isRead: PropTypes.bool.isRequired
  };

  static defaultProps = {
    id: '',
    title: 'Joobla Descriptionenene',
    subtitle: 'Paramaribaladam Pirindirimobola',
    image: '',
    expiresAt: '9 days',
    isRead: false
  };

  render () {
    const {image, title, subtitle, expiresAt, isRead} = this.props

    const listItemCss = cn({
      'list-item': true,
      'box': true,
      'box-shadow': true,
      'is-read': isRead
    })

    return (
      <li className='list-wrapper'>
        <div className={listItemCss}>

          <div className='list-body'>
            <div className='list-thumb large hide-m'>
              <img alt='trololo'
                src={image || DEFAULT_PROFILE_IMAGE}
                onError={(e) => { e.target.src = DEFAULT_PROFILE_IMAGE }}
              />
            </div>

            <div className='list-info'>
              <div className='list-item-subtitle'>
                {subtitle}
              </div>
              <h2 className='list-item-title'>
                {title}
              </h2>
            </div>
          </div>

          <div className='list-controlls text-right'>
            <div className='expire hide-m'>
              {expiresAt}
            </div>
          </div>

        </div>
      </li>
    )
  }
}

export default ThreadCard
