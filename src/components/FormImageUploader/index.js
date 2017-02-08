import React, {Component, PropTypes} from 'react';
import Dropzone from 'react-dropzone';
import Button from '../Button';
import ImageCropper from '../ImageCropper';

class FormImageUploader extends Component {
  static propTypes = {
    id: PropTypes.string,
    defaultImg: PropTypes.string,
    input: PropTypes.shape({
      name: PropTypes.string,
      onBlur: PropTypes.func,
      onChange: PropTypes.func,
      onDragStart: PropTypes.func,
      onDrop: PropTypes.func,
      onFocus: PropTypes.func,
      value: PropTypes.string
    }),
    meta: PropTypes.shape({
      active: PropTypes.bool,
      asyncValidating: PropTypes.bool,
      autofilled: PropTypes.bool,
      dirty: PropTypes.bool,
      dispatch: PropTypes.func,
      error: PropTypes.string,
      invalid: PropTypes.bool,
      pristine: PropTypes.bool,
      submitting: PropTypes.bool,
      touched: PropTypes.bool,
      valid: PropTypes.bool,
      visited: PropTypes.bool,
      warning: PropTypes.string
    }),
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string
  };

  static defaultProps = {
    meta: {},
    input: {}
  }

  state = {
    croppingImage: null
  }

  render() {

    const {
      id, input, meta, placeholder, wrapperClass,
      type, alt, width, className, defaultImg
    } = this.props;

    const {croppingImage} = this.state;
    const {error, invalid, touched} = meta;

    const src = croppingImage && croppingImage.preview ||
      input.value || defaultImg;

    const logoUploader =
      <div className={wrapperClass}>
        <div>
          {
            croppingImage ?
              (
                <ImageCropper
                  image={croppingImage.preview}
                  onCrop={this.handleCrop}
                  {...input}
                  placeholder={placeholder}
                  id={id}
                  type={type}
                  onCancel={this.handleCancelCrop}/>
              )
              :
              (
                <Dropzone onDrop={this.handleUpload}
                          className='dropzone'
                          activeClassName='active'
                          rejectClassName='reject'
                          multiple={false}
                          maxSize={1000000}
                          accept='image/*'>
                  <div className='split-group'>
                    <div className='short'>
                      <img alt={alt}
                           src={src}
                           width={width}
                           className={className}/>
                    </div>
                    {this.props.children ||
                    <div className='long'>
                      <Button size='small'>
                        Upload
                      </Button>
                    </div>}
                  </div>
                </Dropzone>
              )
          }
        </div>
      </div>;

    return (
      <div className='input-icon-wrapper'>

        {logoUploader}

        <span>{touched && invalid && error}</span>
      </div>
    );

  }

  handleUpload = ([file], reject, e) => {
    e.preventDefault();
    if (!file) return;
    this.setState({croppingImage: file});
  }

  handleCrop = (image) => {
    const {onChange} = this.props;

    if (onChange) {
      onChange(image);
    }

    if (this.props.input.onChange) {
      this.props.input.onChange(image);
    }

    this.setState({croppingImage: null});
  }

  handleCancelCrop = () => {
    this.setState({croppingImage: null});
  }

}

export default FormImageUploader;
