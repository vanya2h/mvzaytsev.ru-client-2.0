
import React, { SVGProps } from 'react';

export interface IClocksIconProps extends SVGProps<any> { }

export const ClocksIcon: React.FunctionComponent<IClocksIconProps> = (
  props: IClocksIconProps,
): React.ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="7" />
    <polyline points="12 9 12 12 13.5 13.5" />
    {/* eslint-disable-next-line */}
    <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" />
  </svg>
);

ClocksIcon.displayName = 'ClocksIcon';
