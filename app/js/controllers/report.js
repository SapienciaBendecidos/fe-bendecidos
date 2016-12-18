'use strict';

class ReportController {

  constructor(TripService, $stateParams) {
    'ngInject';
    this.TripService = TripService;
    this.viajes = [];
    this.filter = {};
    this.pageIndex = 0;
    this.pageSize  = 250;
    this.range = [];
    this.count = 0;
    this.filter = $stateParams.filter;
    this.getTrips();
    this.setPageCount();
  }

  getTrips() {
    let offset = this.pageIndex * this.pageSize;
    this.TripService.getTrips(offset,this.pageSize, this.filter).then(response => {
      this.viajes = response.data.getReport;
    });
  }

  setPageCount() {
    this.TripService.getCount().then(response => {
      this.count = response.data.count/this.pageSize;
      for (var i = 0; i < this.count; ++i)
        this.range.push(i);
    });
  }

  pageHandler(index) {
    this.pageIndex = index;
    this.getTrips();
  }

  pageControlHandler() {
    this.getTrips();
  }

  dateToString(date) {
    date = new Date(date);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }
}

export default {
  name: 'ReportController',
  fn: ReportController
};
