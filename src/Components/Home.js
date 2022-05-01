import React from "react";
import axios from "axios";
import Card from "./Card";

export default function Home() {
  const [search, setSearch] = React.useState("");
  const [data, setData] = React.useState([]);
  const handler = (event) => {
    setSearch(event.target.value);
  };
  React.useEffect(() => {
    axios
      .get("https://api.coinstats.app/public/v1/coins/?skip=0&limit=10")
      .then((res) => setData(res.data.coins));
  });

  return (
    <>
      <div className="header p-3">
        <input
          onChange={handler}
          value={search}
          className=" mt-2"
          type="search"
          placeholder="Search for crypto"
        ></input>
      </div>
      {data.length > 0 && (
        <div className="container">
          <div class="row">
            <div className="p-1 container d-flex flex-column">
              {data
                .filter((crypto) =>
                  crypto.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((crypto) => (
                  <Card
                    name={crypto.name}
                    rank={crypto.rank}
                    price={crypto.price}
                    icon={crypto.icon}
                    key={crypto.id}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
