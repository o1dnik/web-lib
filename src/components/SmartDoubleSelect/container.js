import React from 'react';
import SmartDoubleSelect from './index';
import {
  FieldArray,
  FormSection,
  Fields,
  reduxForm
} from 'redux-form';

const langLevels = [
  {value: '0', label: 'A1'},
  {value: '1', label: 'A2'},
  {value: '2', label: 'B1'},
  {value: '3', label: 'B2'},
  {value: '4', label: 'C1'},
  {value: '5', label: 'C2'},
  {value: '6', label: 'Native'}
];
const availableLanguages = [
  {value: '40', label: 'English'},
  {value: '51', label: 'German'},
  {value: '148', label: 'Spanish'},
  {value: '47', label: 'French'},
  {value: '128', label: 'Portuguese'},
  {value: '70', label: 'Italian'},
  {value: '133', label: 'Russian'},
  {value: '7', label: 'Arabic'},
  {value: '72', label: 'Japanese'},
  {value: '59', label: 'Hindi'},
  {value: '20', label: 'Chineese'}
];

const job = {
  languages: []
};

const RenderLanguages = ({fields, /*meta, name,*/ label}) => {

  const selectedLanguages = fields
    .getAll()
    .map(i => i.select)
    .filter(Boolean);

  const fieldsBody = fields.map((language, idx) => {

    const current = fields.get(idx);

    const languagesOptions = availableLanguages
      .filter(r => {
        if (current && current.select && current.select === r.value) {
          return true;
        }
        return !selectedLanguages.includes(r.value);
      });

    return (
      <li key={idx} className='mb form-field-wrapper'>

        <FormSection name={language}>

          <Fields
            names={['select', 'level']}
            component={SmartDoubleSelect}
            onRemove={handleFieldArrayItemRemove(fields, idx)}
            resetLevelOnSelectChange={true}
            selectProps={{
              id: `job_${language}_select`,
              label: 'Language',
              options: languagesOptions,
              searchable: true,
              clearable: false,
              validate: (val) => val ? null : 'Value is required.',
              simpleValue: true
            }}
            levelProps={{
              id: `job_${language}_level`,
              label: 'Level',
              options: langLevels,
              clearable: false,
              searchable: false,
              simpleValue: true,
              validate: (val) => val ? null : 'Value is required.'
            }}
          />

        </FormSection>

      </li>
    );

  });

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
  );
};

const Job = () => {

  return (
    <div>

      <FieldArray
        name='languages'
        label='Required languages'
        component={RenderLanguages}
      />

    </div>
  );
};

const JobForm = reduxForm({
  form: 'jobForm',
  initialValues: job
})(Job);

export function handleFieldArrayItemAdd(fields) {
  return () => fields.push({});
}

export function handleFieldArrayItemRemove(fields, idx, amountRequired = 0) {
  return () => {
    if (fields.length > amountRequired) {
      fields.remove(idx);
    }
  };
}

export default JobForm;
