import React from "react";
import addNotification from "react-push-notification";

const ButtonPush = () => {
  const buttonClick = () => {
    addNotification({
      title: "タイトル",
      subtitle: "サブタイトル",
      message: "メッセージ",
      theme: "light",
      native: true,
    });
  };

  return (
    <div>
      <button onClick={buttonClick}>プッシュ通知</button>
    </div>
  );
};

export default ButtonPush;
