import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faParking,
  faBed,
} from "@fortawesome/free-solid-svg-icons";

function FeaturesListItem({ icon, text }) {
  switch (icon) {
    case 'parking':
      icon = <FontAwesomeIcon icon={faParking} className="inline w-5 mr-2 text-primary-light" />;
      break;
    case 'bed':
      icon = <FontAwesomeIcon icon={faBed} className="inline w-5 mr-2 text-primary-light" />;
      break;
    case 'bath':
      icon = <FontAwesomeIcon icon={faBath} className="inline w-5 mr-2 text-primary-light" />;
      break;
  }

  return (
    <li className="inline-block text-base font-semibold mr-6">
      {icon}
      {text}
    </li>
  );
}

export default FeaturesListItem;