import { hours } from './data';


export default function ReportTable({formdata}) {

  const calculate_cookies = (min, max, average) => {
    let cookies_sold_array = []
    for (let i = 0; i < hours.length; i++) {
      let randomCustomers = Math.round(min + Math.random() * (max - min));
      let cookiesSold = Math.round(randomCustomers * average)
      cookies_sold_array.push(cookiesSold)
    }
    console.log(cookies_sold_array)
  return cookies_sold_array
  }

  const calculate_hourly_total = (cookiesArray) => {
    return cookiesArray.reduce( (x,y) => x+y, 0)
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Hours</th>
            {hours.map((hour) => (
              <th key={hour}>{hour}</th>
            ))}
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{formdata.location}</td>
            {calculate_cookies(formdata.maximum, formdata.minimum, formdata.average).map((cookies, index) => (
              <td key={hours[index]}>{cookies}</td>
            ))}
            
          </tr>
        </tbody>
      </table>
    </div>
  );
}