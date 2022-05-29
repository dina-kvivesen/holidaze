import AdminLayout from '../../components/admin/layout/AdminLayout';
import Heading from '../../components/common/Heading';
import Head from '../../components/layout/Head';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { useRouter } from 'next/router';
import { BigMessage } from '../../components/common/Message';
import DashboardItems from '../../components/admin/DashboardItems';

function Dashboard() {
  const [auth] = useContext(AuthContext);
  const router = useRouter();

  if (!auth) {
    router.push('/login');
    return (
      <BigMessage message="Oops! Did you forget to log in?" style="danger" />
    );
  }

  return (
    <>
      <AdminLayout>
        <Head title="Dashboard" />
        <Heading text="Dashboard" />
        <div className='bg-neutral-light h-screen py-10 rounded-t-3xl px-2'>
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
          <DashboardItems href="/admin/messages" heading="Messages">
            <p>View all messages here</p>
          </DashboardItems>
          <DashboardItems href="/admin/enquiries" heading="Enquiries" >
            <p>View all enquiries here</p>
          </DashboardItems>
          <DashboardItems href="/admin/addplace" heading="Add accommodation" >
            <p>Add new accomodation here</p>
          </DashboardItems>
        </div>
        </div>
      </AdminLayout>
    </>
  );
}

export default Dashboard;