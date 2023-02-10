import { useState } from 'react';
export default function CookieForm() {
  const [showFormData, setShowFormData] = useState(false);
  const [formData, setFormData] = useState({
    location: '',
    minimum: 0,
    maximum: 0,
    average: 0,
  });
    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleFormSubmit = (formData, event, setShowFormData) => {
      console.log(formData)
      event.preventDefault();
      setShowFormData(true);
    };

    return (
      <form onSubmit={(event) => handleFormSubmit(formData, event, setShowFormData)} className="flex flex-col w-3/5 p-10 mx-auto my-4 mt-5 border border-green-900 rounded-md bg-form-input-box-green">
          <h1 className="box text-center font-bold text-3xl">Create Cookie Stand</h1>
        <div className="flex flex-row mt-6">
          <div className="flex flex-row w-full h-20">
            <label className="text-2xl font-bold">Location</label>
            <input
              className="flex w-full mt-2 h-7 ml-2"
              name="location"
              placeholder="Cookie Stand Location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-full h-10 mt-2 mb-2 space-x-4 ">
          <div className="text-center rounded-sm h-11 bg-form-input-box-green">
            <label className="w-full text-xl mx-auto mb-2 font-bold">Minimum Customers Per Hour</label>
            <input
              className="w-64 max-h-10"
              name="minimum"
              value={formData.minimum}
              onChange={handleChange}
            />
          </div>
          <div className="text-center rounded-sm h-11 bg-form-input-box-green">
            <label className="w-full mx-auto mb-2 text-xl font-bold">Maximum Customers Per Hour</label>
            <input
              className="w-64 max-h-10"
              name="maximum"
              value={formData.maximum}
              onChange={handleChange}
            />
          </div>
          <div className="text-center rounded-sm h-11 bg-form-input-box-green">
            <label className="w-full mx-auto mb-2 text-xl font-bold ">Average Cookie Sale</label>
            <input
              className="w-64 max-h-10"
              name="average"
              value={formData.average}
              onChange={handleChange}
            />
          </div>
        <button type="submit" className="w-64 rounded-sm h-20 bg-button-green align-text-middle font-bold">CREATE</button>
      </div>
      {showFormData && (
        <div className='box'>
          <p>Form Data</p>
          <p>{JSON.stringify(formData, null, 2)}</p>
        </div>
      )}
    </form>
  );
}

