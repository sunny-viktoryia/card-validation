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
    this.inputCardNumber;
    this.inputExpiredDate;
    this.inputCardHolder;
    this.inputCvv;
    this.form;
    this.initForm()
  }

  render() {
    this.root.innerHTML = formTemplate;
    const form = this.root.querySelector('.card-widget')
    form.addEventListener('submit', this.submit.bind(this));
    form.addEventListener('change', this.change.bind(this))
  }

  submit(e) {
    e.preventDefault();
    console.log('submitting', e);
  }

  change(e) {
    // if not valid disable
    console.log('changing', e);
  }

  initForm() {

  }
}

new CardWidget('.selector').render()