const User = (props) => {
      const { name } = props;
    return(

      
        <div>
            <h1>Function based component</h1>
            <div className="user-class">
                <h1> Name :{name}</h1>
                <h2>City: Pune</h2>
                <h3>Country: India</h3>
            </div>
        </div>
    )
 }

 export default User;