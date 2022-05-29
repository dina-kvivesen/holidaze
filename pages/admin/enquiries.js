import AdminLayout from '../../components/admin/layout/AdminLayout';
import Heading from '../../components/common/Heading';
import Head from '../../components/layout/Head';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getAdminData } from '../../hooks/useApi';
import { BigMessage } from '../../components/common/Message';

function Enquiries() {
  const [auth] = useContext(AuthContext);
  const router = useRouter();

  if (!auth) {
    router.push('/login');
    return (
      <BigMessage message="Oops! Did you forget to log in?" style="danger" />
    );
  }

  const { data, error } = getAdminData('enquiries');

  if (error) {
    console.log(error);
    return (
      <AdminLayout>
        <Head title="Enquiries | Dashboard" />
        <BigMessage message="Oops something went wrong..." style="danger" />
      </AdminLayout>
    );
  }
  if (!data)
    return (
      <AdminLayout>
        <Head title="Enquiries | Dashboard" />
        <BigMessage message="Loading messages..." style="loading" />
      </AdminLayout>
    );
  return (
    <AdminLayout>
      <Head title="Enquiries | Dashboard" />
      <div className="m-0">
        <Heading text="Enquiries" />
        <div className='h-screen bg-neutral-light py-2 rounded-t-3xl'>
          <div className="shadow m-8">
            <table className="w-full table-fixed divide-y divide-gray-200">
              <thead className="bg-primary-light">
                <tr>
                  <th
                    scope="col"
                    className="hidden md:table-cell w-1/4 px-6 py-3 text-left font-semibold text-white uppercase">
                    Guest
                  </th>
                  <th
                    scope="col"
                    className="w-full px-2 md:px-6 py-3 text-left font-semibold text-white uppercase">
                    Host / Message
                  </th>
                </tr>
              </thead>
              <tbody className="w-full bg-white divide-y divide-gray-200">
                {data.map((enquiry) => {
                  return (
                    <tr
                      key={enquiry.id}
                      className={`cursor-pointer w-full transition hover:shadow-lg`}>
                      <td className="hidden md:table-cell w-1/12 px-6 py-4 truncate whitespace-nowrap">
                        <Link
                          href="enquiries/[id]"
                          as={`enquiries/${enquiry.id}`}>
                          <a>{enquiry.attributes.user_name}</a>
                        </Link>
                      </td>
                      <td className="w-1/12 px-2 md:px-6 py-4 whitespace-nowrap truncate">
                        <span className="w-1/4">
                          <Link
                            href="enquiries/[id]"
                            as={`enquiries/${enquiry.id}`}>
                            <a>{enquiry.attributes.host}</a>
                          </Link>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export function TableHeadCol({ text }) {
  return (
    <th
      scope="col"
      className="w-1/3 px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider">
      {text}
    </th>
  );
}

export default Enquiries;