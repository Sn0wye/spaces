import * as React from 'react';
import { SVGProps } from 'react';

const SvgMoon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 256 256'
    {...props}
  >
    <path fill='none' d='M0 0h256v256H0z' />
    <path
      d='M216.7 152.6A91.9 91.9 0 0 1 103.4 39.3h0a92 92 0 1 0 113.3 113.3Z'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={16}
    />
  </svg>
);

export default SvgMoon;
