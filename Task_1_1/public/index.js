const element1 = React.createElement(
    "h1",
    { id: "id_001", className: "main_title" },
    "Hello World!!! ReactElement"
);

ReactDOM.render(element1, document.getElementById("container"));