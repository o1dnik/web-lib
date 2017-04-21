import React from 'react'
import {storiesOf} from '@kadira/storybook'
import JobForm from './container'
import {reducer as form} from 'redux-form'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

const store = createStore(combineReducers({form}), {})

storiesOf('SmartDoubleSelect', module)
  .add('Default', () => (
    <div>
      <Provider store={store}>
        <JobForm />
      </Provider>
    </div>
  ))
