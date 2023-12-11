import { Suspense, lazy } from "react";

export interface PhosporIconProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  icon: string;
}

export default function RemixIcon(props: PhosporIconProps): JSX.Element {
  const { icon, className = "", ...rest } = props;

  // lel this actually works in runtime
  const IconComponent = lazy(() => import(`remixicon-react/${icon}Icon`));

  // check suspense needed
  return (
    <span role="img" className={`wave-icon ${className}`} {...rest}>
      <Suspense fallback="...">
        <IconComponent />
      </Suspense>
    </span>
  );
}
