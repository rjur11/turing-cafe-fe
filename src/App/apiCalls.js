const getAllReservations = async () => {
  return fetch("http://localhost:3001/api/v1/reservations")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const addNewRes = (name, date, time, number) => {
  return fetch("http://localhost:3001/api/v1/reservations", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      date: date,
      time: time,
      number: number,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

const deleteRes = (id) => {
  return fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

export { getAllReservations, addNewRes, deleteRes };
