export interface NavItem {
  url: string;
  text: string;
}

export interface DropNavProps {
  text: string;
  children: Array<NavItem>;
}

function DropNav({ text, children }: DropNavProps) {
  return (
    <li className="group">
      <button className="block p-5 text-sm text-gray-700 hover:text-black lg:p-6 lg:text-base">
        {text}
      </button>
      <div className="hidden absolute shadow-lg bg-white group-hover:block">
        {children.map((child) => (
          <a
            key={child.text}
            href={child.url}
            className="block py-3 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-black lg:py-4 lg:px-6 lg:text-base"
          >
            {child.text}
          </a>
        ))}
      </div>
    </li>
  );
}

export default DropNav;
