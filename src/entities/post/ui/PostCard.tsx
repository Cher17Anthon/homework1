type Props = {
  title: string;
  body: string;
};

const PostCard = ({ title, body }: Props) => {
  return (
    <div style={{ border: '1px solid gray', padding: '1rem', margin: '1rem 0' }}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default PostCard;
