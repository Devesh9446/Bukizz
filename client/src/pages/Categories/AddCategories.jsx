import { Button, Input } from 'components';
import React, { useState } from 'react';
import { fetchApi } from 'utils/fetchApi';
import { Toast } from 'utils/swal';

function AddCategories({ setShowModel =()=>{}}) {
    const [formData, setFormData] = useState({
        description: "",
        offer: "",
        name: "",
        Image: null
    });
    const [catImage, setCatImage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'Image') {
            setFormData((prevData) => ({ ...prevData, [name]: e.target.files[0] }));
        }
        else {
            setFormData((prevData) => ({ ...prevData, [name]: value }))
        }
    };

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     setCatImage(file);
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            // If the form is valid, perform your desired actions with the form data and catImage
            // For now, just display an alert
            console.log(formData);
            const resp = await fetchApi('/v1/admin/addcategory', formData)
            console.log("resp", resp);
            if (resp.success) {

                Toast.fire({
                    icon: "success",
                    title: "Category added successfully",
                });
                setShowModel(false);
            }
        }
    };

    const validateForm = () => {
        const { name, description, offer, Image } = formData;

        if (!name.trim() || !description.trim() || !offer.trim()) {
            Toast.fire({
                icon: "error",
                title: "Please fill in all the fields",
            });
            return false;
        }

        if (!Image) {
            Toast.fire({
                icon: "error",
                title: "Please select a category Image",
            });
            return false;
        }

        return true;
    };

    return (
        <div className='max-w-[600px]'>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
                <Input
                    name="name"
                    placeholder="Category name"
                    value={formData.name}
                    onChange={handleChange}
                    className="!placeholder:text-blue_gray-200 font-medium px-2 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-300 border-solid rounded flex md:flex-1 md:ml-[0] md:mt-0 my-1.5 w-full"
                />
                <Input
                    name="description"
                    placeholder="Category description"
                    value={formData.description}
                    onChange={handleChange}
                    className="!placeholder:text-blue_gray-200 font-medium px-2 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-300 border-solid rounded flex md:flex-1 md:ml-[0] md:mt-0 my-1.5 w-full"
                />
                <Input
                    name="offer"
                    placeholder="Category offer"
                    value={formData.offer}
                    onChange={handleChange}
                    className="!placeholder:text-blue_gray-200 font-medium px-2 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-300 border-solid rounded flex md:flex-1 md:ml-[0] md:mt-0 my-1.5 w-full"
                />
                <Input
                    name="Image"
                    placeholder="Category Image"
                    type="file"
                    onChange={handleChange}
                    className="!placeholder:text-blue_gray-200 font-medium px-2 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-300 border-solid rounded flex md:flex-1 md:ml-[0] md:mt-0 my-1.5 w-full"
                />
                <Button
                    type="submit" className="bg-blue_gray-500 text-white rounded py-2 px-4"
                    color="blue_A700_01"
                    size="lg"
                    variant="fill"
                >
                    Add Categories
                </Button>
            </form>
        </div>
    );
}

export default AddCategories;
