import { useState } from "react";

const App = () => {
  const BirthdayBoys = [
    {
      firstName: "Mary bhad",
      years: 29,
      img: "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?cs=srgb&dl=pexels-yuri-manei-2690323.jpg&fm=jpg",
      id: 1,
    },
    {
      firstName: "Robert desmukh",
      years: 18,
      img: "https://images.pexels.com/photos/3718045/pexels-photo-3718045.jpeg?cs=srgb&dl=pexels-caroline-ayumi-fugitani-3718045.jpg&fm=jpg",
      id: 2,
    },
    {
      firstName: "John gaikwad",
      years: 20,
      img: "https://images.pexels.com/photos/749091/pexels-photo-749091.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      id: 3,
    },
    {
      firstName: "Jennifer wakde",
      years: 30,
      img: "https://images.pexels.com/photos/3579181/pexels-photo-3579181.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      id: 4,
    },
  ];

  const [people, setPeople] = useState(BirthdayBoys);

  const handleClick = (id) => {
    console.log(id);
    const leftPeople = people.filter((manus) => manus.id !== id);
    setPeople(leftPeople);
  };

  return (
    <div className="App">
      <h1>Birthday Reminder</h1>

      {people.map(({ years, img, id, firstName }) => {
        return (
          <div className="birthdayCard" key={id}>
            <div className="userDetail">
              <img src={img} alt="" />
              <div className="userInfo">
                <h2>{firstName}</h2>
                <h3>years {years}</h3>
              </div>
            </div>
            <button
              className="btn"
              type="button"
              onClick={() => handleClick(id)}
            >
              clear
            </button>
          </div>
        );
      })}

      <button className="btn" onClick={() => setPeople([])}>
        clear all
      </button>
    </div>
  );
};

export default App;
