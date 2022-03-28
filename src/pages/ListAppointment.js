import React, { useState, useEffect } from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  getDataAppointment,
  deleteAppointment,
} from "../services/AppointmentService";
import Loader from "../components/loader/Loader";

const Listar = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadData, setLoadData] = useState(false);

  const deleteData = (idData) => {
    deleteAppointment(idData)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
    setLoadData(loadData ? false : true);
  };

  useEffect(() => {
    getDataAppointment()
      .then((datas) => {
        setData(datas);
        // setLoading(false);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
      .catch((err) => console.log(err));
  }, [loadData]);

  console.log(data);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="container h-100 mb-5" style={{ marginTop: "6rem", minHeight:"100vh" }}>
      <h1 className="text-center py-3">Lista de Citas</h1>
      <button className="my-2 btn btn-primary">
        <Link
          to="/create-appointment"
          className="text-white"
          style={{ textDecoration: "none" }}
        >
          {" "}
          Crear Cita{" "}
        </Link>
      </button>
      <table className="table table-hover bg-white">
        <thead className="table-dark">
          <tr>
            <th>Número de Cita</th>
            <th>Coder</th>
            <th>Tema De Consulta</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Actualización</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.topic}</td>
              <td>{item.date}</td>
              <td>{item.hour}</td>
              <td>{item.currentTime}</td>
              <td>
                <Link to={`/edit-appointment/${item.id}`} className="btn">
                  <FaPencilAlt />{" "}
                </Link>{" "}
              </td>
              <td>
                <button
                  type="button"
                  className="btn bg-transparent"
                  data-bs-toggle="modal"
                  data-bs-target={`#modal${item.id}`}
                >
                  <FaTrashAlt />
                </button>
                <div
                  className="modal fade"
                  id={`modal${item.id}`}
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-sm modal-dialog-centered">
                    <div className="modal-content p-2">
                      <div className="modal-body py-3">
                        <span className="fs-5">Desea Eliminar Esta Cita</span>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-danger text-white"
                          data-bs-dismiss="modal"
                          onClick={() => {
                            deleteData(item.id);
                          }}
                        >
                          Si
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listar;
