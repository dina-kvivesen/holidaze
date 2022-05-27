import Head from '../components/layout/Head';
import IndexHeading from '../components/common/IndexHeading';
import Layout from '../components/layout/indexLayout';
import { PrimaryButton } from '../components/common/Buttons';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="background__image">
      <Layout containerSize="smallWidth">
        <Head />
        <IndexHeading text="book your stay in bergen"/>
        <div className="mx-auto flex justify-center ">
          <Link href="/places">
            <a>
              <PrimaryButton>View accommodations</PrimaryButton>
            </a>
          </Link>
        </div>
      </Layout>
    </div>
  );
}

