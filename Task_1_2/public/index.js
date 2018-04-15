class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
          <h1>Hello World React component</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('container'));