// const URL_API = "https://jsonplaceholder.typicode.com/users";
const URL_API = "http://localhost/App_Citas_Backend/";

export function getDataAppointment() {
  return fetch(`${URL_API}`, {
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

export function createAppointment(data) {
  return fetch(`${URL_API}?create=1`, {
    method: "POST",
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export function deleteAppointment(id) {
  return fetch(`${URL_API}?delete=${id}`).then((res) => res.json());
}

export function searchAppointment(id) {
  return fetch(`${URL_API}?search=${id}`).then((res) => res.json());
}

export function updateAppointment(data) {
  return fetch(`${URL_API}?update=1`, {
    method: "POST",
    body: JSON.stringify(data),
  }).then((res) => res.json());
}
