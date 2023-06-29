import React from 'react'

export const CreateAdmin = () => {
    const regresarMenu=() =>{
        window.location.href ="/menu-admin";
    }

  return (
    <div className="position-relative">
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-4 bg-white">
        <button onClick={() => regresarMenu()} className="btn btn-outline-secondary">Regresar</button>
          <h2>Crear Admin</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="user" className="form-label">Usuario</label>
              <input type="text" className="form-control" id="user" placeholder="User" autoFocus />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">E-mail</label>
              <input type="text" className="form-control" id="email" placeholder="e-mail" autoFocus />
            </div>
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">Teléfono</label>
              <input type="text" className="form-control" id="telefono" placeholder="Teléfono" autoFocus />
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-success">Guardar</button>
              <button className="btn btn-secondary">Limpiar</button>
            </div>
          </form>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 py-4 bg-white">
          <h2>Listado de Admins</h2>
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th> </th>
                <th>User</th>
                <th>Gmail</th>
                <th>Teléfono</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Name</td>
                <td>name@gmail.com</td>
                <td>12345678</td>
              </tr>
            </tbody>
          </table>
            <div className="d-grid gap-2 d-md-flex justify-content-md">
                <button type="button" className="btn btn-danger">Eliminar</button>
                <button className="btn btn-primary" type="button">Editar</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAdmin
