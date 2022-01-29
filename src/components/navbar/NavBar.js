const NavBar = () => {
  return (
    <div className='w-full flex justify-center bg-slate-900 text-white'>
      <nav className='flex justify-between items-center w-full max-w-7xl  h-24 text-lg font-semibold px-4 '>
        <a href='Home' className='hover:text-slate-300'>
          Home
        </a>

        <ul className='flex gap-3'>
          <li className='hover:text-slate-300 text-slate-400 text-base'>
            <a href='logIn'>Login</a>
          </li>
          <li className='hover:text-slate-300 text-slate-400 text-base'>
            <a href='signUp'>Sign up</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
