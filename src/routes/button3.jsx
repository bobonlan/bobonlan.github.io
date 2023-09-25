import { BasicButton } from "../App";

export default function Button3() {
  return (
    <>
      <h1>Cool Links</h1>
      <BasicButton
        buttonName={"Music by Eian"}
        linkTo={"https://www.youtube.com/@eianklock"}
      />
      <BasicButton buttonName={"Test Button"} />
      <BasicButton buttonName={"Test Button"} />
    </>
  );
}
