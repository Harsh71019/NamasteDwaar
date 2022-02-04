import React from 'react';
import { useFieldArray } from 'react-hook-form';

const NestedArray = ({ nestIndex, control, register }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `days[${nestIndex}].nestedArray`,
  });
  return (
    <div>
      {fields.map((item, k) => {
        return (
          <div key={item.id} style={{ marginLeft: 20 }}>
            <label>Add Session</label>
            <input
              name={`days[${nestIndex}].session[${k}].name`}
              placeholder='Add number of days'
              ref={register({ required: true })}
              defaultValue={item.name}
              style={{ marginRight: '25px' }}
            />

            <input
              name={`days[${nestIndex}].session[${k}].noOfSessions`}
              placeholder='Add Price'
              ref={register()}
              defaultValue={item.noOfSessions}
            />
            <button
              className='btn btn-danger'
              type='button'
              onClick={() => remove(k)}
            >
              Delete Sessions
            </button>
          </div>
        );
      })}

      <button
        className='btn btn-success'
        type='button'
        onClick={() =>
          append({
            name: 'Name of Session',
            noOfSessions: 'Number of sessions',
          })
        }
      >
        Add Sessions
      </button>

      <hr />
    </div>
  );
};

export default NestedArray;
