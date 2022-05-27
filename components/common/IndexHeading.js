import PropTypes from 'prop-types';

function IndexHeading({ text }) {
  return <h1 className="font-medium font-poppins text-4xl mt-24 mb-10 text-center text-white uppercase">{text}</h1>;
}

IndexHeading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default IndexHeading;