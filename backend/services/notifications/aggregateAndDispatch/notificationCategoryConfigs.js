/**
 * This file will have a configuration that will help aggregator service to aggregate the notifications
 *
 */

const mergeBasis = {
  eachDay: 1, // default
};

const properties = {
  reminder: {
    merge: true,
    basis: mergeBasis.eachDay,
  },
};

module.exports = properties;
