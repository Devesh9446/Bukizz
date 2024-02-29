import React, { useState } from 'react';
import { Img } from 'components';
import { fetchApi } from 'utils/fetchApi';

const ImageUpload = ({
  name = "",
  placeholder = "Select an image file",
  className = "",
  wrapClassName = "",
  type = "file",
  value = [],
  uploadPath="",
  onChange = () => { }
}) => {
  const [loading , setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(value);

  const handleImageChange = async (e) => {
    setLoading(true);
    const file = e.target.files[0];
    
    const resp = await fetchApi('/v1/admin/imageupload', { Image: file, uploadPath });
    if (file) {
      console.log("resp", resp);
      if (resp.success) {
        selectedImage.push(resp.data);
        setSelectedImage(selectedImage);
        onChange({ target: { name, value: selectedImage } });
      }
      // const reader = new FileReader();
      // reader.onloadend = () => {
      //   setSelectedImage(reader.result);
      //   onChange({ target: { name, value: reader.result } });
      // };

      // reader.readAsDataURL(file);
    }
    setLoading(false);

  };

  return (
    <div className={wrapClassName}>
      <label className="block text-sm font-medium text-gray-700">
        {placeholder}
        <input
          type={type}
          name={name}
          id={name}
          className={`sr-only ${className}`}
          onChange={handleImageChange}
        />
        <div className="mt-2 flex gap-3">
          {!loading && value.map((val,index)=>(<Img
          key={index}
            className="h-16 w-16 object-cover"
            src={val}
            alt="No file selected"
          />))}
        </div>
      </label>
    </div>
  );
}

export default ImageUpload;
