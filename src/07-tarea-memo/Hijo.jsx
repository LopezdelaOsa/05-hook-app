import React from 'react' //1


export const Hijo = React.memo (({ numero, incrementar }) => { //2-React.memo

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
}
)