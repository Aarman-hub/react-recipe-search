import React, { Component } from 'react'
import {recipe} from '../tempDetails';
import { recipes } from '../tempList';

export default class RecipeDetails extends Component {
    constructor(props){
        super(props)

        this.state = {
            recipe:recipe,
            url: `https://www.food2fork.com/api/get?key=3f4131b60652180e6f2ea73a0ad0681d&rId=${this.props.id}`
        };
    }
    render() {
        const {image_url,publisher,publisher_url,source_url,title,ingredients} = this.state.recipe;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <button type="button" className="btn btn-warning mb-4 text-capitalize">back to recipe list</button>
                            <img src={image_url} className="d-block w-100" alt="recipe" />
                        </div>
                        {/* details */}
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h6 className="text-uppercase">{title}</h6>
                            <h6 className="text-warning text-capitalize text-slanted">Provided by {publisher}</h6>
                            <a href={publisher_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2 text-capitalize">publisher webpage</a>
                            <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn btn-success mt-2 mx-2 text-capitalize">Source Url</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
