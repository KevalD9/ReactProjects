import useFetch from ".";

const UseFetchHookTest = () => {
  const { loading, error, data } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  console.log(data);

  return (
    <div>
      <h1>Use Fetch Hook Test</h1>
      {
        loading ? <h3>Loading ! Please Wait... </h3> : null
      }
      {
        error ? <h3>{error}</h3> : null
      }
      {
        data && data.products && data.products.length >0 
            ? data.products.map((item) => {
                return <p key={item.key}>{item.title}</p>
            })
            : <p> No DATA Found.</p> 
        
      }
    </div>
  );
};

export default UseFetchHookTest;
