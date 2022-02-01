import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className='mb-2 flex flex-col'>
      <label
        htmlFor={field.name}
        className='text-slate-200 font-medium tracking-wide'>
        {label}
      </label>
      <input
        autoComplete='off'
        {...field}
        {...props}
        className={`rounded p-1 px-2 focus:bg-slate-50 active:bg-slate-300 bg-slate-400 outline-none hover:bg-white/80   focus:shadow-outline ${
          meta.touched && meta.error && "border-2 border-red-400"
        } `}
      />

      <ErrorMessage
        component='div'
        name={field.name}
        className='text-red-400 font-light tracking-wide'
      />
    </div>
  );
};
