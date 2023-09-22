import { Welcome } from "./../App.jsx";
import { BasicButton } from "./../App.jsx";
import "./../index.css";
export default function Balls() {
  return (
    <>
      <div>
        <Welcome />
        <BasicButton
          buttonName={"twitch.tv"}
          linkTo={"https://twitch.tv/bobonlan"}
        />
        <BasicButton
          buttonName={"twitter.com"}
          linkTo={"https://twitter.com/bobonlan"}
        />
        <BasicButton
          buttonName={"bobonlan.com"}
          linkTo={"https://bobonlan.com"}
        />
      </div>
    </>
  );
}
