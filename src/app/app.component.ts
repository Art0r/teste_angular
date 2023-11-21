import { ApplicationModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { decrement, increment } from './counter.actions';
import { CounterState } from './counter.reducer';
import { selectCounter } from './counter.selector';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my_app';
  counter = 0;

  constructor(private store: Store<CounterState>) {
    this.store.select(selectCounter).subscribe((value: number) => {
      this.counter = value;
    });
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}
