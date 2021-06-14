import { useEffect, useState } from "react";

const FeatchUpdate = (probs) => {
  const uri = probs.uri;
  const [loading, setLoadingState] = useState(true);
  const [errore, setErroreState] = useState({ text: "", isTrue: false });
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch(uri)
        .then((jsonPost) => {
          if (!jsonPost.ok) {
            throw jsonPost;
          }
          jsonPost.json().then((postss) => {
            setData(postss);
            setLoadingState(false);
          });
        })
        .catch((err) => {
          console.log(err.statusText);
          setLoadingState(false);
          setErroreState({ text: err.statusText, isTrue: true });
        });
    }, 1000);
  }, []);
  return [loading, errore, data];
};

export default FeatchUpdate;
