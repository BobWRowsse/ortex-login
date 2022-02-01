import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='w-full flex justify-center bg-slate-900 text-white'>
      <nav className='flex justify-between items-center w-full max-w-7xl  h-24 text-lg font-semibold px-4 '>
        <h2 className='hover:text-slate-300'>
          <Link to='/'>Home</Link>
        </h2>

        <ul className='flex gap-3'>
          <li className='hover:text-slate-300 text-slate-400 text-base'>
            <Link to='/login'>Login</Link>
          </li>
          <li className='hover:text-slate-300 text-slate-400 text-base'>
            <Link to='/SignUp'>Sign up</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
