const NavBar = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-full h-16 flex justify-center items-center relative mt-4 backdrop-blur-xl z-20">
        <div className="absolute left-0"></div>
        <div className="mx-auto">
          {' '}
          <h2 className="text-gray-950 text-2xl  font-semibold ">
            madurai.life
          </h2>
        </div>
        <div className="mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="size-8 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
