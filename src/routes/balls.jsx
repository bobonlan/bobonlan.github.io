import { Welcome } from "./../App.jsx";
import { BasicButton } from "./../App.jsx";
import { Clock } from "./../App.jsx";
import { Spotify } from "./../App.jsx";
import "./../App.css";
export default function Balls() {
  return (
    <>
      <div>
        <Welcome />
        <Spotify />
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
