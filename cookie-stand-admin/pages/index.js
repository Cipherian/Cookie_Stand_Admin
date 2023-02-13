import Head from '../components/Head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateForm from '../components/CreateForm';
import ReportTable from '../components/ReportTable';
import { useState } from 'react';
import { hours } from '../components/data';

export default function Home() {
  const [formData, setFormData] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const minimum = event.target.minimum.value;
    const maximum = event.target.maximum.value;
    const average = event.target.average.value;
    const key = formData.length ? Math.max(...formData.map(item => item.key)) + 1 : 0;
    const storeData = {
      key: key,
      location: location,
      minimum: minimum,
      maximum: maximum,
      average: average,
      hourly: [],
      hourlyTotal: 0,
    };

    const calculate_hourly_cookies = (min, max, average) => {
      let hourly = [];
      for (let i = 0; i < hours.length; i++) {
        let randomCustomers = Math.floor(Math.random() * (max - min + 1)) + min;
        let cookiesSold = Math.round(randomCustomers * average);
        hourly.push(cookiesSold);
      }
      return hourly;
    };

    const calculate_hourlyTotal = (cookiesArray) => {
      return cookiesArray.reduce((x, y) => x + y, 0);
    };

    storeData.hourly = calculate_hourly_cookies(minimum, maximum, average);
    storeData.hourlyTotal = calculate_hourlyTotal(storeData.hourly);

    setFormData([...formData, storeData]);

  };


  return (
    <div className="bg">
      <Head />
      <Header  />
      <CreateForm formSubmitHandler={handleFormSubmit}/>
      <ReportTable formData={formData}/>
      <Footer />
    </div>
  )
}
