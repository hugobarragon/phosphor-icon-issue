import { Suspense, lazy } from "react";

export interface PhosporIconProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  icon: string;
}

export default function PhosporIcon(props: PhosporIconProps): JSX.Element {
  const { icon, className = "", ...rest } = props;

  // lel this actually works in runtime
  const IconComponent = lazy(
    () =>
      import(`@phosphor-icons/react/dist/csr/${icon}.mjs`).then((r: any) => {
        console.log("r", r);
        return { default: r[icon] };
      }) as any
  );

  // check suspense needed
  return (
    <span role="img" className={`wave-icon ${className}`} {...rest}>
      <Suspense fallback="...">
        <IconComponent />
      </Suspense>
    </span>
  );
}
