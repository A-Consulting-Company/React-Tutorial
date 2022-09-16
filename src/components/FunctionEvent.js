function FunctionEvent() {
  function handleClick() {
    alert("Button is clicked!");
  }

  return (
    <div>
      Functional Component
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}

export default FunctionEvent;
