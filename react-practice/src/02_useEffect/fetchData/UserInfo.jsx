export default function UserInfo({ user }) {
  const { picture, name, login } = user;
  // console.log(user);
  return (
    <>
      <div>
        <img src={picture.large} alt={picture.large} />
        <p className="text-lg">
          {name.first} {name.last}
        </p>
        <span className="text-sm">{login.username}</span>
      </div>
    </>
  );
}
