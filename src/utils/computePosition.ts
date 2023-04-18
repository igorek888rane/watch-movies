import { MutableRefObject } from 'react';

export const computePosition = (
  e: PointerEvent,
  ref: MutableRefObject<null>,
  segment: number
) => {
  let coordinateClick = e.clientX - ref?.current.getBoundingClientRect().left;
  let relativeClick = coordinateClick / ref?.current.offsetWidth;
  if (relativeClick < 0) {
    relativeClick = 0;
  }
  if (relativeClick > 1) {
    relativeClick = 1;
  }
  let relativePercents = relativeClick * 100;
  let approximateValue = relativeClick * segment;
  let valueRound = Math.round(approximateValue);
  let valuePercents = (valueRound / segment) * 100;

  return {
    relativePercents,
    valuePercents,
    valueRound,
  };
};
