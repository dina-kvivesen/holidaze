import Head from '../../components/layout/Head';
import { HeadingSmaller } from '../../components/common/Heading';
import Layout from '../../components/layout/Layout';
import { BASE_URL } from '../../constants/api';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Features from '../../components/places/singleplace/Features';
// import Host from '../../components/places/singleplace/Host';
// import ImageGrid from '../../components/places/singleplace/images/ImageGrid';

export default function Place() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(router.query);

  const { data, error } = useSWR(
    slug ? `${BASE_URL}places?slug=${slug}` : null
    
  );

  if (error) return <p>error</p>;
  if (!data) return <p>loading..</p>;

  const place = data;

  return (
    <Layout containerSize="smallWidth">
      <div className="mt-20">
        <Head title={place.title} />
        {/* <ImageGrid featured={place.featured_image} images={place.images} /> */}
        <HeadingSmaller text={place.attributes.title} />
        <div className="my-4 flex items-center">
          <p className="text-xl">
            <span className="font-bold">${place.price}</span> / night
          </p>
        </div>
        <div className="grid grid-cols-5 gap-10">
          <div className="col-span-5 xl:col-span-3">
            <div>
              <Features
                guests={place.bed}
                bathrooms={place.bath}
                bedrooms={place.parking}
              />
            </div>
            {/* <div className="block xl:hidden">
              <Host host={place.host} place={place.title} />
            </div> */}
            <p className="mt-6 leading-relaxed">{place.description}</p>
          </div>
          {/* <div className="hidden xl:block col-span-2">
            <Host host={place.host} place={place.title} />
          </div> */}
        </div>
      </div>
    </Layout>
  );
}