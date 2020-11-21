export interface ComponentPatternProps {
  className?: string;
  element?: keyof JSX.IntrinsicElements;
  [key: string]: any;
}
