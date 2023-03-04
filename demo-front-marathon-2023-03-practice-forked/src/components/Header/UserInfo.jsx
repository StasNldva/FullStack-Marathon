import { useEffect, useState } from 'react';
import axios from 'axios';

function UserInfo() {
  const [user, setUser] = useState('Guest');

  useEffect(() => {
    // DOWNLOAD PLACE
    axios('https://q1mngq.sse.codesandbox.io/name').
    then(data=>{setUser(data.data)});
  });

  return <span>{user}</span>;
}

export default UserInfo;
