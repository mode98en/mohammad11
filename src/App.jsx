import { useEffect, useState } from "react";

const App = () => {
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      let resp = await fetch("https://jsonplaceholder.typicode.com/users");
      let jsonData = await resp.json();
      setArr(jsonData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

//   if(loading) return <p>Loading...</p>

  return (
    <div>
      <h1>Hi from App.jsx</h1>
      <ul>
        {loading && <p>Loading...</p>}
        {/* {loading ? <p>Loading...</p> : ""} */}
        {arr.map((el) => (
          <li>{el.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
