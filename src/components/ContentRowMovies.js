import React, {Component} from 'react';
import SmallCard from './SmallCard';

let productInDataBase = {
    color:   "primary",
    titulo: "Cantidad de usuarios",
    valor: 21,
    icono: "fas fa-film",
}

let amount ={
    color:   "success",
    titulo: "Total awards",
    valor: 79,
    icono: "fas fa-award",
}

let user = {
    color:   "warning",
    titulo: "Actors quantity",
    valor: 49,
    icono: "fas fa-user",
}

let cardProps = [productInDataBase,amount,user];


class ContentRowTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cantUsuarios: ''
        }
    }

    apiCall(url, consecuencia){
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(error => console.log(error))
    }

    mostrarUsuarios = (data) => {
        console.log(data);
    }

    componentDidMount() {
        this.apiCall("localhost:3000/api/users", this.mostrarUsuarios);
    }

    

    render(){
        return (
            <React.Fragment>
            {/*<!-- Content Row -->*/}
            <div className="row">
                {
                    cardProps.map((producto,index)=>{
                        return <SmallCard  {...producto}  key= {index}/>
                    })
                }      
            </div>
            </React.Fragment>
        )
    }
}
export default ContentRowTop;