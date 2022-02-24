import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Exercise = props =>{
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.desciption}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0, 10)}</td>
        <td>
            <Link to={"/edit/"+props.exercise._id}>edit </Link> 
            | 
            <a href='#' onClick={() => {props.deleteExercise(props.exercise._id)}}>delete</a>
        </td>
    </tr>
}

export default class ExerciseList extends Component{
    constructor (props){
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = {
            exercises: []
        };
    }

    componentDidMount () {
        this.getExercises();
    }

    async getExercises() {
        const res = await axios.get('http://localhost:5000/exercises/');
        this.setState({
            exercises: res.data
        });
    }

    async deleteExercise(id) {
        const res = await axios.delete('http://localhost:5000/exercises/'+id);
        console.log(res.data);
        this.setState({
            exercises: this.state.exercises.filter(item => item._id !== id)
        });
    }

    exerciseList() {
        return this.state.exercises.map(currExercise => {
            return <Exercise exercise={currExercise} deleteExercise={this.deleteExercise} key={currExercise._id}/>;
        })
    }

    render() {
        return (
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                            <thead className="border-b">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Username
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Description
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Duration
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Date
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.exerciseList() }
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}