import { BasicButton } from "../App";

export default function Button3() {
  return (
    <>
      <h1>Cool Links</h1>
      <BasicButton
        buttonName={"Music by Eian"}
        linkTo={"https://www.youtube.com/@eianklock"}
      />

      <BasicButton
        linkTo={"https://youtube.com/shorts/-ocizpRbV0o?si=437OPT1R_lobhtX1"}
        buttonName={"Oh My God"}
      />
      <BasicButton buttonName={"Test Button"} />
    </>
  );
}
