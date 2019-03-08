# Pro angular 6
- Pro angular 예제 실습 파일.
## Property binding 요약
- [property]
- [attr.name]
- [class.name]
- [style.name]

### Angular Brackets 요약 
- [target]="expression"
- {{expression}}
- (target)="expression"
- [(target)]="expression"

## Setting Classes and Styles
### Using the Class Binding
- [class]="expression"
- [class.myClass]="expression"
- [ngClass]="map"
여기서 map은 객체이고 String/Array/Object 등의 타입도 쓸 수 있다.

### Using the  Style Binding 요약
- [style.myStyle]="expression"
- [class.myStyle.unit]="expression"
- [ngStyle]="map" 

### Using the Builtin Diretive 요약
- *ngIf="expression이 true일때 show"
- *ngSwitch( ngSwitchCase/ ngSwitchDefault )
- *ngFor="let item of itemData;let i=index;let odd=odd;let even=even;let first=first;let last=last"
- <ng-template #myTeml let-text="title">{{text}}</ng-template>
<ng-template [ngTemplateOutlet]="myTeml" [ngTemplateOutletContext]="{title:'Header'}"></ng-template>
- ngClass
- ngStyle

