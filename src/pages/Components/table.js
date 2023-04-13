import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const initialData = [
  ['City', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total Sold'],
  ['Seattle', 315, 278, 177, 234, 240, 164, 234, 177, 177, 328, 366, 391, 397, 171, 315, 3964],
  ['Tokyo', 48, 61, 75, 103, 93, 67, 109, 98, 54, 121, 93, 104, 91, 46, 108, 1613],
  ['Dubai', 40, 38, 65, 88, 128, 118, 113, 115, 89, 73, 63, 92, 119, 96, 87, 1443],
  ['Paris', 65, 82, 63, 63, 97, 187, 88, 58, 63, 89, 83, 156, 121, 87, 43, 2214],
  ['Lima', 22, 33, 28, 35, 48, 68, 95, 135, 80, 82, 113, 64, 96, 123, 68, 1283],
];

const myTable = () => {
  const [data, setData] = useState(initialData);

  const addLocation = (city, min, max, avg) => {
    const newLocation = [city];
    let totalSold = 0;
    for (let i = 1; i <= 15; i++) {
      const cookiesSold = Math.floor(Math.random() * (max - min + 1)) + min;
      newLocation.push(cookiesSold);
      totalSold += cookiesSold;
    }
    newLocation.push(totalSold);
    setData([...data, newLocation]);
  };

  const columns = data[0].map((header) => ({
    name: header,
    selector: header,
  }));

  return (
    <>
      <DataTable
        title="Cookie Sales"
        columns={columns}
        data={data.slice(1)}
      />
      <button onClick={() => addLocation('New York', 100, 200, 3.5)}>Add Location</button>
    </>
  );
};

export default myTable;
