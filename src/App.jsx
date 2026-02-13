/* eslint-disable no-unused-vars */
import { useCount, usePosts, useUser } from "./store";

import { useState } from "react";

const App = () => {
  const { count, increment, decrement, reset, isEven } = useCount();
  const { posts, createPost } = usePosts();
  const { user, loading, fetchUser } = useUser();

  const [even, setEven] = useState(isEven());

  const handleCheck = () => {
    const even = isEven();
    setEven(even);
  };

  return (
    <div>
      <h1>App</h1>
      <div>{user.name}</div>
      <div>
        <h2>{count}</h2>
        {even ? <p>Even</p> : <p>Odd</p>}
        <button onClick={() => increment(1)}>Increment</button>
        <button onClick={() => decrement(1)}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={handleCheck}>Check Even count</button>
      </div>
      <div>
        <h2>Posts</h2>
        <div>
          //all posts render
          {posts[0]?.title}
        </div>
        <button onClick={() => createPost("Post1", "Desc1")}>Create Post</button>
      </div>

    </div>
  );
};

export default App;
