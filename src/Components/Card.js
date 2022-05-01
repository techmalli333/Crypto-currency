import React from "react";

export default function Card(props) {
  const {
    id,
    icon,
    name,
    symbol,
    rank,
    price,
    priceBtc,
    volume,
    marketCap,
    availableSupply,
    totalSupply,
    priceChange1h,
    priceChange1d,
    priceChange1w,
    websiteUrl,
    twitterUrl,
  } = props.all.crypto;

  const id_ = "#" + id;

  return (
    <div class="col-sm-6 col-md-4 col-lg-3 p-1  ">
      <div class="card ">
        <div class="card-body  text-white bg-dark ">
          <div className="text-center">
            <img
              className="m-2"
              src={icon}
              style={{ height: "50px" }}
              alt="img"
            />
            <h5 class="card-title">{name}</h5>
            <p class="card-text"> Rank : {rank}</p>
            <p>
              <button
                class="btn btn-outline-danger"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={id_}
                aria-expanded="false"
                aria-controls={id}
              >
                View more
              </button>
            </p>
          </div>

          <div class="collapse" id={id}>
            <div class=" card-body  text-white " style={{ color: "#212121" }}>
              <p>symbol :{symbol}</p>
              <p>price :{price}</p>
              <p>priceBtc :{priceBtc}</p>
              <p>volume :{volume}</p>
              <p>marketCap :{marketCap}</p>
              <p>availableSupply :{availableSupply}</p>
              <p>totalSupply :{totalSupply}</p>
              <p>priceChange1h :{priceChange1h}</p>
              <p>priceChange1d :{priceChange1d}</p>
              <p>priceChange1w :{priceChange1w}</p>
              <a
                href={websiteUrl}
                style={{ color: "#8a6a0b" }}
                target="_blank"
                rel="noreferrer"
              >
                websiteUrl
              </a>
              <br />
              <a
                href={twitterUrl}
                style={{ color: "#376a94" }}
                target="_blank"
                rel="noreferrer"
              >
                twitterUrl
              </a>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
