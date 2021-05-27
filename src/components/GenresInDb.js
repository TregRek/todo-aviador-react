import React, { Component } from 'react';
import Genre  from './Genre';



class GenresInDb extends Component{
    constructor(){
        super();
        this.state = {
            genres : []
        }
    }

    componentDidMount(){
        fetch('/api/genres')
        .then(respuesta => {
            return respuesta.json();
        })
        .then(genres => {
            this.setState({ genres : genres.data });
        })
        .catch(error => console.log(error));
    }

    render(){
        return (
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    <div className="col-lg-6 mb-4">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    {this.state.genres.map((genre,index)=>{
                                        return <Genre genre={genre.name} key={index} />
                                    })}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                                
            </React.Fragment>
        );
    };
}
export default GenresInDb;