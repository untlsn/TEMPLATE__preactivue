

const Counter = observer(() => {
  const count = useSignal(0);
  const double = count.value*2;

  return (
    <div className="flex items-center justify-center h-screen">
      <button onClick={() => count.value++} className="border-2 p-2 rounded-lg">Counter: {count.value}</button>
      <p>Double: { double }</p>
    </div>
  );
});

export default Counter;
