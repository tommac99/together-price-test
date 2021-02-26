import { FC, useState, useEffect } from "react";
import "./App.css";
import { SearchContactCard } from "./components";
import { GetData } from "./services";

export type DataType = {
  userId: number;
  fullName: string;
  profileImageUrl: string;
  trust: number;
};

const App: FC = () => {
  const [data, setData] = useState<DataType>();

  useEffect(() => {
    async function getData() {
      const data = await GetData();
      setData(data);
    }

    getData();
  }, []);

  return <div className="App">{data && <SearchContactCard data={data} />}</div>;
};

export default App;
