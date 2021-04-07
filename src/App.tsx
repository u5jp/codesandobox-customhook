import { useState } from "react";
import "./styles.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";
import axios from "axios";
import { User } from "./types/api/user";
import { UserProfile } from "./types/userProfile";

const user = {
  id: 1,
  name: "太郎",
  email: "123@gmail",
  address: "Address"
};

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const onClickFetchUser = () => getUsers();

  return (
    <div className="App">
      テスト
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました。</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
      <UserCard user={user} />
    </div>
  );
}
