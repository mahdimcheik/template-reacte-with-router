import { useEffect } from "react";

export default function ApiComponent({Auth,Category, API}){


    return (<div className="card-api">
        <h1>{API}</h1>
        {Auth && <span>This API needs Authentification</span> }
        <h2>Category : {Category}</h2>
    </div>);
}