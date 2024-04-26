import Swal from 'sweetalert2'
const AddCoffee = () => {
    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const url = form.url.value;
        const newCoffee = {name, quantity, supplier, taste, category, url, details};
        console.log(newCoffee);

        // send data to server 
        fetch(`http://localhost:5000/coffee`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                // alert('Coffee added');
                Swal.fire({
                    title: 'Success!',
                    text: 'You added a Coffee',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
  return (
    <div>
      <h1 className="text-center font-bold text-2xl">Add Coffee</h1>
      <div className="bg-[#F4F3F0] p-10 " >
        <form onSubmit={handleAddCoffee} >
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
              className="input input-bordered w-full"
            />
          </label>
          </div>
          <input className=" btn border-none btn-block my-10 bg-success " type="submit" value="Add Coffee" />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
