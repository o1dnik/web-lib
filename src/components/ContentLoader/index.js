import React, {PropTypes, Component} from 'react';
import range from 'lodash/range';

//Sizes
//90
//120
//190
//350
//870

const widths = [230, 300, 380, 420, 480];

export class ContentLoader extends Component {

  static PropTypes = {
    height: PropTypes.number.isRequired,
    lineHeight: PropTypes.number.isRequired
  };

  static defaultProps = {
    height: 90,
    lineHeight: 10,
    header: false
  };

  render() {

    const {height, lineHeight, header} = this.props;

    const linesCount = height / lineHeight;

    const lines = range(header ? 4 : 0, Math.floor(linesCount));

    return (

      <div className='content-loader'>
        <div style={{height}} className='animated-background'>

          {header &&
          <div>
            <div className='background-masker header-top'/>
            <div className='background-masker header-left'/>
            <div className='background-masker header-right'/>
            <div className='background-masker header-bottom'/>
            <div className='background-masker subheader-left'/>
            <div className='background-masker subheader-right'/>
            <div className='background-masker subheader-bottom'/>
          </div>}

          {lines.map(i => {

            if (i % 2 === 0) {
              return (
                <div
                  key={i}
                  className='background-masker'
                  style={{
                    top: `${lineHeight * i}px`,
                    left: '0',
                    right: '0',
                    height: `${lineHeight}px`
                  }}
                />
              );
            }

            return (
              <div
                key={i}
                className='background-masker'
                style={{
                  top: `${lineHeight * i}px`,
                  right: '0px',
                  left: `${widths[Math.floor(Math.random() * widths.length)]}px`,
                  height: `${lineHeight}px`
                }}
              ></div>
            );

          })}

        </div>
      </div>

    );
  }
}

export default ContentLoader;
