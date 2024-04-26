import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffe = useLoaderData();
    // console.log(coffe, 'update part')
    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const url = form.url.value;
        const updateCoffee = {name, quantity, supplier, taste, category, url, details};
        console.log(updateCoffee);
        
        // update code
        fetch(`http://localhost:5000/coffee/${coffe._id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                // alert('Coffee added');
                Swal.fire({
                    title: 'Success!',
                    text: 'You updated a Coffee',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div>
      <h1 className="text-center font-bold mt-10 text-2xl"> Update Coffee</h1>
      <h1 className="text-center font-bold my-10 text-2xl"> Name : {coffe.name} </h1>
      <div className="bg-[#F4F3F0] p-10 " >
        <form onSubmit={handleUpdateCoffee} >
            {/* form name and quantity row */}
          <div className="md:flex gap-8 " >
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Coffee name?</span>
            </div>
            <input
              type="text"
              placeholder="Name"
              name="name"
              defaultValue={coffe.name}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text"> Available Quantity </span>
            </div>
            <input
              type="text"
              placeholder="Quantity"
              name="quantity"
              defaultValue={coffe.quantity}
              className="input input-bordered w-full"
            />
          </label>
          </div>
            {/* form supplier and taste row */}
          <div className="md:flex gap-8 " >
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text"> Supplier </span>
            </div>
            <input
              type="text"
              placeholder="Supplier"
              name="supplier"
              defaultValue={coffe.supplier}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text"> Taste </span>
            </div>
            <input
              type="text"
              placeholder="Taste"
              name="taste"
              defaultValue={coffe.taste}
              className="input input-bordered w-full"
            />
          </label>
          </div>
            {/* form Category and details row */}
          <div className="md:flex gap-8 " >
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <input
              type="text"
              placeholder="Category"
              name="category"
              defaultValue={coffe.category}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text"> Details </span>
            </div>
            <input
              type="text"
              placeholder="Details"
              name="details"
              defaultValue={coffe.details}
              className="input input-bordered w-full"
            />
          </label>
          </div>
            {/* form photo url row */}
          <div className="" >
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Photo URL</span>
            </div>
            <input
              type="text"
              placeholder="Name"
              name="url"
              defaultValue={coffe.url}
              className="input input-bordered w-full"
            />
          </label>
          </div>
          <input className=" btn border-none btn-block my-10 bg-success " type="submit" value="Update Coffee" />
        </form>
      </div>
    </div>
    );
};

export default UpdateCoffee;