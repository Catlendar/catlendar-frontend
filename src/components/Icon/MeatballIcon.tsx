import React from 'react';

export interface SvgIconProps {
  fillColor?: string;
}

export default function MeatballIcon({ fillColor }: SvgIconProps) {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 13.125C12.6213 13.125 13.125 12.6213 13.125 12C13.125 11.3787 12.6213 10.875 12 10.875C11.3787 10.875 10.875 11.3787 10.875 12C10.875 12.6213 11.3787 13.125 12 13.125Z"
        fill={fillColor}
      />
      <path
        d="M18 13.125C18.6213 13.125 19.125 12.6213 19.125 12C19.125 11.3787 18.6213 10.875 18 10.875C17.3787 10.875 16.875 11.3787 16.875 12C16.875 12.6213 17.3787 13.125 18 13.125Z"
        fill={fillColor}
      />
      <path
        d="M6 13.125C6.62132 13.125 7.125 12.6213 7.125 12C7.125 11.3787 6.62132 10.875 6 10.875C5.37868 10.875 4.875 11.3787 4.875 12C4.875 12.6213 5.37868 13.125 6 13.125Z"
        fill={fillColor}
      />
    </svg>
  );
}

MeatballIcon.defaultProps = {
  fillColor: '#D9D9D9',
};
