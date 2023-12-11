import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
// import PhosporIcon from "./DynamicIconLoad/index";
import RemixIcon from "./DynamicIconLoad/index-2";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    Phosphor icon NOT working (uncomment on code):
    {/* not working uncomment to check */}
    {/* <PhosporIcon icon="AddressBook" /> */}
    <br />
    Remix icon working:
    {/* This working as expected only importing in runtime the needed icon,much faster load times */}
    <RemixIcon icon="AlertLine" />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
