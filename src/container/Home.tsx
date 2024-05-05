import { Card } from "../components/Card";
import "./home.css";

export const Home = () => {
  const cardData = [
    {
      id: 1,
      name: "c1",
      title: "Leaves",
      subtitle: "Some colorful leaves",
    },
    {
      id: 2,
      name: "c2",
      title: "Street",
      subtitle: "Neon street photography",
    },
    {
      id: 3,
      name: "c3",
      title: "Ocean",
      subtitle: "Mountain with sunset",
    },
    {
      id: 4,
      name: "c4",
      title: "Mountains",
      subtitle: "The beautiful long range mountain",
    },
    {
      id: 5,
      name: "c5",
      title: "Forest",
      subtitle: "Lost in the woods",
    },
  ];
  return (
    <div className="wrapper">
      <div className="container">
        {cardData.map(({ id, name, title, subtitle }) => (
          <Card
            key={id}
            id={id}
            name={name}
            title={title}
            subtitle={subtitle}
          />
        ))}
      </div>
    </div>
  );
};
