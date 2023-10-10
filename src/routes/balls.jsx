import { Welcome } from "./../Components/Welcome/Welcome.jsx";
import { BasicButton } from "./../App.jsx";
import { Clock } from "./../Components/Clock/Clock.jsx";
import { Spotify } from "./../Components/Spotify/Spotify.jsx";
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
