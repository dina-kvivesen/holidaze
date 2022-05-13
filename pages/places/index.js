import Head from '../../components/layout/Head';
import { useEffect, useState } from 'react';
import Heading from '../../components/common/Heading';
import Layout from '../../components/layout/Layout';
import Cards from '../../components/places/card/Cards';
import SearchBar from '../../components/places/SearchBar'; 
import { BASE_URL } from '../../constants/api';
import axios from 'axios';
import { BigMessage } from '../../components/common/Message';

function Home() {
  const [error, setError] = useState(null);
  const [filteredPlaces, setFilteredPlaces] = useState(null);
  const [places, setPlaces] = useState([]);

  const url = BASE_URL + 'places?populate=*';

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setPlaces(res.data.data);
        setFilteredPlaces(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, []);

  if (error) {
    return (
      <Layout containerSize="fullWidth">
        <BigMessage message={`${error}`} style="danger" />
      </Layout>
    );
  }
  if (!filteredPlaces && !error) {
    return (
      <Layout containerSize="fullWidth">
        <BigMessage message="Loading..." style="loading" />
      </Layout>
    );
  }


  return (
    <Layout containerSize="fullWidth">
      <Head title="Accommodations" />
       <Heading text="Accomodations" />
      <div className="max-w-2xl mx-4" style={{ height: '100px' }}>
        <SearchBar
          places={places}
          filteredPlaces={filteredPlaces}
          setFilteredPlaces={setFilteredPlaces}
        />
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 places__wrapper bg-neutral-light py-10 rounded-t-lg ">
        <ul className="col-span-5 md:col-span-2 row-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-4 overflow-y-auto mx-auto ">
          <Cards filteredPlaces={filteredPlaces} />
        </ul>
      </div>
    </Layout>
  );
}

export default Home;