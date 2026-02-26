const getApi = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json(); 
    // console.log(result)
    return result
  } catch (err) {
    console.error("Error fetching API:", err);
  }
};

const loadTable = async () => {
  const users = await getApi();
  const table = document.getElementById("data");

  users.map(({ 
    name,
    username,
    email,
    phone,
    address: { city, street, zipcode },
    company: { name: companyName }
  }) => {

    table.innerHTML += `
      <tr>
        <td>${name}</td>
        <td>${username}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${city}</td>
        <td>${street}</td>
        <td>${zipcode}</td>
        <td>${companyName}</td>
      </tr>
    `;
  });
 const lati = document.getElementById(`avgLati`)
 const longi = document.getElementById(`avgLongi`)

};