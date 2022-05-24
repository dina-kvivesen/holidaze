import Head from '../../components/layout/Head';
import { HeadingSmaller } from '../../components/common/Heading';
import Layout from '../../components/layout/Layout';
import { BASE_URL } from '../../constants/api';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Features from '../../components/places/singleplace/Features';
import Host from '../../components/places/singleplace/Host';
import ImageGrid from '../../components/places/singleplace/images/ImageGrid';

export default function Place() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(
    id ? `${BASE_URL}places?populate=*&{id}` : null
    
    
  );

  if (error) return <p>error</p>;
  if (!data) return <p>loading..</p>;

const parsedId = parseInt(id);
const place = data.find(item => item.id === parsedId);
   console.log(place.attributes.images.data);
  

  return (
    <Layout containerSize="fullWidth">
      <div className="bg-neutral-light min-h-screen p-5 mt-20 rounded-t-lg">
      <div className="mt-5">
        <Head title={place.id} />
        {/* <></> */}
        <ImageGrid featured={place.attributes.featuredImage.data} images={place.attributes.images.data} />
        <HeadingSmaller text={place.attributes.title} />
        <div className="my-4 flex items-center">
          <p className="text-xl">
            <span className="font-bold">${place.attributes.price}</span> / night
          </p>
        </div>
        <div className="grid grid-cols-5 gap-10">
          <div className="col-span-5 xl:col-span-3">
            <div>
              <Features
                guests={place.attributes.bed}
                bathrooms={place.attributes.bath}
                bedrooms={place.attributes.parking}
              />
            </div>
            <div className="block xl:hidden">
            <Host host={place.attributes.host} place={place.attributes.title} />
            </div>
            <p className="mt-6 leading-relaxed">{place.attributes.description}</p>
          </div>
          <div className="hidden xl:block col-span-2">
          <Host host={place.attributes.host} place={place.attributes.title} />
          </div>
        </div>
      </div>
      </div>
    </Layout>
    
  );
}