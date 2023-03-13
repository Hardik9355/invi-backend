import React from 'react'
import { useState } from 'react'

export default function LoginDashboard() {
    const [selectedImage,setSelectedImage] = useState();

    const imageChange = (e) =>{
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };
    
    const onSubmit = (e) => {
        e.preventDefault();
        alert(URL.createObjectURL(selectedImage));
    }

    const removeSelectedImage = () => {
        setSelectedImage(null);
    }


  return (

    <div className='flex items-center justify-center border-solid flex-col'>
        <h1 className='text-3xl mb-8'>ReactJs show image preview before Uploading</h1>
        <div className='row flex items-center justify-center'>
            <form onSubmit={ onSubmit } className='form-inline flex flex-col border-solid border-4 border-sky-500 flex items-center justify-center '>
                <div className='form-group'>
                <label className='font-bold flex align-center justify-center'>Choose file to upload:</label>
                <input type='file' className='form-control' accept='image/*' onChange={imageChange} ></input>
                </div> <br/>
                <button type='submit' className='btn btn-success'><i class="fa fa-upload" aria-hidden="true"></i></button>
            </form>
            {selectedImage && (
                <div >
                    <img src={URL.createObjectURL(selectedImage)}  
                         alt='Thumb'
                    />
                    <button onClick={removeSelectedImage}><i class="fa fa-trash" aria-hidden="true"></i></button>
                </div>
            )
            }
        </div>
    </div>
  )
}

