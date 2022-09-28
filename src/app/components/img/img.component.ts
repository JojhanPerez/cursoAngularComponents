import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: String = '';

  @Input() alt: String = 'Valor inicial';
  
  @Input('img')
    set changeImage(newImg: String) {
    this.img = newImg;
    console.log('Change just img => ', this.img);
  }

  @Output() loaded = new EventEmitter<String>();

  imageDefault = '../../../assets/lenguajes-de-programacion-1024x572.jpeg';
  //counter = 0;
  //counterFn = 0

  constructor() {
    console.log('Constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnchanges', 'imgValue =>', this.img);
    console.log('Changes', changes);
    
  }

  ngOnInit() {
    console.log('ngOnInit', 'imgValue =>', this.img);
    /**this.counterFn = window.setInterval(() => {
      this.counter += 1;
      console.log('Corriendo Counter');
      
    }, 1000)**/
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    //window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    this.loaded.emit(this.img)
  } 
}
