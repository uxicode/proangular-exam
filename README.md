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

## Using Forms
- [(ngModel)]="expression"
### Angular Validation attributes
- required
- minlength
- maxlength
- pattern
### Validation Object properties
- errors : 유효성 검증에 실패한 경우 ValidationErrors 타입의 에러 객체를 반환
유효성 검증에 성공한 경우 null 반환
- valid : 유효성 검증에 성공한 상태이면 true
- invalid : 유효성 검증에 실패한 상태이면 true
- pristine : 값을 한번도 입력하지 않은 상태이면 true
- dirty : 값을 한번 이상 입력한 상태이면 true
- touched : focus in 이 한 번 이상 발생한 상태이면 true
- untouched : focus in 이 한 번 발생하지 않은 상태이면 true
### Angular Form Validation Error Description Properties
- required 
- minlength.requiredLength
- minlength.actualLength
- pattern.requiredPattern
- pattern.actualValue



