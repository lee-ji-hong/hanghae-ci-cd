import { useState } from 'react';

export default function useCounter() {
  const [count, setCount] = useState(0);

  return {
    count,
    increase: () => setCount(count => count + 1),
    decrease: () => setCount(count => count - 1),
  };
}
