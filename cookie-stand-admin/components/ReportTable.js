import { hours } from './data';

export default function ReportTable({ formData }) {

  const calculateTotalSum = (hourlyTotals) => {
    let total = 0;
    for (let i = 0; i < hourlyTotals.length; i++) {
      total += hourlyTotals[i];
    }
    return total;
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

  return (
    <div>
      {formData.length === 0
        ? <h2 className="my-6 text-sm text-center"> No Cookie Stands Available </h2>
        : <table className="w-2/3 mx-auto mb-12 text-sm text-center">
          <thead className="mx-auto text-sm text-center">
            <tr>
              <th>Location</th>
              {hours.map((hour, index) => {
                return (<th key={`hour-${index}`}> {hour} </th>)
              })}
              <th>Totals</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((item, index) => {
              return (<tr key={`row-${index}`} className="bg-table-cell-darker-green">
                <td> {item.location} </td>
                {item.hourly.map((hourlyData, index) => {
                  return (<td key={`row-${index}-data-${hourlyData}`}>{hourlyData}</td>)
                })}
                <td>{item.hourlyTotal}</td>
              </tr>)
            })}
            <tr>
              <th>Totals</th>
              {getTotalSum().map((total, index) => {
                return (
                  <td key={`total-${index}`}>
                    {total}
                  </td>
                )
              })}
            </tr>
          </tbody>
        </table>
      }
    </div>
  );
}
