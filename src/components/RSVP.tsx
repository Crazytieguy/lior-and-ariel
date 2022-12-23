// https://docs.google.com/forms/d/e/1FAIpQLSevFtIFDuiqL9GfgJmbv0wYkWiQaHiiKBcxZ1iwU6vQSlj7-g/viewform?usp=pp_url&entry.906866815=yoav@gmail.com&entry.1498135098=yoav&entry.877086558=Yes&entry.492071186=No&entry.1087008520=wow&entry.2111674010=Vegan&entry.2111674010=No+Gluten&entry.2111674010=__other_option__&entry.2111674010.other_option_response=lol&entry.2606285=wow

const RSVP = () => {
    let formElem: HTMLFormElement;
    const onSubmit = (e: Event) => {
        e.preventDefault();
        const formData = new FormData(formElem);
        console.log(formData);
        fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSevFtIFDuiqL9GfgJmbv0wYkWiQaHiiKBcxZ1iwU6vQSlj7-g/formResponse", {
            method: "POST",
            mode: "cors",
            body: formData
        }).then(console.log)
    }
    return <form ref={formElem!} onSubmit={onSubmit} class="form-control py-4 px-6 items-start">
    <label for="email" class="py-1">
      <div class="py-2">Email</div>
    </label>
    <input
      class="input input-bordered invalid:input-error"
      type="email"
      name="entry.906866815"
      id="email"
    />
    <label for="name" class="py-1">
      <div class="py-2">What's your name?</div>
    </label>
    <input
      class="input input-bordered invalid:input-error"
      minlength="1"
      type="text"
      name="entry.1498135098"
      id="name"
    />
    <label for="attending" class="py-1">
      <div class="py-2">Can you attend?</div>
    </label>
    <select name="entry.877086558" id="attending"  class="select select-bordered">
        <option value="Yes">Yes</option>
        <option value="No">No</option>
    </select>
    <label for="guest" class="py-1">
      <div class="py-2">Will you bring a guest?</div>
    </label>
    <select name="entry.492071186" id="guest"  class="select select-bordered">
        <option value="Yes">Yes</option>
        <option value="No">No</option>
    </select>
    <label for="guestName" class="py-1">
      <div class="py-2">What's your guest's name?</div>
    </label>
    <input
      class="input input-bordered invalid:input-error"
      type="text"
      name="entry.1087008520"
      id="guestName"
    />
    <fieldset class="py-1">
      <legend class="py-2"> Do you have any dietary requirements?</legend>
      <div class="py-1">
        <label class="flex items-center gap-2">
          <input class="checkbox" type="checkbox" name="entry.2111674010" id="vegan" value="Vegan"/>
          Vegan
        </label>
      </div>
      <div class="py-1">
        <label class="flex items-center gap-2">
          <input class="checkbox" type="checkbox" name="entry.2111674010" id="vegetarian" value="Vegetarian"/>
          Vegetarian
        </label>
      </div>
      <div class="py-1">
        <label class="flex items-center gap-2">
          <input class="checkbox" type="checkbox" name="entry.2111674010" id="glutenFree" value="No Gluten"/>
          Gluten Free
        </label>
      </div>
    </fieldset>
    <label for="comments" class="py-1">
      <div class="py-2">Do you have any comments or questions?</div>
    </label>
    <textarea
      class="input input-bordered invalid:input-error"
      name="entry.2606285"
      id="comments"></textarea>
    <button class="btn mt-4" type="submit">Submit</button>
  </form>
}

export default RSVP;