export interface Option {
  value: string;
  name: string;
}

export interface SelectBoxProps {
  width: number | string;
  name: string;
  options: Option[];
  initial: string;
  onChange: (value: string) => void;
}
