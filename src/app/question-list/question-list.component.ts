import { Component } from '@angular/core';
import { Question } from '../question';
import { questionList } from '../question-mock-data';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.css'
})
export class QuestionListComponent {
  questions: Question[] = questionList
}
