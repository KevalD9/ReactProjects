import { useEffect, useState } from "react";
import "./style.css"

const ScrollIndicator = () => {

    const url = "https://dummyjson.com/products?limit=100";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);


  async function fetchData(getUrl){

    try{
        setLoading(true);
        const response = await fetch(getUrl);
        const data = await response.json();
        if(data){
            setData(data.products);
            setLoading(false);
        }
    }catch(error){
        console.log(error);
        setErrorMessage(error.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (errorMessage) {
    return <div>Error Occured! : {errorMessage}</div>;
  }

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  console.log(data, scrollPercentage);

  return <div>
    <div className="top-container">
        <h1> Custom Scroll Indicator </h1>
        <div className="scroll-progress-tracking-container">
            <div
                className="current-progress-bar"
                style={{ width: `${scrollPercentage}%` }}
            ></div>
        </div>
    </div>
    <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
          : null}
      </div>
  </div>;
};

export default ScrollIndicator;
