import React, { useState, useCallback } from 'react';

const EMPTY_ARRAY = [];

export default () => {
  const [, setTick] = useState(0);
  const update = useCallback(() => {
    setTick((tick) => tick + 1);
  }, EMPTY_ARRAY);
  return update;
};
