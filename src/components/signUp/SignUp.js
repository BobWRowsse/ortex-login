import { Formik, Form } from "formik";
import useLocalStorage from "../../hooks/useLocalStorage";
import { TextField } from "./TextField";
import { validate } from "./validate";

const classes = {
  input: "p-2 font-base bg-gray-300 text-slate-200 rounded",
  wrapper: "pb-8 grid place-items-center rounded bg-slate-800 m-2 p-2 ",
  btn: "bg-sky-900 hover:bg-sky-800 text-white font-semibold tracking-wide outline:none p-2 rounded",
  btnRst:
    "bg-sky-900 hover:bg-red-600 text-white font-semibold tracking-wide outline:none p-2 rounded",
  form: "max-w-sm rounded p-2 w-full h-full",
};

function SignUp() {
  const [users, setUsers] = useLocalStorage("users", []);
  users ? console.log(users) : console.log("no data yet");

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
          setUsers([...users, { ...values }]);

          /* axios
            .post("http://localhost:8000/register", values)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            }); */
        }}>
        {(formik) => (
          <div className={classes.wrapper}>
            <h2 className='my-4 pb-4 text-3xl bg-slate-900/30 rounded  font-semibold text-sky-400'>
              Sign up for instant access !!
            </h2>
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
                label='Phone'
                name='phone'
                type='string'
                placeholder='phone'
                onChange={formik.handleChange}
              />
              <TextField
                label='Personnummer'
                type='string'
                name='personnummer'
                placeholder='ÅÅÅÅMMDDXXXX'
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
                <button className={classes.btn} type='submit'>
                  Create Account
                </button>
                <button type='reset' className={classes.btnRst}>
                  Reset
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
      <div className='w-auto h-auto lg:flex flex-col items-center gap-8 hidden rounded m-4  '>
        <img
          src='ortexLogo.png'
          alt='ortex-logo'
          width='100'
          height='auto'
          className='opacity-50 m-8'
        />
        <div>
          <h1 className='mt-8'>
            Try ORTEX - <span className='text-sky-500'>Free for 7 days</span>{" "}
          </h1>
          <h4>No contracts. Cancel anytime.</h4>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
