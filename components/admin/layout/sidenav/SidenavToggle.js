import { Disclosure } from '@headlessui/react';
import { MenuAlt3Icon, XIcon } from '@heroicons/react/outline';

function SidenavToggle({ sidenavOpen, setSidenavOpen }) {
  return (
    <div className="-mr-2 flex lg:hidden">
      <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-0">
        <span className="sr-only">Open main menu</span>
        {sidenavOpen ? (
          <XIcon
            className="block h-6 w-6"
            aria-hidden="true"
            onClick={() => setSidenavOpen(!sidenavOpen)}
          />
        ) : (
          <MenuAlt3Icon
            className="block h-6 w-6"
            aria-hidden="true"
            onClick={() => setSidenavOpen(!sidenavOpen)}
          />
        )}
      </Disclosure.Button>
    </div>
  );
}

export default SidenavToggle;