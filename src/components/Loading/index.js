import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { CenterLoading } from './styles';

const containerLoadings = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const loadingCircle = {
  start: {
    y: '0%',
  },
  end: {
    y: '100%',
  },
};
const loadingTransition = {
  duration: 0.4,
  yoyo: Infinity,
  ease: 'easeIn',
};

function Loading({ isLoading }) {
  if (!isLoading) return <></>;

  return (
    <CenterLoading>
      <div className="divMain" />
      <motion.div variants={containerLoadings} initial="start" animate="end">
        <motion.span variants={loadingCircle} transition={loadingTransition} />
        <motion.span variants={loadingCircle} transition={loadingTransition} />
        <motion.span variants={loadingCircle} transition={loadingTransition} />
      </motion.div>
    </CenterLoading>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};

export default Loading;
