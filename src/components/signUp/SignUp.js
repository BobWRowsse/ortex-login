import { Formik, Form } from "formik";
import React from "react";
import { TextField } from "./TextField";
import { validate } from "./validate";

const classes = {
  input: "p-2 font-base bg-gray-300 text-slate-200 rounded",
  wrapper: "pb-8 grid place-items-center",
  btn: "bg-sky-900 hover:bg-sky-800 text-white font-semibold tracking-wide outline:none p-2 rounded",
  btnRst:
    "bg-sky-900 hover:bg-red-600 text-white font-semibold tracking-wide outline:none p-2 rounded",
  form: "max-w-sm rounded p-2 w-full h-full",
};

function SignUp() {
  return (
    <div className='grid overflow-hidden grid-cols-1 lg:grid-cols-2 px-3 lg:px-0  gap-2 w-auto h-auto '>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          personnummer: "",
          password: "",
          confirmPassword: "",
          city: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          console.log(values);
          alert(JSON.stringify(values));
        }}>
        {(formik) => (
          <div className={classes.wrapper}>
            <h2 className='my-4 border-b-2 border-slate-500 font-semibold'>
              Sign up
            </h2>
            {console.log(formik)}
            <Form className={classes.form}>
              <TextField
                label='First Name'
                name='firstName'
                type='text'
                placeholder='First Name'
                onChange={formik.handleChange}
              />
              <TextField
                label='Last Name'
                name='lastName'
                type='text'
                placeholder='Last Name'
                onChange={formik.handleChange}
              />
              <TextField
                label='Email'
                name='email'
                type='email'
                placeholder='email'
                onChange={formik.handleChange}
              />
              <TextField
                label='Personnummer'
                type='string'
                name='personnummer'
                placeholder='personnummer'
                onChange={formik.handleChange}
              />
              <TextField
                label='City'
                name='city'
                type='text'
                placeholder='City'
                onChange={formik.handleChange}
              />
              <TextField
                label='Password'
                name='password'
                type='text'
                placeholder='Enter password'
                onChange={formik.handleChange}
              />
              <TextField
                label='Confirm Password'
                name='confirmPassword'
                type='password'
                placeholder='Confirm password'
                onChange={formik.handleChange}
              />
              <div className='grid sm:grid-cols-2 grid-cols-1 gap-2  rounded w-full my-4'>
                <button className={classes.btn}>Create Account</button>
                <button type='reset' className={classes.btnRst}>
                  Reset
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
      <div className='w-auto h-auto rounded m-4 bg-red-400/10 border-2'></div>
    </div>
  );
}

export default SignUp;
