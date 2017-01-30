import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import SelectWithLevels from './index';
import flatten from 'lodash/flatten';

let roles = [
  {
    name: 'Software Development',
    roles: [
      {
        name: 'Python Developer',
        id: '8'
      },
      {
        name: 'Data Scientist',
        id: '9'
      },
      {
        name: 'Frontend Developer',
        id: '10'
      },
      {
        name: 'DevOps',
        id: '11'
      }
    ]
  },
  {
    name: 'Marketing',
    roles: [
      {
        name: 'Online Marketing Manager',
        id: '4'
      },
      {
        name: 'Communications Manager',
        id: '6'
      },
      {
        name: 'Social Media Marketing',
        id: '7'
      }
    ]
  },
  {
    name: 'Finance',
    roles: [
      {
        name: 'Accountant',
        id: '1'
      },
      {
        name: 'Account Manager',
        id: '2'
      }
    ]
  },
  {
    name: 'Sales',
    roles: [
      {
        name: 'Product Sales Manager',
        id: '3'
      },
      {
        name: 'Solar Energy Consultant',
        id: '5'
      }
    ]
  }
];

const jobLevels = [
  {value: '0', label: '0-1'},
  {value: '1', label: '2-3'},
  {value: '2', label: '4-5'},
  {value: '3', label: '5+'}
];

//roles should be mapped in container's connect
roles = flatten(
  roles.map(c => [{name: c.name, isCategory: true, id: c.name}, ...c.roles])
).map(c => ({value: c.id, label: c.name, isCategory: c.isCategory || false}));

storiesOf('SelectWithLevels', module)
  .add('Default', () => (
    <div>

      <div>
        <h4>Default</h4>
        <SelectWithLevels
          label='JOB DESTIGATION'
          subLabel='SUB LABEL YEARS OF EXPERIENCE'
          onRemove={action('remove')}
          onChange={action('change')}
          onFocus={action('focus')}
          onBlur={action('blur')}
          value={{}}
          selectOptions={roles}
          levelOptions={jobLevels}
        />
      </div>

      <div>
        <h4>With selected values</h4>
        <SelectWithLevels
          label='JOB DESTIGATION'
          subLabel='SUB LABEL YEARS OF EXPERIENCE'
          onRemove={action('remove')}
          onChange={action('change')}
          onFocus={action('focus')}
          onBlur={action('blur')}
          value={{
            select: '3',
            level: '2'
          }}
          selectOptions={roles}
          levelOptions={jobLevels}
        />
      </div>

      <div>
        <h4>Simulate redux-form</h4>
        <SelectWithLevels
          label='JOB DESTIGATION'
          subLabel='SUB LABEL YEARS OF EXPERIENCE'
          onRemove={action('remove')}
          onChange={action('change')}
          onFocus={action('focus')}
          onBlur={action('blur')}
          input={{
            value: {
              select: '3',
              level: '2'
            },
            meta: {}
          }}
          selectOptions={roles}
          levelOptions={jobLevels}
        />
      </div>

      <div>
        <h4>Success</h4>
        <SelectWithLevels
          disabledIfValid
          label='JOB DESTIGATION'
          subLabel='SUB LABEL YEARS OF EXPERIENCE'
          onRemove={action('remove')}
          onChange={action('change')}
          onFocus={action('focus')}
          onBlur={action('blur')}
          value={{
            select: '3',
            level: '2'
          }}
          meta={{
            touched: true,
            valid: true
          }}
          selectOptions={roles}
          levelOptions={jobLevels}
        />
      </div>

      <div>
        <h4>Error</h4>
        <SelectWithLevels
          label='JOB DESTIGATION'
          subLabel='SUB LABEL YEARS OF EXPERIENCE'
          onRemove={action('remove')}
          onChange={action('change')}
          onFocus={action('focus')}
          onBlur={action('blur')}
          value={{
            select: '3',
            level: '2'
          }}
          meta={{
            touched: true,
            invalid: true,
            error: 'My error message'
          }}
          selectOptions={roles}
          levelOptions={jobLevels}
        />
      </div>

      <div>
        <h4>readOnly</h4>
        <SelectWithLevels
          label='readOnly'
          disabled
          onRemove={action('remove')}
          onChange={action('change')}
          onFocus={action('focus')}
          onBlur={action('blur')}
          value={{
            select: '3',
            level: '2'
          }}
          meta={{
            touched: true,
            invalid: true,
            error: 'My error message'
          }}
          selectOptions={roles}
          levelOptions={jobLevels}
        />
      </div>

    </div>
  ));

