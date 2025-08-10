import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Dummy",
      email: "Dummy email",
    };
  }

  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const json = await data.json();
    this.setState({
      name: json.name,
      email: json.email,
    });
  }

  render() {
    const { name, email } = this.state;

    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          About Us Component
        </h1>

        {/* User Info Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <UserClass name={name} email={email} />
        </div>
      </div>
    );
  }
}

export default About;
