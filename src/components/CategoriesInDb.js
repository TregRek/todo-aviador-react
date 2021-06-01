import React, {Component} from 'react';
import Category  from './Category';

class CategoriesInDb extends Component {
    constructor(props){
        super(props)
        this.state = {
            categoryList: []
        }
    }

    apiCall(url, consecuencia){
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(e => console.log(e))
    }

    componentDidMount() {
        this.apiCall('/api/products', this.cargarCategorias)
    }

    cargarCategorias = (data) => {
        let categoriesInDataBase = data.countByCategory
        let arregloCategorias = []
        Object.entries(categoriesInDataBase).map(category => {
            let categoriaPush = {
                nombre: category[0],
                cantidad: category[1]
            }
            arregloCategorias.push(categoriaPush)
            return ''
        })
        this.setState({
            categoryList: arregloCategorias
        });
        
    }

    render(){
        let contenido;

        if(this.state.categoryList.length === 0){
            contenido = <div className="row">Cargando...</div>
        } else {
            contenido = <div className="row">
                {
                    this.state.categoryList.map((category,index)=>{
                        return  <Category  {...category}  key={index} />
                    })
                }
            </div>
        }
        return (
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    <div className="col-lg-6 mb-4">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-gray-800">Categories in Data Base</h6>
                            </div>
                            <div className="card-body">
                                {contenido}
                            </div>
                        </div>
                    </div>
               
            </React.Fragment>
        )
    }
}
export default CategoriesInDb;