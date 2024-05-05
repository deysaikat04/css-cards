interface CardProps {
  id: number;
  name: string;
  title: string;
  subtitle: string;
}

export const Card = ({ id, name, title, subtitle }: CardProps) => {
  return (
    <>
      <input type="radio" name="slide" id={name} checked />
      <label htmlFor={name} className="card">
        <div className="row">
          <div className="icon">{id}</div>
          <div className="description">
            <h4>{title}</h4>
            <p>{subtitle}</p>
          </div>
        </div>
      </label>
    </>
  );
};
