import React, {Component} from 'react';
import axios from 'axios';

export default class CreateUser extends Component{
    constructor(props){
        //Must call when extending Component
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //Variables in React
        this.state = {
            username: ''
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });        
    }    

    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username
        };

        //testing before connecting to backend
        console.log(user);

        console.log(this.postUser(user));
        //Clear form to allow adding multiple users
        this.setState({
            username: ""
        });
    }

    //TODO let user of website know what happened
    async postUser(user) {
        await axios.post('http://localhost:5000/users/add', user);
    }

    render() {
        return (
            <div>
                <h1>Create New Exercise Log</h1>
                <form className='w-full max-w-sm' onSubmit={this.onSubmit}>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Username
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input type="text" ref='userInput'  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            required
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <input type='submit' className="shadow bg-black hover:bg-purple-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded"
                            value="Create User">
                            </input>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}