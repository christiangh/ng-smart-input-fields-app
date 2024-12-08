import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsBoardComponent } from "./modules/forms-board.component";

@Component({
  standalone: true,
  imports: [RouterModule, FormsBoardComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-smart-input-fields-app';
}
