type CityLinkProps = {
  country: string;
  name: string;
  temp: number;
  id: number;
};

const CityLink = ({ country, name, temp, id }: CityLinkProps) => {
  return (
    <div className="flex justify-around items-center border uppercase">
      <div className="flex items-center w-72 gap-3 pl-5 ">
        <div className="rounded-md bg-slate-300 w-9 py-2 px-5 flex justify-center">
          🇫🇷
        </div>
        <div className="flex gap-5 ml-5">
          <span>{country}</span>
          <span>{name}</span>
        </div>
      </div>
      <div>
        <span>{temp}&#x2103;</span>
        <span>&rarr;</span>
      </div>
    </div>
  );
};

export default CityLink;
