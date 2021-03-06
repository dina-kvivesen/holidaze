import AdminLayout from '../../components/admin/layout/AdminLayout';
import Heading from '../../components/common/Heading';
import Head from '../../components/layout/Head';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getAdminData } from '../../hooks/useApi';
import { BigMessage } from '../../components/common/Message';

function Messages() {
  const [auth] = useContext(AuthContext);
  const router = useRouter();

  if (!auth) {
    router.push('/login');
    return (
      <BigMessage message="Oops! Did you forget to log in?" style="danger" />
    );
  }

  const { data, error } = getAdminData('messages');

  if (error) {
    console.log(error);
    return (
      <AdminLayout>
        <Head title="Messages | Dashboard" />
        <BigMessage message="Oops something went wrong..." style="danger" />
      </AdminLayout>
    );
  }
  if (!data)
    return (
      <AdminLayout>
        <Head title="Messages | Dashboard" />
        <BigMessage message="Loading messages..." style="loading" />
      </AdminLayout>
    );
  return (
    <AdminLayout>
      <Head title="Messages | Dashboard" />
      <div className="m-0">
        <Heading text="Messages" />
        <div className='h-screen bg-neutral-light py-2 rounded-t-3xl'>
          <div className="shadow m-8">
            <table className="w-full table-fixed">
              <thead className="bg-primary-light rounded-t-lg ">
                <tr>
                  <th
                    scope="col"
                    className="hidden md:table-cell w-1/4 px-6 py-3 text-left font-semibold text-white uppercase">
                    Name
                  </th>
                  <th
                    scope="col"
                    className="w-full px-2 md:px-6 py-3 text-left font-semibold text-white uppercase">
                    Title
                  </th>
                </tr>
              </thead>
              <tbody className="w-full bg-white divide-y divide-gray-200">
                {data.map((message) => {
                  return (
                    <tr
                      key={message.id}
                      className={`cursor-pointer w-full transition hover:shadow-lg`}>
                      <td className="hidden md:table-cell w-1/12 px-6 py-4 truncate whitespace-nowrap">
                        <Link
                          href="messages/[id]"
                          as={`messages/${message.id}`}>
                          <a>{message.attributes.name}</a>
                        </Link>
                      </td>
                      <td className="w-1/12  px-2 md:px-6 py-4 whitespace-nowrap truncate ">
                        <span className="w-1/4">
                          <Link
                            href="messages/[id]"
                            as={`messages/${message.id}`}>
                            <a>{message.attributes.title}</a>
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

export default Messages;