import React from "react";

function Details() {
  const data = [
    {
      id: 1,
      name: "Govind",
      age: 20,
      image:
        "https://www.21kschool.com/in/wp-content/uploads/sites/4/2023/09/Discover-the-Bright-Side-The-Surprising-Benefits-of-Online-Learning.png",
      village: "Bordi",
      qualification: "BSC IT",
    },
    {
      id: 2,
      name: "Siddh",
      age: 19,
      image:
        "https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg?cs=srgb&dl=pexels-olly-920382.jpg&fm=jpg",
      village: "Nandarkha",
      qualification: "BSC IT",
    },
    {
      id: 3,
      name: "Parth",
      age: 21,
      image:
        "https://media.istockphoto.com/id/607773472/photo/online-word-represents-website-words-and-internet.jpg?s=1024x1024&w=is&k=20&c=OgNafw4eWnjsoY5SmWRKimCtxnPZka1mHLtr8y_ABVE=",
      village: "Dhari",
      qualification: "BCA",
    },
    {
      id: 4,
      name: "Ajay",
      age: 28,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDlcylkHGoCY1gxwpq_joerYiOG85hVgW8sw&s",
      village: "Ratiya",
      qualification: "BAC",
    },
  ];

  return (
    <div width="10rem">
      <h2>protfolio Table</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Image</th>
            <th>Village</th>
            <th>Qualification</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
              <td>{item.village}</td>
              <td>{item.qualification}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Details;
