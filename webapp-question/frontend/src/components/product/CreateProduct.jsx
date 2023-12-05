import React from 'react';
import { RxUpload } from "react-icons/rx";

export default function CreateProduct({
  name,
  code,
  price,
  previewSrc,
  handleNameChange,
  handleCodeChange,
  handlePriceChange,
  handleFileChange,
  handleSubmitForm,
}) {
  return (
    <div className="p-4">
      <form className="flex flex-col space-y-4" onSubmit={handleSubmitForm}>
        <div className="flex justify-center items-center w-full">
          <label className="flex flex-col border-4 border-dashed w-full h-32 rounded-lg hover:bg-gray-100 hover:border-purple-300 group">
            <div className="flex flex-col justify-center items-center pt-7">
              {previewSrc ? (
                <img src={previewSrc} alt="Preview" className="h-32" />
              ) : (
                <>
                  <RxUpload className="w-10 h-10 text-gray-400 group-hover:text-purple-600"/>
                  <p className="lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider">Select a photo</p>
                </>
              )}
            </div>
          
            <input 
              type="file" 
              className="opacity-0 absolute" 
              onChange={handleFileChange} 
              accept="image/*" // Optionally ensure only image file types are selectable
            />
          </label>
        </div>
        <input
          className="p-2 border rounded"
          type="text"
          placeholder="Product name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          className="p-2 border rounded"
          type="text"
          placeholder="Code"
          value={code}
          onChange={handleCodeChange}
        />
        <input
          className="p-2 border rounded"
          type="text"
          placeholder="Price"
          value={price}
          onChange={handlePriceChange}
        />
        <button
          className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
