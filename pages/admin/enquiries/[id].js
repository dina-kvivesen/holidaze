import AdminLayout from '../../../components/admin/layout/AdminLayout';
import Head from '../../../components/layout/Head';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import moment from 'moment';
import { fetchAdminData} from '../../../hooks/useApi';
import { BigMessage } from '../../../components/common/Message';
import AuthContext from '../../../context/AuthContext';

function SingleEnquiry() {
  const [auth] = useContext(AuthContext);
  const router = useRouter();

  if (!auth) {
    router.push('/login');
    return (
      <BigMessage message="Oops! Did you forget to log in?" style="danger" />
    );
  }
  const { id } = router.query;

  const { data, error } = fetchAdminData('enquiries/' + id);

  if (error) return <BigMessage message={`${error}`} style="danger" />;
  if (!data) return <BigMessage message="Loading..." style="loading" />;

  const date = moment(data.attributes.created_at).format(
    'dddd, MMMM Do YYYY, HH:mm'
  );
  const dateFromNow = moment(data.attributes.created_at).fromNow();

  return (
    <>
      <AdminLayout>
        <Head title="Enquiries | Dashboard" />
        <div className="w-full mx-auto h-screen bg-neutral-light py-10 rounded-t-3xl">
          <div className="m-10 rounded-t-lg overflow-hidden border-solid border-2 border-gray-200">
            <div className="p-6 bg-primary-light text-white">
              <h1 className="font-semibold text-lg">
                Enquiry for {data.attributes.host} / {data.attributes.place}
              </h1>
            </div>
            <div className="p-6 flex flex-row justify-between flex-wrap text-sm">
              <p>
                <span className="font-bold mr-4">{data.attributes.user_name}</span>
                {data.attributes.user_email}
              </p>
              <p>
                {date} ({dateFromNow})
              </p>
            </div>
            <p className="p-6 leading-relaxed">{data.attributes.message}</p>
            <p className="p-6 font-semibold text-sm cursor-pointer">
              <a onClick={() => router.back()}>Go back to enquiries</a>
            </p>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}

export default SingleEnquiry;