import { hours } from './data';

export default function ReportTable({ formData }) {

  const calculate_hourly_cookies = (min, max, average) => {
    let hourlyArray = [];
    for (let i = 0; i < hours.length; i++) {
      let randomCustomers = Math.floor(Math.random() * (max - min + 1)) + min;
      let cookiesSold = Math.round(randomCustomers * average);
      hourlyArray.push(cookiesSold);
    }
    return hourlyArray;
  };

  const calculate_hourlyTotal = (cookiesArray) => {
    return cookiesArray.reduce((x, y) => x + y, 0);
  };

  const getTotalSum = () => {
    let totalSum = [];
    for (let i = 0; i < hours.length; i++) {
      let sum = 0;
      for (let j = 0; j < formData.length; j++) {
        sum += formData[j].hourly[i];
      }
      totalSum.push(sum);
    }
    return totalSum;
  };
  const calculateTotalSum = (hourlyTotals) => {
    let total = 0;
    for (let i = 0; i < hourlyTotals.length; i++) {
      total += hourlyTotals[i];
    }
    return total;
  };

  return (
    <div>
      {formData.length === 0
        ? <h2 className="my-6d font-bold text-center text-3xl"> No Cookie Stands Available </h2>
        : <table className="w-2/3 mx-auto mb-12 text-sm text-center border border-gray-400">
          <thead className="mx-auto text-sm text-center">
            <tr className="bg-table-cell-darker-green">
              <th className="py-2 px-4 border-2 border-black">Location</th>
              {hours.map((hour, index) => {
                return (<th key={`hour-${index}`} className="py-2 px-4 border-2 border-black"> {hour} </th>)
              })}
              <th className="py-2 px-4 border-2 border-black">Totals</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((item, index) => {
              item.hourly = calculate_hourly_cookies(item.minimum, item.maximum, item.average);
              item.hourlyTotal = calculate_hourlyTotal(item.hourly);
  
              return (<tr key={`row-${index}`} className={index % 2 === 0 ? "bg-table-cell-lighter-green" : "bg-table-cell-green"}>
                <td className="py-2 px-4 border-2 border-black"> {item.location} </td>
                {item.hourly.map((hourlyData, index) => {
                  return (<td key={`row-${index}-data-${hourlyData}`} className="py-2 px-4 border-2 border-black">{hourlyData}</td>)
                })}
                <td className="py-2 px-4 border-2 border-black">{item.hourlyTotal}</td>
              </tr>)
            })}
            <tr className="bg-table-cell-darker-green">
              <th className="py-2 px-4 border-2 border-black">Totals</th>
              {getTotalSum().map((total, index) => {
                return (
                  <td key={`total-${index}`} className="py-2 px-4 border-2 border-black">
                    {total}
                  </td>
                )
              })}
              <td className="py-2 px-4 border-2 border-black">{calculateTotalSum(getTotalSum())}</td>
            </tr>
          </tbody>
        </table>
      }
    </div>
  );
  
    }