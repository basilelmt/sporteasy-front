import "./Title.scss";

interface Props {
  children?: string
}

export const Title = ({ children }: Props) => {
  return (
    <div className="title">{children}</div>
  );
};
