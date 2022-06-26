import * as React from 'react';
import { SVGProps } from 'react';

const SvgPencil = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 256 256'
    {...props}
  >
    <path fill='none' d='M0 0h256v256H0z' />
    <path
      d='M92.7 216H48a8 8 0 0 1-8-8v-44.7a7.9 7.9 0 0 1 2.3-5.6l120-120a8 8 0 0 1 11.4 0l44.6 44.6a8 8 0 0 1 0 11.4l-120 120a7.9 7.9 0 0 1-5.6 2.3ZM136 64l56 56'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={16}
    />
  </svg>
);

export default SvgPencil;
