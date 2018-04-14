const Temp = (props) => {
    return (<h1>{props.val}</h1>)
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