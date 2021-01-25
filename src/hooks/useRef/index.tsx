import React, { useState, useRef, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const preCountUseRef = useRef(count);

  useEffect(() => {
    preCountUseRef.current = count;
  });

  return (
    <div>
      <p>precount: {preCountUseRef.current}</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(() => count + 1)}>Click me</button>
    </div>
  );
};

export default App;
