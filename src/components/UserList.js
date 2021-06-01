import React, {Component} from 'react';
let userList = [];
class UserList extends Component{
    
	constructor(props){
        super(props)
        this.state = {
            users:[],
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
		this.apiCall('api/users', this.cargarUsuarios)
	}

	cargarUsuarios = (data) => {
		data.users.forEach(user => {
			this.apiCall('api/users/'+user.id, this.detalleUsuario)
		})
		this.setState({users:userList})
	}

	detalleUsuario = (data) => {
		let userPush = data
		userList.push(userPush)
		this.setState({done:true})
	}


	render(){
		return(
			<React.Fragment>
						{/*<!-- USER LIST -->*/}
						
						
						<br></br>
						{/*<!-- DataTales Example -->*/}
						<div className="card shadow mb-4">
							<div className="card-header py-3">
								<h1 className="h3 mb-2 text-gray-800">All users in the Database</h1>
                        	</div>
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
										<thead>
											<tr>
												<th>Id</th>
												<th>Usuario</th>
												<th>Nombres</th>
												<th>Apellidos</th>
												<th>Email</th>
											</tr>
										</thead>
										<tfoot>
											<tr>
												<th>Id</th>
												<th>Usuario</th>
												<th>Nombres</th>
												<th>Apellidos</th>
												<th>Email</th>
											</tr>
										</tfoot>
										<tbody>
										{
                    						this.state.users.map((user,index)=>{
                        						return  <tr key={index}>
															<td>{user.id_user}</td>
															<td>{user.user_name}</td>
															<td>{user.first_name}</td>
															<td>{user.last_name}</td>
															<td>{user.email}</td>
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
export default UserList;