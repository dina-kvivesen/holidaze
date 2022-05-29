import Link from 'next/link';
import { LogoutIcon, ViewGridIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import AuthContext from '../../../context/AuthContext';
import { UserIcon } from '@heroicons/react/outline'


function AdminMobile() {
  const [auth, setAuth] = useContext(AuthContext);
  const router = useRouter();

  function logout() {
    setAuth(null);
    router.push('/');
  }

  return (
    <>
      <div className="flex items-center px-5">
        <div >
          <div className="text-sm text-black font-medium">
          <UserIcon className="inline w-5 mr-2"/>{auth.user.username}
          </div>
        </div>
      </div>
      <div className="mt-3 px-2 space-y-1">
        <Link href="/">
          <a className="nav__link__mobile">
            <ViewGridIcon className="inline w-5 mr-2" /> Dashboard
          </a>
        </Link>
        <a onClick={logout} className="cursor-pointer nav__link__mobile">
          <LogoutIcon className="inline w-5 mr-2" /> Sign out
        </a>
      </div>
    </>
  );
}

export default AdminMobile;