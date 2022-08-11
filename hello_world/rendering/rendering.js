const root = ReactDOM.createRoot(
    document.getElementById('root')
);

const element = <h1> hello, world</h1>
root.render(element);

function tick() {
    const time = (
        <div>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    root.render(time)
}
setInterval(tick, 1000)
