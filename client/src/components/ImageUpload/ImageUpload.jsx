import React, { useState } from "react";
import { Img } from "components";
import { fetchApi, fetchApi2 } from "utils/fetchApi";
import { Toast } from "utils/swal";
import { CloseSVG, SelectSVG } from "assets/images";

const ImageUpload = ({
  name = "",
  placeholder = "Select an image file",
  className = "",
  wrapClassName = "",
  type = "file",
  allowMultiple = false,
  value = allowMultiple ? [] : "",
  uploadPath = "",
  onChange = () => {},
}) => {
  const [loading, setLoading] = useState(false);
  const [selectedImages, setSelectedImages] = useState(value);

  const handleImageChange = async (e) => {
    setLoading(true);
    const files = e.target.files;

    if (!allowMultiple && files.length > 1) {
      // Allow only one file if allowMultiple is false
      alert("Only one file can be selected.");
      setLoading(false);
      return;
    }

    const promises = Array.from(files).map(async (file) => {
      const resp = await fetchApi("/v1/admin/imageupload", {
        Image: file,
        uploadPath,
      });
      if (resp.success) {
        return resp.data;
      }
    });

    Promise.all(promises)
      .then((images) => {
        if (allowMultiple) {
          setSelectedImages([...selectedImages, ...images]);
        } else {
          setSelectedImages(images[0] || "");
        }
        onChange({
          target: {
            name,
            value: allowMultiple
              ? [...selectedImages, ...images]
              : images[0] || "",
          },
        });
      })
      .catch((error) => {
        console.error("Error uploading images:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDeleteImage = async (image) => {
    try {
      setLoading(true);
      const resp = await fetchApi2("/v1/admin/imageDelete", { image });
      if (resp.success) {
        if (allowMultiple) {
          const newImages = selectedImages.filter((img) => img !== image);
          setSelectedImages(newImages);
          onChange({
            target: {
              name,
              value: newImages,
            },
          });
        } else {
          setSelectedImages("");
          onChange({
            target: {
              name,
              value: "",
            },
          });
        }
      }
    } catch (error) {
      console.error("Error deleting image:", error);
      Toast.fire({
        icon: "error",
        title: "Error deleting image",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={wrapClassName}>
      <label className="block text-sm font-medium text-gray-700">
        {placeholder}
        <input
          type={type}
          accept="image/jpeg, image/jpg, image/png"
          name={name}
          id={name}
          className={`sr-only ${className}`}
          onChange={handleImageChange}
          multiple={allowMultiple}
        />
        <div className="mt-2 p-2 flex justify-center items-center gap-3">
          {loading ? (
            <div className="h-16 w-16 flex items-center justify-center border border-gray-300 rounded">
              {/* make a loader circle */}
              <svg
                className="animate-spin h-5 w-5 text-gray-500"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0c4.418 0 8 3.582 8 8s-3.582 8-8 8V4a4 4 0 00-4 4H0a12 12 0 014-8z"
                ></path>
              </svg>
            </div>
          ) : allowMultiple ? (
            selectedImages.length > 0 ? (
              selectedImages.map((val, index) => (
                <div key={index} className="relative hover:opacity-100 group">
                  <Img
                    className="h-16 w-16 object-cover opacity-100 transition-opacity duration-300 group-hover:opacity-40"
                    src={val}
                    alt="No file selected"
                  />
                  <button
                    className="absolute top-0 right-0 rounded-full p-1 text-base text-center flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    onClick={() => handleDeleteImage(val)}
                  >
                    <Img
                      src="images/trash.svg"
                      alt="cross"
                      className="w-6 h-6"
                    />
                  </button>
                </div>
              ))
            ) : (
              <div className="h-16 w-16 flex items-center justify-center border border-gray-300 rounded">
                {/* make a icon for no file selected */}
                <SelectSVG fillColor="red" className="h-64 w-64 " />
              </div>
            )
          ) : (
            <div className="relative">
              {selectedImages ? (
                <div className="group">
                  <Img
                    className="h-16 w-16 object-cover opacity-100 transition-opacity duration-300 group-hover:opacity-40"
                    src={selectedImages}
                    alt="No file selected"
                  />
                  <button
                    className="absolute top-0 right-0 rounded-full z-10 p-1 text-base text-center flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    onClick={() => handleDeleteImage(selectedImages)}
                  >
                    <Img
                      src="images/trash.svg"
                      alt="cross"
                      className="w-6 h-6"
                    />
                  </button>
                </div>
              ) : (
                <div className="h-16 w-16 flex items-center justify-center border border-gray-300 rounded">
                  <SelectSVG fillColor="red" className="h-64 w-64 " />
                </div>
              )}
            </div>
          )}
        </div>
      </label>
    </div>
  );
};

export default ImageUpload;
