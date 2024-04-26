import { useLoaderData } from "react-router-dom";
import Coffee from "../Component/Coffee";
import { useState } from "react";

const Home = () => {
    const coffeCollection = useLoaderData();
    // console.log(coffeCollection, 'coffe collection')
    const [coffees, setCoffees] = useState(coffeCollection)
    return (
        <div>
            <h1 className="text-center font-bold text-2xl my-10" >This is home </h1>
            <div className="md:grid gap-8 grid-cols-2" >
            {
                coffees.map(coffee => <Coffee key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees} > </Coffee>)
            }
            </div>
        </div>
    );
};

export default Home;