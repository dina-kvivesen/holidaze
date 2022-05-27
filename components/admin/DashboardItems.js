import PropTypes from 'prop-types';
import Link from 'next/link';

function DashboardItems({ heading, href, children }) {
  return (
    <div className="bg-white border-solid border-2 border-gray-200 shadow flex flex-col justify-between rounded-md">
      <Link href={href} passHref>
        <a>
          <h2 className="w-full cursor-pointer rounded-t-md bg-secondary-dark font-semibold text-lg text-white p-4">
            {heading}
          </h2>
        </a>
      </Link>
      <div className="p-6">{children}</div>
      <Link href={href} passHref>
        <div className="w-full cursor-pointer rounded-b-md bg-gray-100 hover:bg-gray-50 p-4 text-sm text-center font-medium hover:font-bold">
          View all {heading}
        </div>
      </Link>
    </div>
  );
}

export default DashboardItems;
DashboardItems.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};