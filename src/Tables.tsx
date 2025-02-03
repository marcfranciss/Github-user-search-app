const Tables = ({ data }: any) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Id Number</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
        {data.map((users: any) => {
          return (
            <tr key={users.id}>
              <td>{users.id}</td>
              <td>{users.first_name}</td>
              <td>{users.last_name}</td>
              <td>{users.email}</td>
              <td>{users.gender}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Tables;
