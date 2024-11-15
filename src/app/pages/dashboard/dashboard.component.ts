import { Component } from '@angular/core';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';


@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

	constructor(
		public _snackbarService: SnackbarService
	) {

	}

	openSnackbarS() {
		this._snackbarService.notify("This is success snackbar", 1)
	}
	openSnackbarE() {
		this._snackbarService.notify("This is error snackbar", 2)
	}

}
