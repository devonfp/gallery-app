import { useEffect} from "react";

  function Home({ setQuery }) {
    useEffect(() => {
      setQuery('sunsets');
    }, [setQuery]);
    }




export default Home;