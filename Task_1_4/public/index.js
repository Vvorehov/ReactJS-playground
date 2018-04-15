function Hello(props) {
    return (<h1>{props.greeting}</h1>);
}

const element = (
  <Hello greeting="Hello world function" />
);

ReactDOM.render(element, document.getElementById('container'))