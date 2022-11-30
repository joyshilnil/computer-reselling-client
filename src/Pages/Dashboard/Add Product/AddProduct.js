

import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Sppiner from '../../Shared/Sppiner/Sppiner';

const AddProduct = () => {
  const {user} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();
    
    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categoryname');
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url);
                const product = {
                  id: data.specialty,
                  picture: imgData.data.url,
                    sellerName: data.sellerName, 
                    name: data.title,
                    location: data.location,
                    resalePrice: data.resalePrice,
                    orginalPrice: data.orginalPrice,
                    used: data.used,
                    email: data.email,
                }

                // save product to the database
                fetch(`http://localhost:5000/categorys/${data.specialty}`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',                       
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.sellerName} is added successfully`);
                    navigate('/dashboard/myproduct')
                })
            }
        })
    }

    if(isLoading){
        return <Sppiner></Sppiner>
    }

    return (
        <div className='w-full p-7 mx-auto'>
             <h2 className="text-3xl text-info text-center">Add product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Seller Name</span></label>
                    <input type="text" defaultValue={user?.displayName} readOnly {...register("sellerName", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full " />
                    {errors.sellerName && <p className='text-red-500'>{errors.sellerName.message}</p>}
                </div>


                <div className="form-control w-full">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" defaultValue={user?.email} readOnly {...register("email", {
                        required: true
                    })} className="input input-bordered w-full" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>



                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Product Title</span></label>
                    <input type="text" {...register("title", {
                        required: "Title is Required"
                    })} className="input input-bordered w-full " />
                    {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                </div>



                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register("location", {
                        required: "Location is Required"
                    })} className="input input-bordered w-full " />
                    {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                </div>




                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Resale Price</span></label>
                    <input type="text" {...register("resalePrice", {
                        required: "Resale Price is Required"
                    })} className="input input-bordered w-full " />
                    {errors.resalePrice && <p className='text-red-500'>{errors.resalePrice.message}</p>}
                </div>



                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Orginal Price</span></label>
                    <input type="text" {...register("orginalPrice", {
                        required: "Orginal Price is Required"
                    })} className="input input-bordered w-full " />
                    {errors.orginalPrice && <p className='text-red-500'>{errors.orginalPrice.message}</p>}
                </div>



                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Used Time</span></label>
                    <input type="text" {...register("used", {
                        required: " Used Time is Required"
                    })} className="input input-bordered w-full " />
                    {errors.used && <p className='text-red-500'>{errors.used.message}</p>}
                </div>


                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Category</span></label>
                    <select 
                    {...register('specialty')}
                    className="select input-bordered w-full ">
                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.id}
                            >{specialty.name}</option>)
                        }
                        
                        
                    </select>
                </div>
                <div className="form-control w-full ">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="w-full " />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
            </form>
        </div>
    );
};


export default AddProduct;