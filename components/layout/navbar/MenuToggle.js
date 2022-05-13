import { Disclosure } from '@headlessui/react';
import { MenuAlt3Icon, XIcon } from '@heroicons/react/outline';

function MenuToggle({ menuOpen, setMenuOpen }) {
  return (
    <div className="-mr-2 flex md:hidden">
      <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md    focus:outline-none focus:ring-0  text-slate-200">
        <span className="sr-only">Open main menu</span>
        {menuOpen ? (
          <XIcon
            className="block h-6 w-6"
            aria-hidden="true"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        ) : (
          <MenuAlt3Icon
            className="block h-6 w-6"
            aria-hidden="true"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        )}
      </Disclosure.Button>
    </div>
  );
}

export default MenuToggle;