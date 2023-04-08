import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropNav, { DropNavProps, NavItem } from "./DropNav";

type NavList = Array<NavItem | DropNavProps>;

function isNavItem(something: object): something is NavItem {
  return "url" in something;
}

function NavBar() {
  const navList: NavList = [
    {
      text: "Introduce",
      children: [
        { text: "Club Introduce", url: "#" },
        { text: "Member Introduce", url: "#" },
        { text: "History", url: "#" },
      ],
    },
    {
      text: "Activities",
      children: [
        { text: "Developer Team", url: "#" },
        { text: "Promotion Team", url: "#" },
      ],
    },
    {
      text: "News",
      url: "#news",
    },
  ];
  return (
    <>
      {/* For Mobile Devices */}
      <div className="sm:hidden">
        <input id="menu" type="checkbox" className="peer hidden" />
        <label htmlFor="menu" className="block py-4 text-xl">
          <FontAwesomeIcon icon={icon({ name: "bars" })} />
        </label>
        <div className="hidden absolute left-0 w-full shadow-md peer-checked:block">
          {navList.map((nav) =>
            isNavItem(nav) ? (
              <a
                key={nav.text}
                href={nav.url}
                className="block w-full py-6 bg-white text-gray-800 text-center hover:bg-gray-100"
              >
                {nav.text}
              </a>
            ) : (
              <button
                key={nav.text}
                className="block w-full py-6 bg-white text-gray-800 text-center hover:bg-gray-100"
              >
                {nav.text}
              </button>
            )
          )}
        </div>
      </div>

      {/* For Bigger Devices (Tablets, Laptops, etc)*/}
      <ul className="flex items-center px-6 max-sm:hidden lg:px-8">
        {navList.map((nav) =>
          isNavItem(nav) ? (
            <a
              key={nav.text}
              href={nav.url}
              className="block p-5 text-sm text-gray-700 hover:bg-gray-100 hover:text-black lg:p-6 lg:text-base"
            >
              {nav.text}
            </a>
          ) : (
            <DropNav key={nav.text} {...nav} />
          )
        )}
      </ul>
    </>
  );
}

export default NavBar;
