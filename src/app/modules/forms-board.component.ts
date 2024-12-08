import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSmartInputComponent } from '@ng-smart-input-fields-app';

@Component({
  selector: 'app-forms-board',
  standalone: true,
  imports: [CommonModule, NgSmartInputComponent],
  templateUrl: './forms-board.component.html',
  styleUrl: './forms-board.component.scss',
})
export class FormsBoardComponent {}
