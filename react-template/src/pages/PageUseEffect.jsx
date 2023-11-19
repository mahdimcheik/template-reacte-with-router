import { useEffect, useState } from "react";
import axios from "axios";

export default function PageUseEffect() {
    const [categories, setCategories]  = useState([]);
  useEffect(() => {
    async function getData() {

      const results = await axios.get("https://api.publicapis.org/categories");
      console.log(results.data.categories);
      await new Promise(r => setTimeout(r, 3000));
      setCategories([...results.data.categories]);
    }
    getData();
  }, []);
  return (
    categories.map( category => <h1 key={category}>{category}</h1>)
  );

}
