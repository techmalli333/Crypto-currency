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
      .get("https://api.coinstats.app/public/v1/coins/")
      .then((res) => setData(res.data.coins));
  });

  return (
    <>
      <div className="fluid-container">
        <div class="row m-2 d-flex justify-content-center ">
          <div className="col-sm-8 col-md-5 col-lg-3 col-xg-2  p-3 ">
            <input
              onChange={handler}
              value={search}
              className="form-control mt-2 "
              type="search"
              placeholder="Search for crypto"
            ></input>
          </div>
          {data.length > 0 && (
            <div class="row m-2">
              {data
                .filter((crypto) =>
                  crypto.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((crypto) => (
                  <Card
                    all={{ crypto }}
                    name={crypto.name}
                    rank={crypto.rank}
                    price={crypto.price}
                    icon={crypto.icon}
                    key={crypto.id}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
