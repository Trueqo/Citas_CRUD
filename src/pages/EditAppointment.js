import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  searchAppointment,
  updateAppointment,
} from "../services/AppointmentService";
import getCurrentTime from "../utils/getCurrentTime";
import Loader from "../components/loader/Loader";

const EditAppointment = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    searchAppointment(params.id).then((resp) => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      setData(resp[0]);
    });
  }, [params.id]);

  console.log(data);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const sendData = () => {
    let dataSend = {
      id: data.id,
      name: data.name,
      topic: data.topic,
      date: data.date,
      hour: data.hour,
      currentTime: getCurrentTime(),
    };
    console.log(dataSend);

    updateAppointment(dataSend)
      .then((resp) => {
        console.log(resp);
        navigate("/list-appointment");
      })
      .catch((err) => console.log(err));
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div
      style={{ minHeight: "100vh", marginTop: "6rem", width: "20rem" }}
      className="d-flex mx-auto w-100"
    >
      <div
        className=" container mx-auto 
        mb-5 px-5 pt-4 h-100 row d-flex justify-content-center align-items-center"
      >
        <div className="col-12 col-md-8 col-lg-6 card p-4 border-lg bg-dark text-white">
          <h1 className="text-center">Editar Cita</h1>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              sendData();
            }}
          >
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="id" className="form-label">
                  Número de Cita
                </label>
                <input
                  type="text"
                  readOnly
                  className="form-control"
                  id="id"
                  name="id"
                  value={data.id}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="name" className="form-label">
                  Nombre de coder
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label htmlFor="topic" className="form-label">
                  Tema de consulta
                </label>
                <textarea
                  className="form-control"
                  id="topic"
                  name="topic"
                  value={data.topic}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label htmlFor="date" className="form-label">
                  Fecha consulta
                </label>
                <br />
                <input
                  className="form-control"
                  type="date"
                  name="date"
                  value={data.date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label htmlFor="hour" className="form-label">
                  Hora consulta
                </label>
                <br />
                <input
                  className="form-control"
                  type="hour"
                  name="hour"
                  value={data.hour}
                  onChange={handleChange}
                  required
                />
                <br />
              </div>
            </div>

            <div className="row my-4">
              <div className="col">
                <button
                  type="submit"
                  className="btn btn-primary text-white fs-5 col-12"
                >
                  Guardar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditAppointment;
