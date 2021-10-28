import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import "./UpdateUser.css";
const UpdateUser = () => {
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const [isUpdate, setIsUpdated] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch(`http://localhost:3000/update/${productId}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.modifiedCount) {
          setIsUpdated(true);
        } else {
          setIsUpdated(false);
        }
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/singleProduct/${productId}`)
      .then((response) => response.json())
      .then((data) => setSingleProduct(data));
  }, [productId, isUpdate]);

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
