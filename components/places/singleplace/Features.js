import FeaturesListItem from './FeaturesListItem';

function Features(props) {
  return (
    <ul>
      <FeaturesListItem
        icon="bed"
        text={`${props.bedrooms} ${
          props.bedrooms === 1 ? 'bedroom' : 'bedrooms'
        }`}
      />
      <FeaturesListItem
        icon="bath"
        text={`${props.bathrooms} ${
          props.bathrooms === 1 ? 'bathroom' : 'bathrooms'
        }`}
      />
      <FeaturesListItem
        icon="parking"
        text={`${props.parking} ${props.parking === 1 ? 'parking' : 'parking'}`}
      />
      {props.kitchen && <FeaturesListItem icon="kitchen" text="Kitchen" />}
      {props.breakfast && (
        <FeaturesListItem icon="breakfast" text="Breakfast" />
      )}
      {props.wifi && <FeaturesListItem icon="wifi" text="WIFI" />}
    </ul>
  );
}

export default Features;