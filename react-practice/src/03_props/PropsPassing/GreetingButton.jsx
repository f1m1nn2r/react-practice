export default function GreetingButton({ name, hi }) {
  return (
    <div>
      <p>
        전달받은 이름: <strong>{name}</strong>
      </p>
      <button onClick={hi}>클릭하여 부모 함수 실행</button>
    </div>
  );
}
