import axios from "axios";
import { Form, Formik } from "formik";
import React from "react";
import { TextField } from "../signUp/TextField";
import { validateLogin } from "./validateLogin";

const classes = {
  input: "p-2 font-base bg-gray-300 text-slate-200 rounded",
  wrapper: "pb-8 grid place-items-center rounded bg-slate-800 m-2 p-2 ",
  btn: "bg-sky-900 hover:bg-sky-800 text-white font-semibold tracking-wide outline:none p-2 rounded sm:w-24 w-full",
  form: "max-w-sm rounded p-2 w-full h-full",
};

const Login = () => {
  return (
    <div className='grid overflow-hidden grid-cols-1  px-3 lg:px-0  gap-2 w-auto h-auto '>
      <Formik
        initialValues={{
          personnummer: "",
          password: "",
        }}
        validationSchema={validateLogin}
        onSubmit={(values) => {
          axios
            .post("http://localhost:8000/login", values)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }}>
        {(formik) => (
          <div className={classes.wrapper}>
            <img
              src='ortexLogo.png'
              alt='ortex-logo'
              width='100'
              height='auto'
              className='opacity-70 m-8'
            />
            <Form className={classes.form}>
              <TextField
                label='Personnummer'
                type='string'
                name='personnummer'
                placeholder='ÅÅÅÅMMDDXXXX'
                onChange={formik.handleChange}
              />

              <TextField
                label='Password'
                name='password'
                type='text'
                placeholder='Enter password'
                onChange={formik.handleChange}
              />

              <div className='grid grid-cols-1 gap-2  rounded w-full my-4'>
                <button className={classes.btn} type='submit'>
                  Login
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;
