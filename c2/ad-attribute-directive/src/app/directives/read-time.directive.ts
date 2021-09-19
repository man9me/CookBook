import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

export interface ReadTimeConfig {
  wordsPerMinute: number;
}

@Directive({
  selector: '[appReadTime]',
})
export class ReadTimeDirective implements OnInit {
  @Input() configuration: ReadTimeConfig = { wordsPerMinute: 200 };

  @Output() readTimeCalculated = new EventEmitter<string>();
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    const text = this.el.nativeElement.textContent;
    const time = this.calculateReadTime(text);
    const timeStr = this.createTimeString(time);
    this.readTimeCalculated.emit(timeStr);
  }
  createTimeString(time: number) {
    if (time === 1) {
      return '1 minute';
    } else if (time < 1) {
      return '< 1 minute';
    } else {
      return `${time} minutes`;
    }
  }

  calculateReadTime(text: any) {
    const wordsCount = text.split(/\s+/g).length;
    const minutes = wordsCount / this.configuration.wordsPerMinute;
    return Math.ceil(minutes);
  }
}
