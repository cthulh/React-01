function Person() {
  return (
    <div className="person">
      <h1>Name 2</h1>
      <p>
        Age: 29
      </p>
    </div>
  );
}

ReactDOM.render(<Person />, document.querySelector('#p1'));
