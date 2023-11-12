export function Form() {
  return (
    <div>
      <h1>This is a test form</h1>
      <form
        target="_blank"
        action="https://formsubmit.co/bobonlanbusiness@gmail.com"
        method="POST"
      >
        <fieldset>
          <label>
            <input type="text" name="FirstName" placeholder="Johnny" />
            <input type="text" name="LastName" placeholder="Appleseed" />
          </label>
          <label for="penis">
            <input type="checkbox" name="box" id="box" />
            Will you check the box?
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
