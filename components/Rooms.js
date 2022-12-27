import Card from "./Card";

function Rooms() {
  return (
    <div className="flex items-center justify-center">
      <div className="border-4 border-blue-500 flex justify-between flex-wrap max-w-7xl">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Rooms;
