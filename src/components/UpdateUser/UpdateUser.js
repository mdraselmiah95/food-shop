import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import "./UpdateUser.css";
const UpdateUser = () => {
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/singleProduct/${productId}`)
      .then((response) => response.json())
      .then((data) => setSingleProduct(data));
  }, []);

  return (
    <div>
      <h1>Updated Name:{singleProduct?.name}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={singleProduct?.name} {...register("name")} />
        <input
          defaultValue={singleProduct?.price}
          {...register("price", { required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </div>
  );
};
export default UpdateUser;
