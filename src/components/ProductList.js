import React, {Component} from 'react';
let productList = [];
class ProductList extends Component{
    
	constructor(props){
        super(props)
        this.state = {
            products:[],
			done: false
        }
    }

	apiCall(url, consecuencia){
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(e => console.log(e))
    }

	componentDidMount(){
		this.apiCall('api/products', this.cargarProductos)
	}

	cargarProductos = (data) => {
		data.products.forEach(product => {
			this.apiCall('api/products/'+product.id, this.detalleProducto)
		})
		this.setState({products:productList})
	}

	detalleProducto = (data) => {
		let productPush = data
		productList.push(productPush)
		this.setState({done:true})
	}


	render(){
		return(
			<React.Fragment>
						{/*<!-- PRODUCTS LIST -->*/}
						<h1 className="h3 mb-2 text-gray-800">All products in the Database</h1>
						
						{/*<!-- DataTales Example -->*/}
						<div className="card shadow mb-4">
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
										<thead>
											<tr>
												<th>Id</th>
												<th>Nombre</th>
												<th>Descripción</th>
												<th>Precio</th>
												<th>Stock</th>
											</tr>
										</thead>
										<tfoot>
											<tr>
												<th>Id</th>
												<th>Nombre</th>
												<th>Descripción</th>
												<th>Precio</th>
												<th>Stock</th>
											</tr>
										</tfoot>
										<tbody>
										{
                    						this.state.products.map((product,index)=>{
                        						return  <tr key={index}>
															<td>{product.id_product}</td>
															<td>{product.name_product}</td>
															<td>{product.description}</td>
															<td>S/.{product.price}</td>
															<td>{product.stock}</td>
														</tr>
                    						})
                						}
										</tbody>
									</table>
								</div>
							</div>
						</div>            
			</React.Fragment>
		)
	}
	
}
export default ProductList;