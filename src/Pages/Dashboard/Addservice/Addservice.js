import axios from 'axios';
import React from 'react';
import './Addservice.css';
import { useForm } from "react-hook-form";


const Addservice = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://limitless-forest-07232.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Data successfull inserted')
                    reset();
                }
            })
    }
    return (
        <div className="addservice">
            <h2 style={{ textAlign: 'center' }}>Please Add a Car</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("img")} placeholder='Please submit img url' />
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Enter your Car name" />
                <input type="number" {...register("price")} placeholder=" Price" />
                <input {...register("packege", { required: true, maxLength: 20 })} placeholder="Edition" />
                <textarea {...register("description")} placeholder="Enter Description" style={{ width: '40%' }} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Addservice;