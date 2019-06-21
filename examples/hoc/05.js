const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;

const Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;

const CurrenciesWithAmount = withAmount([Euro, Pound]);

const App = () => <CurrenciesWithAmount />;
