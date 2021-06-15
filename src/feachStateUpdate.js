import { useEffect, useState } from "react";

const FeatchUpdate = (probs) => {
  const uri = probs.uri;
  const [loading, setLoadingState] = useState(true);
  const [errore, setErroreState] = useState({ text: "", isTrue: false });
  const [data, setData] = useState([]);
  useEffect(() => {
    let fetchControler = new AbortController();
    // let storePost = JSON.parse(sessionStorage.getItem("storedPost"));

    if (localStorage.getItem("storedPost") == null) {
      setTimeout(() => {
        // console.log(`fetching data from ${uri}`);
        fetch(uri, { signal: fetchControler.signal })
          .then((jsonPost) => {
            if (!jsonPost.ok) {
              throw jsonPost;
            }
            jsonPost.json().then((postss) => {
              setData(postss);
              setLoadingState(false);
              localStorage.setItem("storedPost", JSON.stringify(postss));
            });
          })
          .catch((err) => {
            console.log(fetchControler.signal.aborted);
            if (!fetchControler.signal.aborted) {
              setLoadingState(false);
              setErroreState({ text: err.statusText, isTrue: true });
            }
          });
      }, 1000);
    } else {
      console.log("using the stored sesion");
      setData(JSON.parse(localStorage.getItem("storedPost")));
      setLoadingState(false);
    }
    return () => fetchControler.abort();
  }, [uri]);
  return [loading, errore, data, setData];
};

export default FeatchUpdate;
