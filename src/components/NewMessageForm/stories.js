import React, { Component } from 'react'
import { storiesOf, action } from '@kadira/storybook'
import NewMessageForm from './index'

class LiveForm extends Component {
  static propTypes = {}

  state = {
    value: ''
  }

  render () {
    return (
      <div>
        <NewMessageForm
          value={this.state.value}
          onSubmit={action('submit')}
          onChange={this.handleValueChange}
        />
      </div>
    )
  }

  handleValueChange = (e) => {
    if (e) e.preventDefault()
    const {value} = e.target
    action('change')(e)
    this.setState((prevState) => ({...prevState, value}))
  }
}

export default LiveForm

storiesOf('NewMessageForm', module)
  .add('Default', () => (
    <div>
      <LiveForm />
      <div>
        <NewMessageForm
          value='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quae excepturi recusandae culpa iure aspernatur, explicabo repellat hic blanditiis provident veniam eius tempora doloribus dolorem quo, adipisci nulla, ut qui.'
          onSubmit={action('submit')}
          onChange={action('change')}
        />
      </div>
      <div>
        <NewMessageForm
          value='Lo'
          onSubmit={action('submit')}
          onChange={action('change')}
        />
      </div>
      <div>
        <NewMessageForm
          value='Lo'
          loading
          onSubmit={action('submit')}
          onChange={action('change')}
        />
      </div>
      <div>
        <NewMessageForm
          value='Lo'
          disabled
          onSubmit={action('submit')}
          onChange={action('change')}
        />
      </div>
    </div>
  ))
