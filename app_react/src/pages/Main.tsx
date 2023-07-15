import React, { useEffect, useState } from "react";
import axios from 'axios';

function Main() {
  const [hello, setHello] = useState('')

  useEffect(() => {
      axios.get('http://localhost:8080/react/test')
      .then(response => setHello(response.data))
      .catch(error => console.log(error))
  }, []);

  return <div>
    왜 안되 시발 : {hello}
  </div>;
}

export default Main;
