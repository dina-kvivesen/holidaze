import Link from 'next/link';
import { useRouter } from 'next/router';
function Footer() {
  const router = useRouter();

  return (
    <footer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a>
              <img 
              src="/logo1.png" 
              alt="Holidaze Logo"
              className="w-36"
              />
            </a>
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/">
                <a
                  className={
                    router.pathname == '/'
                      ? 'nav__link nav__link--active'
                      : 'nav__link'
                  }>
                  Home
                </a>
              </Link>
              <Link href="/places">
                <a
                  className={
                    router.pathname == '/places'
                      ? 'nav__link nav__link--active'
                      : 'nav__link'
                  }>
                  Accommodations
                </a>
              </Link>
              <Link href="/contact">
                <a
                  className={
                    router.pathname == '/contact'
                      ? 'nav__link nav__link--active'
                      : 'nav__link'
                  }>
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;