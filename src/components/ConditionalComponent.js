import { useState } from "react";

export default function ConditionalComponent() {
  const [display, setDisplay] = useState(true);

  let output; //Element variable

  //   if (display) {
  //     output = <h3>Display True </h3>;
  //   } else {
  //     output = <h3>Display false</h3>;
  //   }

  //Ternary expression:

  return display ? (
    <div>
      <h3>Display True </h3>
    </div>
  ) : (
    <div>
      <h3>Display false</h3>
    </div>
  );

  //   return (
  //     <div>
  //       <div>{output}</div>
  //     </div>
  //   );
}
