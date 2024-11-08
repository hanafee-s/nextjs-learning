const getDate = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 2000);
  });
};

const IndexPage = async () => {
  await getDate();
  return (
    <div>
      <h1>Live</h1>
      <p>Live page</p>
    </div>
  );
};

export default IndexPage;
