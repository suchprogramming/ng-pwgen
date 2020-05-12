import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  length = 0;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  validLetters = 'abcdefghijklmnopqrstuvwxyz';
  validNums = '1234567890';
  validSymbols = '!@#$%^&*()_+';
  password = '';

  onChangeLength(value: string) {
    const parsedLength = parseInt(value);
    return isNaN(parsedLength) ? this.length = 0 : this.length = parsedLength;
  }

  onChangeLetters() {
    this.useLetters = !this.useLetters;
  }

  onChangeNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  onChangeSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  getSelectedOptions() {
    let selectedOptions = '';

    if (this.useLetters) { selectedOptions += this.validLetters }
    if (this.useNumbers) { selectedOptions += this.validNums }
    if (this.useSymbols) { selectedOptions += this.validSymbols }

    return selectedOptions;
  }

  generatePassword(selectedOptions: string) {
    let finalPW = '';
    for(let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * selectedOptions.length);
      finalPW += selectedOptions[index];
    }
    return finalPW;
  }

  onButtonClick() {
    const options = this.getSelectedOptions();
    this.password = this.generatePassword(options);
  }
}
