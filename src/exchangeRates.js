import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const EXCHANGE_RATES = gql`
  {
    rates(currency: "EUR") {
      currency
      rate
    }
  }
`;

const ExchangeRates = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: <b>{Number(rate).toFixed(2)}</b>
      </p>
    </div>
  ));
};

export default ExchangeRates;
