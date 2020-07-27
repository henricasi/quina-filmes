import React, {useEffect} from 'react';

const Empty = () => {

  useEffect(() => {
    document.title = "Quina filmes"
  }, []);

  return <div className="home"></div>
}

export default Empty;