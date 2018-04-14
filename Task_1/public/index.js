class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <h1>Hello world</h1>
        )
    }
}

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

ReactDOM.render(<App />, document.getElementById('container'));