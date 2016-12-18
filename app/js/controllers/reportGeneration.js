'use strict';

class ReportGenerationController {

  constructor() {
    'ngInject';
    this.intialDate = '';
    this.limitDate = '';
    this.driver = '';
    this.busPlate = '';
    this.route = '';
  }

  handleSubmit() {
    let validDates = this.isValidDateInput();

    console.log(this.intialDate, this.limitDate, this.driver, this.busPlate, this.route);

    if(!validDates)
      Materialize.toast('Seleccione ambas fechas', 5000);
  }

  isValidDateInput() {
    return !(this.intialDate != '' && this.limitDate == ''
           || this.limitDate != '' && this.intialDate == '')
  }
}

export default {
  name: 'ReportGenerationController',
  fn: ReportGenerationController
};
