import { PrimaryButton } from '../../../common/Buttons';
import {
  PlusCircleIcon,
  ViewGridIcon,
  MailIcon,
  QuestionMarkCircleIcon,
  LogoutIcon,
  ArrowCircleLeftIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Sidebar({ auth, setAuth, logout }) {
  const router = useRouter();

  return (
    <>
      <div className="bg-primary-dark text-white fixed w-1/4 xl:w-1/5 h-full flex flex-col justify-between items-center">
        <div className="flex flex-col w-full items-center">
          <Link href="/">
            <a>
              <img
                src="/logo1.png"
                alt="Holidaze Logo"
                className="w-36 mt-8 mb-14"
              />
            </a>
          </Link>
          <div className="mb-8">
            <Link href="/admin/addplace">
              <a className="cursor-pointer">
                <PrimaryButton type="">
                  <PlusCircleIcon className="inline w-5 mr-3" />
                  Add new place
                </PrimaryButton>
              </a>
            </Link>
          </div>

          <ul className="w-full">
            <li>
              <Link href="/admin">
                <a
                  className={
                    router.pathname == '/admin'
                      ? 'dashboard__link--active'
                      : 'dashboard__link'
                  }>
                  <ViewGridIcon className="inline w-5 mr-3" />
                  Dashboard
                </a>
              </Link>
            </li>
            <li className="relative">
              <Link href="/admin/messages">
                <a
                  className={
                    router.pathname == '/admin/messages'
                      ? 'dashboard__link--active'
                      : 'dashboard__link'
                  }>
                  <MailIcon className="inline w-5 mr-3" />
                  Messages
                </a>
              </Link>
            </li>
            <li className="relative">
              <Link href="/admin/enquiries">
                <a
                  className={
                    router.pathname == '/admin/enquiries'
                      ? 'dashboard__link--active'
                      : 'dashboard__link'
                  }>
                  <QuestionMarkCircleIcon className="inline w-5 mr-3" />
                  Enquiries
                </a>
              </Link>
            </li>
          </ul>
          <ul className="w-full border-t-2 border-secondary">
            <li className="dashboard__link cursor-pointer" onClick={logout}>
              <LogoutIcon className="inline w-5 mr-3" />
              Sign out
            </li>
            <li>
              <Link href="/">
                <a
                  className={
                    router.pathname == '/'
                      ? 'dashboard__link--active'
                      : 'dashboard__link'
                  }>
                  <ArrowCircleLeftIcon className="inline w-5 mr-3" />
                  Website
                </a>
              </Link>
            </li>
          </ul>
        </div>

        {/* <div className="flex flex-col items-center pb-8 w-full">
          <p className='flex justify-center'>
            {auth.user.username}
          </p>
          <p className="text-xs text-secondary-light opacity-70">
            {auth.user.email}
          </p>
        </div> */}
      </div>
    </>
  );
}

export default Sidebar;