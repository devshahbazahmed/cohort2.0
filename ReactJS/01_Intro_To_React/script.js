import nav from "./nav.js";

const parent = () => React.createElement("div", null, nav());

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(parent());
