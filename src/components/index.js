import { useState, useCallback } from 'react';

// https://github.com/mobxjs/mobx-react-lite/blob/master/src/utils/utils.ts
// https://github.com/CharlesStover/use-force-update


const EMPTY_ARRAY = [];

export default () => {
  const [, setTick] = useState(0);
  const update = useCallback(() => {
    setTick((tick) => tick + 1);
  }, EMPTY_ARRAY);
  return update;
};
