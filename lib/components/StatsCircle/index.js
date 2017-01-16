import React, {Component, PropTypes} from 'react';

class StatsCircle extends Component {
  static PropTypes = {
    r: PropTypes.string,
    cx: PropTypes.string,
    cy: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    percent: PropTypes.number,
    value: PropTypes.string,
    containerWidth: PropTypes.string,
    containerHeight: PropTypes.string,
    transition: PropTypes.string,
    fontSize: PropTypes.string,
    textDY: PropTypes.string
  };

  static defaultProps = {
    r: '40',
    cx: '50%',
    cy: '50%',
    color: 'blue',
    fill: 'transparent',
    width: '2',
    percent: 50,
    containerWidth: '90px',
    containerHeight: '90px',
    transition: 'stroke-dashoffset .1s linear',
    textColor: '#999',
    fontSize: '2.5em',
    textDY: '.35em'
  };

  render() {

    const {
      r, cx, cy, color, fill, width, value, textColor,
      containerWidth, containerHeight, transition, fontSize, textDY
    } = this.props;

    let {percent} = this.props;

    if (isNaN(percent)) {
      percent = 100;
    }

    const strokeDasharray = 2 * Math.PI * r;

    const c = Math.PI * (r * 2);

    if (percent < 0) {
      percent = 0;
    }

    if (percent > 100) {
      percent = 100;
    }

    const pct = ((100 - percent) / 100) * c;

    const rotateX = parseInt(containerWidth, 10) / 2;
    const rotateY = parseInt(containerHeight, 10) / 2;
    const transform = `rotate(-90, ${rotateX}, ${rotateY})`;

    return (
      <svg style={{width: containerWidth, height: containerHeight}}>
        <circle r={r}
                cx={cx}
                cy={cy}
                stroke='#999'
                fill={fill}
                strokeWidth={width}
                strokeDasharray={strokeDasharray}
                strokeDashoffset='0'
        />
        <circle r={r}
                cx={cx}
                cy={cy}
                style={{transition}}
                transform={transform}
                stroke={color}
                fill={fill}
                strokeWidth={width}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={pct}
        />
        <text x='50%'
              y='50%'
              textAnchor='middle'
              color={textColor}
              strokeWidth='1px'
              fontSize={fontSize}
              dy={textDY}>{value || percent}</text>
      </svg>
    );
  }
}

export default StatsCircle;