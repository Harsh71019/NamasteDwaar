import React from 'react';
import { useFieldArray } from 'react-hook-form';
import NestedArray from './NestedArray';
let renderCount = 0;

const FieldArray = ({ control, register, setValue, getValues }) => {
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: 'days',
  });

  renderCount++;

  return (
    <div>
      <>
        <ul>
          {fields.map((item, index) => {
            return (
              <li key={item.id}>
                <label>No of Days</label>
                <input
                  name={`days[${index}].noOfDays`}
                  ref={register()}
                  defaultValue={item.noOfDays}
                  placeholder='Please enter no of Days'
                />
                <label>Price</label>
                <input
                  name={`days[${index}].price`}
                  ref={register()}
                  defaultValue={item.price}
                  placeholder='Please enter no of Price '
                />

                <button
                  className='btn-danger btn fs16'
                  type='button'
                  onClick={() => remove(index)}
                >
                  Delete
                </button>
                <NestedArray nestIndex={index} {...{ control, register }} />
              </li>
            );
          })}
        </ul>

        <section>
          <button
            type='button'
            onClick={() => {
              append({ name: 'append' });
            }}
          >
            append
          </button>

          <button
            type='button'
            onClick={() => {
              setValue('days', [
                ...getValues().days,
                {
                  name: 'append',
                  nestedArray: [{ field1: 'append', field2: 'append' }],
                },
              ]);
            }}
          >
            Append Nested
          </button>
          {/* 
          <button
            type='button'
            onClick={() => {
              prepend({ name: 'append' });
            }}
          >
            prepend
          </button>

          <button
            type='button'
            onClick={() => {
              setValue('days', [
                {
                  name: 'append',
                  nestedArray: [{ field1: 'Prepend', field2: 'Prepend' }],
                },
                ...getValues().days,
              ]);
            }}
          >
            prepend Nested
          </button> */}
        </section>

        <span className='counter'>Render Count: {renderCount}</span>
      </>
    </div>
  );
};

export default FieldArray;
