import React, { Component } from 'react';


// async function getTranscripts(component) {

//     const state = component.state;
  
//     try {
//       const patientRead = await fetch(url)
//       .then(response => response.json())
//         .then(res => {
//             console.log(res);
            
//         });
//     }
//     catch (error) {
//       //console.log('Error ocurred:');
//       //console.log(error);
//     }  
//   }

class ResultsDetails extends Component {
    constructor(props) {
        super(props);
        const { match: { params } } = this.props;
        const { id } = params;
        const { idUNIPROT } = params;
        this.state = {
            id,
            idUNIPROT,
            loading: true
        };
    }

    componentWillMount() {
        this.getTranscripts(this);
        // getPatientDetails(this);
    }

    getTranscripts(el) {
        console.log('====================================');
        console.log(el);
        console.log('====================================');
        
        const urlTranscrip = `http://localhost:8000/transcripts/${el.state.id}`
        const urlUnicode = `http://localhost:8000/uniprot/${el.state.idUNIPROT}`
        console.log(urlTranscrip);
        console.log(urlUnicode);

        Promise.all([
            fetch(urlTranscrip),
            // fetch(urlUnicode),
        ])

    }



    render() {
        console.log(this.state);

        return (
            <div>
                Results Details
            </div>
        );
    }
}

export default ResultsDetails;