const formTemplate = `
  <form class="card-widget">
    <div>
      <input class="card-widget-input--card-number" type="text" placeholder="Card Number">
      <span class="card-widget__error-message"></span>
    </div>

    <div>
      <input class="card-widget-input--expire-date" type="text" placeholder="Expired Date">
    </div>
    
    <div>
      <input class="card-widget-input--cvv" type="password" placeholder="CVV">
    </div>
    
    <div>
      <input class="card-widget-input--card-holder" type="text" placeholder="Cardholder Name">
    </div>
    
    <button class="card-widget-button--submit">Submit</button>
  </form>
`;

class CardWidget {

  constructor(selector) {
    this.root = document.querySelector(selector);
    this.inputCardNumber = 'card-widget-input--card-number';
    this.inputExpiredDate = 'card-widget-input--expire-date';
    this.inputCardHolder = 'card-widget-input--card-holder';
    this.inputCvv = 'card-widget-input--cvv';
    this.submitButton = 'card-widget-button--submit';
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
    console.log('submitting', e);
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

  validate() {
    return 
    let isValid = true;


    return isValid;
  }

}

new CardWidget('.selector').render()
