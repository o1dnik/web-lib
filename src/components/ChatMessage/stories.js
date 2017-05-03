import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Message from './index'

const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nDoloribus fugiat iste labore numquam odit officia provident rem tempore veniam.\rCulpa dolorum, eum facere maxime porro quis sint. Dicta eaque, ex facilis ipsum provident quod sint suscipit.\r\nAccusantium ad aspernatur corporis culpa cupiditate eveniet excepturi fugiat impedit inventore labore, libero mollitia nesciunt obcaecati, perspiciatis qui quo sapiente sequi sint soluta tenetur ullam unde vel velit? A accusantium amet animi aspernatur aut, beatae commodi consequatur corporis debitis dicta distinctio ducimus earum, eius est hic illum in iure magni nam natus nesciunt nisi officiis optio, quam quidem saepe sequi sint velit voluptas voluptatum!'
storiesOf('Message', module)
  .add('Default', () => (
    <div style={{backgroundColor: '#f1f1f1', padding: '30px'}}>

      <div>
        <ul>
          <li>
            <Message
              name='Gomer with default picture'
              date={new Date()}
              text={text}
            />
          </li>
          <li>
            <Message
              picture='https://assets.moberries.com/images/no-matches-bg.svg'
              name='Gomer'
              date={new Date()}
              text={text}
            />
          </li>
        </ul>
      </div>

    </div>
  ))
