'use strict';

class ReportGenerationController {

  constructor($state) {
    'ngInject';

    //default empty attribute value for /Viajes/getreports/filter{} :(
    this.defaultInitialDate = '06660101';
    this.defaultValue = '';
    this.defaultFilterValue = '.*';
    this.initialDate = this.defaultValue;
    this.limitDate = this.defaultValue;
    this.driver = this.defaultValue;
    this.busPlate = this.defaultValue;
    this.route = this.defaultValue;
    this.filter = null;
    this.$state = $state;
  }

  handleSubmit() {
    this.filter = null;
    if(!this.isValidDateInput()){
      Materialize.toast('Seleccione ambas fechas', 5000);
      return;
    }
    this.setFilter();

    if(this.filter != null)
      this.$state.go('Report', {filter: JSON.stringify(this.filter)});
    else
      this.$state.go('Report');
  }

  setFilter() {

    if(this.isAnySet())
    {

      this.initialDate = this.isSet(this.initialDate) ?
          this.getDateValue(new Date(this.initialDate)) : this.defaultInitialDate;

      this.limitDate =  this.isSet(this.limitDate) ?
          this.getDateValue(new Date(this.limitDate)) : this.getDateValue(new Date());

      this.route = this.getFilterValue(this.route);
      this.driver = this.getFilterValue(this.driver);
      this.busPlate = this.getFilterValue(this.busPlate);
      let and =
      [
        { 'fecha_inicial': this.initialDate },
        { 'fecha_limite': this.limitDate },
        { 'nombre': this.route },
        { 'bus_conductor': this.driver },
        { 'tipo_movimiento': this.defaultFilterValue },
        { 'bus_placa': this.busPlate },
      ];

      this.filter = {and};
    }
  }

  isAnySet() {
    return this.isSet(this.initialDate)
        || this.isSet(this.limitDate)
        || this.isSet(this.driver)
        || this.isSet(this.route)
        || this.isSet(this.busPlate);
  }

  getFilterValue(input) {
      return this.isSet(input) ? input : this.defaultFilterValue;
  }

  getDateValue(date) {
    let year = '' + date.getFullYear();
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();

    if(day.length < 2)
      day = '0' + day;

    if(month.length < 2)
      month = '0' + month;

    return `${year}${month}${day}`;
  }

  isSet(input) {
    return input != this.defaultValue;
  }

  isValidDateInput() {
    return  !(this.isSet(this.initialDate) && !this.isSet(this.limitDate)
           || this.isSet(this.limitDate) && !this.isSet(this.initialDate))
  }
}

export default {
  name: 'ReportGenerationController',
  fn: ReportGenerationController
};
