const NoControlado = () => {
    return(

        <form>
            <input type="text" 
             id="nombre" 
             placeholder="introduce el texto"
             className="form-control mb-2"/>

             <textarea className="form-control mb-2" 
             placeholder="Introduce descripcion"/>
             <select>
                <option value="1">Enero</option>
                <option value="2">Febrero</option>
                <option value="3">Marzo</option>
                <option value="4">Abril</option>
                <option value="5">Mayo</option>
                <option value="6">Junio</option>
                <option value="7">Julio</option>
                <option value="8">Agosto</option>
                <option value="9">Septiembre</option>
                <option value="10">Octubre</option>
                <option value="11">Noviembre</option>
                <option value="12">Diciembre</option>
                
             </select>

        

        
        </form>
    );}


    export default NoControlado;