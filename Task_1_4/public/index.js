function Hello(props) {
    return (<h1>{props.greeting}</h1>)
}

class App extends React.PureComponent {
    state = {
        val: "Hello world Pure"
    };
    render() {
        return (
            <div className="App">
                <Temp val={this.state.val} />
            </div>
        );
    }
};