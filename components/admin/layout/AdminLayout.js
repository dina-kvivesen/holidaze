import { Disclosure } from '@headlessui/react';
import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import SidenavToggle from './sidenav/SidenavToggle';
import MobileSidenav from './sidenav/MobileSidenav';
import Sidenav from './sidenav/Sidenav';
import Link from 'next/link';
import AuthContext from '../../../context/AuthContext';
import { useRouter } from 'next/router';

function AdminLayout({ children }) {
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if (!auth) {
      router.push('/login');
    }
  }, []);

  function logout() {
    router.push('/login');
    setAuth(null);
  }
  const user = auth.user;

  return (
    <>
      {auth && (
        <>
          <Disclosure
            as="nav"
            className=" lg:hidden z-10 md:h-16 bg-secondary-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex z-50 items-center justify-between h-16">
                <Link href="/">
                  <a>
                    <img
                      src="/logo1.png"
                      alt="Holidaze Logo"
                      className="w-36"
                    />
                  </a>
                </Link>
                <SidenavToggle
                  setSidenavOpen={setSidenavOpen}
                  sidenavOpen={sidenavOpen}
                />
              </div>
            </div>
            <MobileSidenav
              sidenavOpen={sidenavOpen}
              auth={auth}
              setAuth={setAuth}
              user={user}
              logout={logout}
            />
          </Disclosure>
          <div className="m-0 grid grid-cols-4 xl:grid-cols-5 z-0">
            <div className="hidden lg:block col-span-1 h-screen">
              <Sidenav
                auth={auth}
                setAuth={setAuth}
                user={user}
                logout={logout}
              />
            </div>
            <div className="col-span-4 lg:col-span-3 xl:col-span-4 pb-20 bg-secondary-dark h-screen">
              <main className="m-0">{children}</main>
            </div>
          </div>
        </>
      )}
    </>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminLayout;