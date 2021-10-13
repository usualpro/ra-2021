export const Counter = props => {
    const { counter, increment, decrement, reset } = props;
    return <>
        <h1>Redux counter {counter}</h1>
        <div className="row">
            <div className="col">
                <button className="btn btn-primary w-100" onClick={increment}>INCREMENT BY 1</button>
            </div>
            <div className="col">
                <button className="btn btn-secondary w-100" onClick={decrement}>DECREMENT BY 1</button>
            </div>
            <div className="col">
                <button className="btn btn-danger w-100" onClick={reset}>RESET</button>
            </div>
        </div>
    </>
};