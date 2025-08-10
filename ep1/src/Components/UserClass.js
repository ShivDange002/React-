import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 1,
    };
    console.log("Child component constructor called");
  }

  componentDidMount() {
    console.log("Child component did mount called");
  }

  render() {
    const { count } = this.state;
    const { name, city, country, email } = this.props;
    console.log("Child component render called");

    return (
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm text-center">
        <h1 className="text-xl font-bold text-gray-800 mb-4">
          Class Based Component
        </h1>
        <h2 className="text-lg font-semibold text-gray-700">
          Name: <span className="text-blue-600">{name}</span>
        </h2>
        <h2 className="text-gray-600">City: {city}</h2>
        <h2 className="text-gray-600">Country: {country}</h2>
        {email && <h2 className="text-gray-500 text-sm mt-1">Email: {email}</h2>}
        <h4 className="text-sm text-gray-500 mt-3">Count: {count}</h4>

        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
          className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-200"
        >
          Set Count
        </button>
      </div>
    );
  }
}

export default UserClass;
