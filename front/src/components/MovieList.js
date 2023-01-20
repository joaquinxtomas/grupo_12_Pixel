import React from 'react';

function MovieList(props){
    return (
        <React.Fragment>
            <tr>
                <th>{props.id}</th>
                <th>{props.titulo}</th>
                <th>{props.descripcionCorta}</th>
                <th>{props.descuento}</th>
                <th>{props.detail}</th>
                <th>{props.precio}</th>
                <th>{props.category.nombre}</th>
            </tr>
        </React.Fragment>
    )
}
export default MovieList;