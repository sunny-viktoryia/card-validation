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
    this.inputExpiredDate;
    this.inputCardHolder;
    this.inputCvv;
    this.submitButton
    this.form;
    this.initForm()
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
    let isValid = true;
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

    this.submitButtonElement.disabled = !isValid;    

    // if not valid disable
    console.log('changing', e);
  }

  handleCardHolder(value) {

  }

  handleCardNumber(value) {

  }

  handleExpiredDate(value) {

  }

  handleCvv(value) {
    return
  }

  validate() {
    return 
    let isValid = true;


    return isValid;
  }

}

new CardWidget('.selector').render()
