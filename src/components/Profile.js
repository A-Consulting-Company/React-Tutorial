function Profile(props) {
  const { name, lastname } = props; // Destructuring an app

  var Name = props.name;
  Name = "Andrew";

  return (
    <h1>
      Name: {name} {lastname}
    </h1>
  );
}

export default Profile;
