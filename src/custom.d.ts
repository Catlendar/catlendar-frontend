declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
