'use strict';

class ReportController {

  constructor(TripService, $stateParams) {
    'ngInject';
    this.TripService = TripService;
    this.viajes = [];
    this.filter = {};
    this.pageIndex = 0;
    this.pageSize  = 200;
    this.range = [];
    this.count = 0;
    this.filter = $stateParams.filter
    this.getTrips();
    this.setPageCount();
  }

  getTrips() {
    let offset = this.pageIndex * this.pageSize;
    this.TripService.getTrips(offset,this.pageSize, this.filter).then(response => {
      this.viajes = response.data.getReport;
      console.log(response.data);
    });
  }

  setPageCount() {
    this.TripService.getTripsCount(this.filter).then(response => {
      let data = response.data.getReportCount[0];
      this.count = data['count(*)']/this.pageSize;
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
    let stringified = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    //forgive me, for i have sinned
    return  stringified == '31/12/1969' ? '' : stringified ;
  }
}

export default {
  name: 'ReportController',
  fn: ReportController
};
