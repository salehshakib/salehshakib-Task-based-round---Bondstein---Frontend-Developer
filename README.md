Question: You are working on a dashboard using ReactJS and Tailwind CSS. The dashboard displays data charts which are fetched from a REST API. However, the charts are not updating in real-time as new data arrives from the API.

Answer: To achieve real-time updates in my ReactJs project when new data arrives from the API, I can use state management and a way to update new data. One popular state management library for React is Redux, but React has a built in hook 'useState()', which can be used. And to Update new data we can use React built in hook 'useEffect()' to set a dependency and when the dependency changes we can update new data.


const [chartData, setChartData] = useState(); 

useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromAPI();
        setChartData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

  }, [dependency]);

or we can simply fetch data and update it by using a interval

useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromAPI();
        setChartData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);

  }, []);



 
