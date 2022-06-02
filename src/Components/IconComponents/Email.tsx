import * as React from "react";
import { SVGProps } from "react";

const SvgEmail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="42px"
    height="42px"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.125 35c-.7 0-1.313-.263-1.838-.788-.524-.525-.787-1.137-.787-1.837V9.625c0-.7.263-1.313.787-1.838C4.813 7.263 5.425 7 6.125 7h29.75c.7 0 1.313.263 1.837.787.525.526.788 1.138.788 1.838v22.75c0 .7-.263 1.313-.788 1.837-.525.525-1.137.788-1.837.788H6.125ZM21 21.788 6.125 12.03v20.344h29.75V12.031L21 21.788Zm0-2.625 14.7-9.538H6.344L21 19.163ZM6.125 12.03V9.625v22.75-20.344Z"
      fill="#52525B"
    />
  </svg>
);

export default SvgEmail;
