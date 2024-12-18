type CityLinkProps = {
  country: string;
  name: string;
  temp: number;
};

const CityLink = ({ country, name, temp }: CityLinkProps) => {
  return (
    <div>
      <div>flag</div>
      <span>{country}</span>
      <span>{name}</span>
      <span>{temp}&rarr;</span>
    </div>
  );
};

export default CityLink;
