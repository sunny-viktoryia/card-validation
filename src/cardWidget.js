const formTemplate = `
  <form class="card-widget">
    <div class="card-widget__item">
      <input name="card-number" class="card-widget__input card-widget__input--card-number" type="text" placeholder="Card Number">
      <span class="card-widget__error">Невалидные данные</span>
    </div>
    <div class="card-widget__item">
      <input name="expire-date" class="card-widget__input card-widget__input--expire-date" type="text" placeholder="Expired Date">
      <span class="card-widget__error">Невалидные данные</span>
    </div>
    <div class="card-widget__item">
      <input name="input--cvv" class="card-widget__input card-widget__input--cvv" type="password" placeholder="CVV">
      <span class="card-widget__error">Невалидные данные</span>
    </div>
    <div class="card-widget__item">
      <input name="card-holder" class="card-widget__input card-widget__input--card-holder" type="text" placeholder="Cardholder Name">
      <span class="card-widget__error">Невалидные данные</span>
    </div>  
    <div class="card-widget__item">
      <button class="card-widget__submit">Submit</button>
    </div>
  </form>
`;

class CardWidget {

  constructor(selector) {
    this.root = document.querySelector(selector);
    this.inputCardNumber = 'card-widget__input--card-number';
    this.inputExpiredDate = 'card-widget__input--expire-date';
    this.inputCardHolder = 'card-widget__input--card-holder';
    this.inputCvv = 'card-widget__input--cvv';
    this.submitButton = 'card-widget__submit';
    this.form;
  }

  render() {
    this.root.innerHTML = formTemplate;
    const form = this.root.querySelector('.card-widget')
    this.submitButtonElement = form.querySelector(`.${this.submitButton}`);
    form.addEventListener('submit', this.submit.bind(this));
    form.addEventListener('change', this.change.bind(this))
  }

  submit(e) {
    e.preventDefault();
    const formData = new FormData(document.querySelector('.card-widget'));
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    console.log(data)
  }

  change(e) {
    let func = '';

    if (e.target.classList.contains(this.inputCardNumber)) {
      func = this.handleCardNumber
    } else if (e.target.classList.contains(this.inputExpiredDate)) {
      func = this.handleExpiredDate
    } else if (e.target.classList.contains(this.inputCardHolder)) {
      func = this.handleCardHolder;
    } else if (e.target.classList.contains(this.inputCvv)) {
      func = this.handleCvv;
    } else {
      return;
    };

    const { isValid } = func(e.target.value);
    console.log('isValid', e.target.value, isValid);

    this.submitButtonElement.disabled = !isValid;
    console.log('changing', e);
  }

  handleCardHolder(input) {
    const isValid = /^\w+ \w+$/.test(input);
    return { isValid }
  }

  handleCardNumber(input) {
    const isValid = /^[0-9]{16}$/.test(input);
    return { isValid }
  }

  handleExpiredDate(input) {
    const isValid = /^[0-9]{2}\/[0-9]{2}$/.test(input);
    return { isValid }
  }

  handleCvv(input) {
    const isValid = /^[0-9]{3}$/.test(input);
    return { isValid }
  }

  getData() {
    const formData = new FormData(document.querySelector('.card-widget'));
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    return data;
  }

  // validate() {
  //   const data = this.getData();
  //   for ()Object.entries(data)
  // }
}

new CardWidget('.selector').render()
