import "./Navbar.css";

function Navbar() {
  const menu = [
    <>
      <li className="button my-4 cursor-pointer lg:mx-3">
        <a href="#home" className="text-error hover:text-teal px-4 py-1 block">
          Home
        </a>
      </li>
      <li className="button my-4 cursor-pointer lg:mx-3">
        <a href="#about" className="text-error hover:text-teal px-4 py-1 block">
          About
        </a>
      </li>
      <li className="button my-4 cursor-pointer lg:mx-3">
        <a
          href="#services"
          className="text-error hover:text-teal px-4 py-1 block"
        >
          Services
        </a>
      </li>
      <li className="button my-4 cursor-pointer lg:mx-3">
        <a
          href="#skills"
          className="text-error hover:text-teal px-4 py-1 block"
        >
          Skills
        </a>
      </li>
      <li className="button my-4 cursor-pointer lg:mx-3">
        <a
          href="#projects"
          className="text-error hover:text-teal px-4 py-1 block"
        >
          Projects
        </a>
      </li>
      <li className="button my-4 cursor-pointer lg:mx-3">
        <a
          href="#contact"
          className="text-error hover:text-teal px-4 py-1 block"
        >
          Contact
        </a>
      </li>
    </>,
  ];

  return (
    <div className="sticky top-3 z-50">
      <div className="mx-5">
        <div className="navbar font-medium">
          <div className="navbar-start">
            <h1 className="button p-3 text-2xl hover:text-teal font-bold">
              Muaz
            </h1>
          </div>

          <div className="navbar-end flex-grow lg:flex-grow-0">
            <div className="dropdown">
              <div className="parent-div p-2 block lg:hidden">
                <div
                  tabIndex={0}
                  role="button"
                  className="child-div p-3 lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="parent-div dropdown-content rounded-box z-[1] mt-5 p-4"
              >
                {menu}
              </ul>
            </div>
          </div>

          <div className="navbar-end hidden lg:flex flex-grow justify-end w-10/12">
            <ul tabIndex={0} className="flex parent-div">
              {menu}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
