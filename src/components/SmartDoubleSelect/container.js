import React from 'react'
import SmartDoubleSelect from './index'
import {
  FieldArray,
  FormSection,
  Fields,
  reduxForm
} from 'redux-form'

const langLevels = [
  {id: '0', name: 'A1'},
  {id: '1', name: 'A2'},
  {id: '2', name: 'B1'},
  {id: '3', name: 'B2'},
  {id: '4', name: 'C1'},
  {id: '5', name: 'C2'},
  {id: '6', name: 'Native'}
]
const availableLanguages = [
  {id: '40', name: 'English'},
  {id: '51', name: 'German'},
  {id: '148', name: 'Spanish'},
  {id: '47', name: 'French'},
  {id: '128', name: 'Portuguese'},
  {id: '70', name: 'Italian'},
  {id: '133', name: 'Russian'},
  {id: '7', name: 'Arabic'},
  {id: '72', name: 'Japanese'},
  {id: '59', name: 'Hindi'},
  {id: '20', name: 'Chineese'}
]

const job = {
  languages: []
}

const RenderLanguages = ({fields, /* meta, name, */ label}) => {
  const selectedLanguages = fields
    .getAll()
    .map(i => i.id)
    .filter(Boolean)

  const fieldsBody = fields.map((language, idx) => {
    const current = fields.get(idx)

    const languagesOptions = availableLanguages
      .filter(r => {
        if (current && current.id && current.id === r.id) {
          return true
        }
        return !selectedLanguages.includes(r.id)
      })

    return (
      <li key={idx} className='mb form-field-wrapper'>

        <FormSection name={language}>

          <Fields
            names={['id', 'level']}
            selectKey='id'
            levelKey='level'
            component={SmartDoubleSelect}
            onRemove={handleFieldArrayItemRemove(fields, idx)}
            resetLevelOnSelectChange
            inOneRow
            selectProps={{
              id: `job_${language}_select`,
              label: 'Language',
              valueKey: 'id',
              labelKey: 'name',
              options: languagesOptions,
              searchable: true,
              clearable: false,
              validate: (val) => val ? null : 'Value is required.',
              simpleValue: true
            }}
            levelProps={{
              id: `job_${language}_level`,
              label: 'Level',
              valueKey: 'id',
              labelKey: 'name',
              options: langLevels,
              clearable: false,
              searchable: false,
              simpleValue: true,
              validate: (val) => val ? null : 'Value is required.'
            }}
          />

        </FormSection>

      </li>
    )
  })

  return (
    <div>
      {label && <label>{label}</label>}

      <div className='mb'>
        <button onClick={handleFieldArrayItemAdd(fields)}
          disabled={fields.length > 5}
        >
          + Add Required Language
        </button>
      </div>

      <ul>

        {fieldsBody}

      </ul>

    </div>
  )
}

const Job = () => {
  return (
    <div>

      <FieldArray
        name='languages'
        label='Required languages'
        component={RenderLanguages}
      />

    </div>
  )
}

const JobForm = reduxForm({
  form: 'jobForm',
  initialValues: job
})(Job)

export function handleFieldArrayItemAdd (fields) {
  return () => fields.push({})
}

export function handleFieldArrayItemRemove (fields, idx, amountRequired = 0) {
  return () => {
    if (fields.length > amountRequired) {
      fields.remove(idx)
    }
  }
}

export default JobForm
