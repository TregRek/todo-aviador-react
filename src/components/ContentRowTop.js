import React, { Component }from 'react';
import CategoriesInDb from './CategoriesInDb';
import ContentRowData from './ContentRowData';
class ContentRowTop extends Component{
	constructor(props){
        super(props)
        this.state = {
            lastProduct:{}
        }
    }

	apiCall(url, consecuencia){
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(e => console.log(e))
    }

	componentDidMount(){
		this.apiCall('api/products', this.buscarUltimo)
	}

	buscarUltimo = (data) => {
		let ultimo = 0;
		data.products.forEach(producto => {
			if(ultimo < producto.id){
				ultimo = producto.id;
			}
		})
		this.apiCall('api/products/'+ultimo, this.cargarUltimo);
	}

	cargarUltimo = (data) => {
		this.setState({lastProduct:data});
	}

    render(){
		return(
			<React.Fragment>
					{/*<!-- Content Row Top -->*/}
					<div className="container-fluid">
						<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
							<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
						</div>
					
						{/*<!-- Content Row Movies-->*/}
						<ContentRowData />
						{/*<!-- End movies in Data Base -->*/}
						
		
						{/*<!-- Content Row Last Movie in Data Base -->*/}
						<div className="row">
							{/*<!-- Last Movie in DB -->*/}
							<div className="col-lg-6 mb-4">
								<div className="card shadow mb-4">
									<div className="card-header py-3">
										<h5 className="m-0 font-weight-bold text-gray-800">Last Product in Data Base</h5>
									</div>
									<div className="card-body">
										<div className="text-center">
											<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={this.state.lastProduct.urlImage} alt=" Star Wars - Mandalorian "/>
										</div>
										<p>{this.state.lastProduct.name_product}</p>
										<p>{this.state.lastProduct.description}</p>
										<p>Categoria: {this.state.lastProduct.categories}</p>
										<p>Precio: S/{this.state.lastProduct.price}</p>
										<p>Stock: {this.state.lastProduct.stock}</p>
										<a className="btn btn-danger" rel="nofollow" href={"http://localhost:3001/producto/detalle/"+this.state.lastProduct.id_product}>View product detail</a>
									</div>
								</div>
							</div>
							{/*<!-- End content row last movie in Data Base -->*/}
	
							{/*<!-- Genres in DB -->*/}
							<CategoriesInDb />
	
							{/*<!--End Genres In Db-->*/}		
						</div>
					</div>
					{/*<!--End Content Row Top-->*/}
	
			</React.Fragment>
		)
	}
}
export default ContentRowTop;