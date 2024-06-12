const NoControlado = () => {
    return(

        <div className="container mt-2">
        <form
          onSubmit={handleSubmit}
          ref={formulario}
        >
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Ingrese un TODO"
            name="todoNombre"
            defaultValue="Tarea #01"
          />
          <textarea
            className="form-control mb-2"
            type="text"
            placeholder="Ingrese un TODO"
            name="todoDescripcion"
            defaultValue="Descripción tarea #01"
          />
          <select
            className="form-control mb-2"
            name="todoEstado"
            defaultValue="completado"
          >
            <option value="pendiente">Pendiente</option>
            <option value="completado">Completado</option>
          </select>
          <button
            className="btn btn-primary"
            type="submit"
          >
            Agregar
          </button>
        </form>
      </div>
    );}


    export default NoControlado;