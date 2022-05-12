import CardListItem from './CardListItem';
import Link from 'next/link';
import { Message } from '../../common/Message';


function Cards({ filteredPlaces }) {
  return (
    <>
      {filteredPlaces.map((place) => (
        <li
          key={place.id}
          className="shadow hover:shadow-md border border-gray-100 grid grid-cols-1 grid-rows-2 h-96 rounded-md">
          <div className="rounded-md row-span-1">
            <Link href="places/slug" as={`/places/${place.slug}`}>
              <a>
                <img
                  src={place.attributes.images.data[0]?.attributes.url}
                  alt=""
                  className="object-cover w-full h-full rounded-t-md"
                />
              </a>
            </Link>
          </div>

          <div className="p-4">
            <Link href={`/places/${place.slug}`}>
              <a>
                <h3 className="font-bold">{place.attributes.title}</h3>
              </a>
            </Link>

            <p>
              <span className="font-medium">${place.attributes.price}</span> / night
            </p>
            <ul className="mt-4 my-2">
              <CardListItem
                icon="bed"
                text={`${place.attributes.bed} ${
                  place.bed === 1 ? 'bed' : 'beds'
                }`}
              />
              <CardListItem
                icon="bath"
                text={`${place.attributes.bath} ${
                  place.bath === 1 ? 'bath' : 'baths'
                }`}
              />
              <CardListItem
                icon="parking"
                text={`${place.attributes.parking} ${
                  place.parking === 1 ? 'parking' : 'parking'
                }`}
              />
            </ul>
          </div>
        </li>
      ))}
      {filteredPlaces.length === 0 && (
        <div className="col-span-2 w-100">
          <Message message="No results found..." style="warning" />
        </div>
      )}
    </>
  );
}

export default Cards;