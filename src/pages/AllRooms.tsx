import { useNavigate } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomsDummyData,
  type FacilityKey,
} from "../assets/assets";
import Title from "../components/Title";
import StarRating from "../components/StarRating";

const AllRooms = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      <div>
        <Title
          title="Hotel Rooms"
          subtitle="Take advantage of our linited-time offers and special pakages to enhance your stay and create unforgettable memories."
          align="left"
        />
        {roomsDummyData.map((room) => (
          <div
            key={room._id}
            className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0"
          >
            <img
              onClick={() => {
                navigate("/rooms/" + room._id);
                scrollTo(0, 0);
              }}
              src={room.images[0]}
              alt="hotel-img"
              title="View Room Details"
              className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
            />
            <div className="md:w-1/2 flex flex-col gap-2">
              <p className="text-gray-500">{room.hotel.city}</p>
              <p className="text-gray-800 text-3xl font-playfair cursor-pointer">
                {room.hotel.name}
              </p>
              <div className="flex items-center">
                <StarRating rating={4} />
                <p className="ml-2">200+ views</p>
              </div>
              <div className="flex items-center gap-1 text-gray-500 text-sm">
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{room.hotel.address}</span>
              </div>
              {/* Room Amenities */}
              <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                {room.amenities.map((amenity, index) => {
                  const icon = facilityIcons[amenity as FacilityKey] ?? null;
                  if (!icon) return null;
                  return (
                    <div
                      key={index}
                      className="flex gap-2 items-center px-3 py-2 rounded-lg bg-[#F5F5FF]/70"
                    >
                      <img src={icon} alt={amenity} className="w-5 h-5" />
                      <p className="text-xs">{amenity}</p>
                    </div>
                  );
                })}
              </div>
              {/* Room Price per Night */}
              <p className="text-gray-700 text-xl font-medium">
                ${room.pricePerNight} /night
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* filter */}
      <div></div>
    </div>
  );
};

export default AllRooms;
