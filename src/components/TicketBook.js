import React from "react";
import { useState } from "react";

const TicketBook = ({ movieName }) => {
  const [seatType, setSeatType] = useState("");
  const [noOfTickets, setNoOfTickets] = useState("");
  const [totalAmount, setTotalAmount] = useState("");

  console.log(totalAmount);
  const options1 = ["Royal", "Club", "Executive"];
  const options2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const generateTotalAmount = () => {
    if (seatType == "Royal") {
      const amount = 300 * parseInt(noOfTickets);
      setTotalAmount(amount);
    } else if (seatType == "Club") {
      const amount = 200 * parseInt(noOfTickets);
      setTotalAmount(amount);
    } else if (seatType == "Executive") {
      const amount = 100 * parseInt(noOfTickets);
      setTotalAmount(amount);
    }
    alert("Movie ticket booked. Total Amount: " + totalAmount);
  };

  const seatTypeChangeHandler = (event) => {
    setSeatType(event.target.value);
    console.log("User Selected Value - ", event.target.value);
  };

  const noOfTicketsChangeHandler = (event) => {
    setNoOfTickets(event.target.value);
    console.log("User Selected Value - ", event.target.value);
  };

  return (
    <div className="p-2 border w-60 border-black">
      <h1 className="text-2xl font-semibold">Book Ticket</h1>

      <form>
        <input
          className="bg-gray-300 border w-full border-black px-2 py-1 my-1 rounded-sm"
          type="text"
          placeholder={movieName}
          disabled
        />
        <input
          className=" border w-full text-black border-black px-2 py-1 rounded-sm"
          type="text"
          placeholder="Your Name"
        />
        <input
          className="border w-full text-black border-black px-2 py-1 my-1 rounded-sm"
          type="text"
          placeholder="Email"
        />
        <input
          className=" border w-full text-black border-black px-2 py-1 my-1 rounded-sm"
          type="number"
          placeholder="Phone number"
        />
        <p>Select Date</p>
        <input type="date" className="text-black" />
      </form>

      <p>Select seat type</p>
      <select
        className="text-black"
        value={seatType}
        onChange={seatTypeChangeHandler}
      >
        <option>Please choose one option</option>
        {options1.map((option, index) => {
          return (
            <option value={option} key={index}>
              {option}
            </option>
          );
        })}
      </select>
      <p className="text-green-500">{seatType}</p>

      <p>Select no of tickets</p>
      <select
        className="text-black"
        value={noOfTickets}
        onChange={noOfTicketsChangeHandler}
      >
        <option>Please choose one option</option>
        {options2.map((option, index) => {
          return (
            <option value={option} key={index}>
              {option}
            </option>
          );
        })}
      </select>
      <p className="text-green-500">{noOfTickets}</p>

      <button
        onClick={generateTotalAmount}
        className="bg-green-500 my-5 px-3 py-2 rounded-md"
      >
        Pay
      </button>

      <h1>Total Amount: {totalAmount}</h1>
    </div>
  );
};

export default TicketBook;
