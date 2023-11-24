import "./wave-icon.less";
import { Suspense, lazy } from "react";
import { AddressBook } from "../icons/AddressBook.js";

export interface WaveIconProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  icon: string;
}

function WaveIcon(props: WaveIconProps): JSX.Element {
  const { icon, className = "", ...rest } = props;

  // lel this actually works in runtime
  /*   const IconComponent = lazy(
    () =>
      import(`../icons/${icon}`).then((r: any) => {
        console.log("r", r);
        return { default: r[icon] };
      }) as any
  );
 */

  // check suspense needed
  return (
    <span role="img" className={`wave-icon ${className}`} {...rest}>
      <Suspense fallback="...">
        <AddressBook />
      </Suspense>
    </span>
  );
}

export default WaveIcon;
