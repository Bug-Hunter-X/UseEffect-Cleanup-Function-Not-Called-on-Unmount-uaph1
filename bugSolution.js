```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldCleanup, setShouldCleanup] = useState(true);

  useEffect(() => {
    // This effect runs only once on mount
    console.log('Component mounted');
    return () => {
      if (shouldCleanup) {
        console.log('Component unmounting');
      }
    };
  }, [shouldCleanup]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {
        setCount(count + 1);
        // Setting shouldCleanup to false right before unmounting. Simulates edge case
        //  when component unmounts before cleanup can run
        setTimeout(() => setShouldCleanup(false), 0);
      }}>Click me</button>
    </div>
  );
}
```