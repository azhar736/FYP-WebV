import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:8000/";
function Rooms() {
  const [rooms, setRooms] = useState();
  // const Rooms = [
  //   {
  //     id: "1",
  //     title: "1 Seater Room",
  //     price: "2000",
  //   },
  //   {
  //     id: "2",
  //     title: "2 Seater Room",
  //     price: "3000",
  //   },
  //   {
  //     id: "3",
  //     title: "3 Seater Room",
  //     price: "4000",
  //   },
  //   {
  //     id: "3",
  //     title: "3 Seater Room",
  //     price: "4000",
  //   },
  // ];
  useEffect(() => {
    getAllRooms();
  }, []);

  const getAllRooms = async () => {
    try {
      const response = await axios.get(`${BASE_URL}allRooms`);
      const data1 = await response.data;
      console.log("The DATA from API", data1.data);
      setRooms(data1.data);
    } catch (error) {
      console.log("error", error.message);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-between flex-wrap max-w-7xl my-10">
        {rooms?.map((room) => (
          <Card
            Title={room.title}
            Price={room.price}
            total={room.totalSeates}
            remaining={room.seatsRemaining}
            roomId={room._id}
          />
        ))}
      </div>
    </div>
  );
}

export default Rooms;
