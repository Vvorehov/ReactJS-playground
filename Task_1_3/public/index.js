const Temp = (props) => {
    return (<h1>{props.val}</h1>)
}

class App extends React.PureComponent {
    state = {
        val: "Hello world PureComponent"
    };
    render() {
        return (
            <div className="App">
                <Temp val={this.state.val} />
            </div>
        );
    }
};

ReactDOM.render(<App/>, document.getElementById('container'));