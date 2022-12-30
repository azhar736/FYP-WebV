import Card from "./Card";

function Rooms() {
  const Rooms = [
    {
      id: "1",
      title: "1 Seater Room",
      price: "2000",
    },
    {
      id: "2",
      title: "2 Seater Room",
      price: "3000",
    },
    {
      id: "3",
      title: "3 Seater Room",
      price: "4000",
    },
    {
      id: "3",
      title: "3 Seater Room",
      price: "4000",
    },
  ];
  return (
    <div className="flex items-center justify-center">
      <div className="border-4 border-blue-500 flex justify-between flex-wrap max-w-7xl my-10">
        {Rooms.map((room) => (
          <Card Title={room.title} Price={room.price} />
        ))}
      </div>
    </div>
  );
}

export default Rooms;
