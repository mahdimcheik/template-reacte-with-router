import { useEffect, useState } from "react";
import axios from "axios";
import ApiComponent from "../components/ApiComponent";
import { Link, useParams } from "react-router-dom";

export default function PageUseEffectSingle() {
    let {category} = useParams();
    const [entries, setEntries]  = useState([]);
    const [searchParams, setSearchParams] = useState(category);
  useEffect(() => {
    async function getData() {
        if(!category) category= '';

      const results = await axios.get(`https://api.publicapis.org/entries?category=${searchParams}`);
      console.log(results.data.entries);
      await new Promise(r => setTimeout(r, 3000));
      setEntries([...results.data.entries]);
    }
 
    getData();
  }, [setSearchParams]);

  async function restartSearch(){
    const results = await axios.get(`https://api.publicapis.org/entries?category=Programming`);
  console.log(results.data.entries);
  await new Promise(r => setTimeout(r, 3000));
  setEntries([...results.data.entries]);
}
  return (
    <div>
        <Link to={"/pageuseeffectsingle/Programming"}>Go To programming</Link>
        <button onClick={restartSearch}>change Category</button>
    {entries.map( (category, i) => <ApiComponent key={i} API={category.API} Auth={category.Auth} Category={category.Category}/>)}
    </div>
  );

}