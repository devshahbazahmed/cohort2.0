const aboutMeList = () => React.createElement("li", null, "About Me");
const portfolioList = () => React.createElement("li", null, "Portfolio");
const servicesList = () => React.createElement("li", null, "Services");
const blogList = () => React.createElement("li", null, "Blog");

const ul = () => React.createElement("ul", { id: "title", key: 'title' }, [aboutMeList(), portfolioList(), servicesList(), blogList()]);
const nav = () => React.createElement("nav", { id: "navbar" }, ul());

export default nav;