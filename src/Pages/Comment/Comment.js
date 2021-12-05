import axios from 'axios';
import React from 'react';
import './Comment.css'
import { useForm } from 'react-hook-form';

const Comment = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://limitless-forest-07232.herokuapp.com/comments', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Data successfull inserted')
                    reset();
                }
            })
    }
    return (
        <div className="addservice mt-5">
            <hr />
            <h2 style={{ textAlign: 'center' }}>Give Your Review </h2>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Enter your name" />
                <textarea {...register("description")} placeholder="Enter Description" style={{ width: '40%' }} />
                <input type="number" {...register("rating")} placeholder="Rating" />

                <input type="submit" className="text-dark bg-warning" />
            </form>
        </div>
    );
};


export default Comment;