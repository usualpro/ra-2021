export const Counter = (props) => {
    const { counter, increment, decrement, reset } = props;
    return <>
        <h1>Redux counter {counter}</h1>
        <div className="d-grid gap-3">
            <div>
                <button className="btn btn-primary" onClick={increment}>+</button>
            </div>
            <div>
                <button className="btn btn-secondary" onClick={decrement}>-</button>
            </div>
            <div>
                <button className="btn btn-danger" onClick={reset}>Reset</button>
            </div>
        </div>

    </>
};