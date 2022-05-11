import PropTypes from 'prop-types';
import NextHead from 'next/head';
import Script from 'next/script'

function Head({ title = '' }) {
  return (
    <NextHead>
      <title>
        {title}
        {title ? ' | ' : ''}Holidaze
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </NextHead>
  );
}

Head.propTypes = {
  title: PropTypes.string,
};

export default Head;
