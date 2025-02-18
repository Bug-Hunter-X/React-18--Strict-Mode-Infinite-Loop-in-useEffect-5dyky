```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop in React 18+ due to strict mode
    setCount(count + 1); 
  }, []);

  return <div>Count: {count}</div>;
}
```