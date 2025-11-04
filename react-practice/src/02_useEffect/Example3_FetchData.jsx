import { useEffect, useState } from "react";
import UserInfo from "./fetchData/UserInfo";

// 데이터를 불러와서, 사용자 프로필 카드를 만들고 이름, 이메일, 프로필 사진을 표시
export default function Example3_FetchData() {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        const data = await response.json();
        setUserData(data.results);
        setLoading(false);
        // console.log(data);
      } catch (e) {
        console.log(e.message);

        setLoading(false);
        setUserData(null);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <>
      <section className="mb-30">
        <header className="mb-10">
          <p className="text-2xl font-medium">
            Example3. API 요청 시 fetch 데이터 불러오기
          </p>
        </header>
        <section className="flex flex-wrap gap-5">
          {userData.map((user, index) => {
            return <UserInfo user={user} key={index} />;
          })}
        </section>
      </section>
    </>
  );
}
