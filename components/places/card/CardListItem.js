import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faParking,
  faBed,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

function CardListItem({ icon, text }) {
  switch (icon) {
    case 'parking':
      icon = <FontAwesomeIcon icon={faParking} className="inline w-4 mr-1 text-primary-light"/>;
      break;
    case 'bed':
      icon = <FontAwesomeIcon icon={faBed} className="inline w-4 mr-1 text-primary-light"/>;
      break;
    case 'bath':
      icon = <FontAwesomeIcon icon={faBath} className="inline w-4 mr-1 text-primary-light"/>;
      break;
  }
  return (
    <li className="inline-block text-sm mr-4">
      {icon}
      {text}
    </li>
  );
}

export default CardListItem;

CardListItem.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.oneOf([
    'parking',
    'bed',
    'bath',
  ]),
};