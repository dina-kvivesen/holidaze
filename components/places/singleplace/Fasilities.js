import FasilitiesItem from './FasilitiesItem';

function Fasilities(props) {
  return (
    <ul>
      <FasilitiesItem
        icon="bed"
        text={`${props.bedrooms} ${
          props.bedrooms === 1 ? 'bedroom' : 'bedrooms'
        }`}
      />
      <FasilitiesItem
        icon="bath"
        text={`${props.bathrooms} ${
          props.bathrooms === 1 ? 'bathroom' : 'bathrooms'
        }`}
      />
      <FasilitiesItem
        icon="parking"
        text={`${props.parking} ${props.parking === 1 ? 'parking' : 'parking'}`}
      />
    </ul>
  );
}

export default Fasilities;