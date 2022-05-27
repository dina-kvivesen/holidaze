import { Disclosure, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  PlusCircleIcon,
  ViewGridIcon,
  MailIcon,
  QuestionMarkCircleIcon,
  LogoutIcon,
  ArrowCircleLeftIcon,
} from '@heroicons/react/outline';
import { PrimaryButton } from '../../../common/Buttons';

function MobileSidebar({
  sidebarOpen,
  auth,
  logout,
}) {
  const router = useRouter();

  return (
    <>
      {auth && (
        <Disclosure.Panel
          static
          className="lg:hidden fixed z-50 w-full bg-secondary-dark">
          <Transition
            show={sidebarOpen}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0"
            enterTo="transform opacity-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100"
            leaveTo="transform opacity-0">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
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
          </Transition>
        </Disclosure.Panel>
      )}
    </>
  );
}

export default MobileSidebar;