import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateExercise extends Component{
    constructor(props){
        //Must call when extending Component
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //Variables in React
        this.state = {
            username: '', 
            description: '', 
            duration: 0,
            date: new Date(),
            users: []
        };
    }

    //Using lifecycle method to add a user to the dropdown before pulling all users from backend
    componentDidMount() {
        this.setState({
            users: ['test user'],
            username: 'test user'
        });
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });        
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });        
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });        
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });        
    }

    onSubmit(e){
        //For some reason, this method doesn't work without a console log here.
        //TODO: LOOK INTO THIS
        console.log("hello");
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        };

        //testing before connecting to backend
        console.log(exercise);

        window.location = '/';
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
                            <select ref='userInput'  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            required
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                                {
                                    this.state.users.map((user) => {
                                        return <option key={user} value={user}>
                                            {user}
                                        </option>;
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Description
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            type="text"
                            required
                            value={this.state.description}
                            onChange={this.onChangeDescription}/>
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Duration (minutes)
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            type="text"
                            required
                            value={this.state.duration}
                            onChange={this.onChangeDuration}/>
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Date
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <DatePicker className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            required
                            selected={this.state.date}
                            onChange={this.onChangeDate}/>
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <input type='submit' className="shadow bg-black hover:bg-purple-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded"
                            value="Create Exercise Log">
                            </input>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}