import React, { Component } from 'react'
import "./Input.css"

export class Input extends Component {
    state={
        nom:"",
        age:"",
        profession:"",
        items:[],
    }
    // event.target.name correspond au name de chaque input, quand on sera dedans, la valeur de l'event changera en fonction de ce qu'on mettra dedans.
    onChange= (event)=>{
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state.nom);
    }
    // soumettre le formulaire
    onSubmit =(event)=>{
        event.preventDefault();
        this.setState({
            nom:"",
            age:"",
            profession:"",
            // permet de remettre le form à zéro mais de préserver les données écrites via un spread operator
            items:[...this.state.items, {nom: this.state.nom, age:this.state.age, profession:this.state.profession}]
        });
    }

    nouvelleCard = () => {
        // on mappe via les items qui regroupent ce qu'on a écriot dans les inputs
        return this.state.items.map((items, index) => {
            return(
                <div className="card" key={index}>
                    <div className="cardBody">
                        <h2>{items.nom}</h2>
                        <hr/>
                        <p> 
                            Tu as {items.age} et tu as pour profession : {items.profession}
                        </p>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h1>Formulaire de contact</h1>
                <div className="card">

                    <div className="CardHeader"> <span>Ajouter une personne</span> </div>
                    <div className="cardBody">

                        <form onSubmit={this.onSubmit}>

                            <div className="formGroup">

                                <label htmlFor="nom">Nom: </label>
                                <input type="text" nom="nom"
                                onChange={this.onChange}
                                value= {this.state.nom}
                                />
                            </div>

                            <div className="formGroup">

                                <label htmlFor="Age">Age: </label>
                                <input type="text" name="age"
                                onChange={this.onChange}
                                value= {this.state.age}
                                />
                            </div>

                            <div className="formGroup">

                                <label htmlFor="Profession">Profession: </label>
                                <input type="text" nom="profession"
                                onChange={this.onChange}
                                value= {this.state.profession}
                                />
                            </div>

                            <button className="btn">Créez votre contact</button>

                        </form>
                    </div>
                </div>
                {this.nouvelleCard()}
            </div>
        )
    }
}

export default Input
