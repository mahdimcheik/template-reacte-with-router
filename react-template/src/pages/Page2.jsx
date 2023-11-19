import { useLoaderData} from "react-router-dom";

export default function Page2(){
    const {time} = useLoaderData();
    
    return (<div>
        <h1>this is page 2 {time} </h1>
    </div>);
}