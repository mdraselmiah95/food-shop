import React from "react";
import { useForm } from "react-hook-form";
import "./AddUser.css";
const AddUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-info bolder">Add Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className="p-2 m-2"
          {...register("name")}
          required
          placeholder="Product name"
        />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          className="p-2 m-2"
          type="number"
          {...register("price", { required: true })}
          required
          placeholder="Price"
        />
        <input
          className="p-2 m-2"
          type="text"
          {...register("description", { required: true })}
          required
          placeholder="Description"
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <input className="py-2 px-3 mt-3 btn btn-danger" type="submit" />
      </form>
    </div>
  );
};

export default AddUser;
