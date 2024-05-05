import { FrameSecond } from './FrameSecond';
import { FrameThird } from './FrameThird';
import { FrameFourth } from './FrameFourth';
import { FrameFifth } from './FrameFifth';

export const frameComponents: { [key: number]: () => JSX.Element } = {
  1: FrameSecond,
  2: FrameThird,
  3: FrameFourth,
  4: FrameFifth,
};
