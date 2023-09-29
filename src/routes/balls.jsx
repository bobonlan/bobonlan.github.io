import { Welcome } from "./../App.jsx";
import { BasicButton } from "./../App.jsx";
import { Clock } from "./../App.jsx";
import "./../index.css";
export default function Balls() {
  return (
    <>
      <div>
        <Welcome />
        <Clock />
        <BasicButton
          buttonName={"twitch.tv"}
          linkTo={"https://twitch.tv/bobonlan"}
        />
        <BasicButton
          buttonName={"twitter.com"}
          linkTo={"https://twitter.com/bobonlan"}
        />
      </div>
    </>
  );
}
