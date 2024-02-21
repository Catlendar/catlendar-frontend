export interface Option {
  value: string;
  name: string;
}

export interface SelectBoxProps {
  width: number | string;
  options: Option[];
  onChange: (value: string) => void;
}
