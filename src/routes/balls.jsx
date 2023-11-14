import { Welcome } from "./../Components/Welcome/Welcome.jsx";
import { BasicButton } from "./../App.jsx";
import { Clock } from "./../Components/Clock/Clock.jsx";
import { Spotify } from "./../Components/Spotify/Spotify.jsx";
import { Form } from "./../Components/Form/Form.jsx";
import "./../App.css";
export default function Balls() {
  return (
    <>
      <div>
        <Welcome />
        <Spotify />
        <Clock />
      </div>
    </>
  );
}
