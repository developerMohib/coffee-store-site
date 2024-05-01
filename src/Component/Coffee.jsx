import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Coffee = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, url } =
    coffee;

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-self.vercel.app/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaing = coffees.filter(cof => cof._id !== id);
              setCoffees(remaing)
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl relative ">
        <figure>
          <img src={url} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {" "}
            <span className="font-semibold "> Name </span>: {name}{" "}
          </h2>
          <p>
            {" "}
            <span className="font-semibold ">Quantity</span> : {quantity}{" "}
          </p>
          <p>
            {" "}
            <span className="font-semibold ">Supplier</span> : {supplier}{" "}
          </p>
          <p>
            {" "}
            <span className="font-semibold "> Taste </span> : {taste}{" "}
          </p>
          <p>
            {" "}
            <span className="font-semibold "> Category </span> : {category}{" "}
          </p>
          <p>
            {" "}
            <span className="font-semibold "> Details </span> : {details}{" "}
          </p>
          <div className="card-actions flex flex-col absolute right-0 top-6 ">
            <button className="btn btn-primary">View </button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn btn-primary">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-secondary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Coffee.propTypes = {
  coffee: PropTypes.node,
  coffees: PropTypes.node,
  setCoffees: PropTypes.node,
};
export default Coffee;
