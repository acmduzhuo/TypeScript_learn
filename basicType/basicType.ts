// 布尔值
let isDone: boolean = false;

// 数字
// 支持二、八、十、十六进制
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d; //十六进制
let binaryLiteral: number = 0b1010;  //二进制
let octalLiteral: number = 0o744; //八进制

//字符串
// let name: string = "bob";
// name = "smith"
let namee: string = `Gene`;
let age: number = 37;
// let sentence: string = `Hello, my name is ${ namee }. 
// I'll be ${ age + 1 } years old next month.`;
let sentence: string = "Hello, my name is " + namee + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";

// 数组
let list: number[] = [1, 2, 3]; //第一种方式定义数组
let listInfo: Array<number> = [1, 2, 3]; //第二种方式定义数组

// 元组Tuple
// 已知元素的数量和类型，各元素的类型不必相同，必须一一对应元素类型，否则会报错
let x: [string, number];
x = ['hello', 10];
// x = [10, 'hello']; //Type 'string' is not assignable to type 'number'.
console.log(x[0].substr(1));
// console.log(x[1].substr(1)); //Property 'substr' does not exist on type 'number'.
// 当访问一个越界元素，会使用联合类型替代，由于x中只有string与number两种数据结构，所以联合类型是string | number)
// x[3] = 'world'; //Tuple type '[string, number]' of length '2' has no element at index '3'. 搜索到的博客也报错，与文档不一致
// console.log(x[5].toString()); //Tuple type '[string, number]' of length '2' has no element at index '5'.

// 枚举
// enmu是对JS的一个补充
enum Color {Red = 1, Green, Blue} //可以全部或者指定改变编号
let c: Color = Color.Green;
let colorName: string = Color[2];
console.log(colorName);
// 未知的类型
let notSure: any = 4;
// notSure = "maybe a string instead";
// notSure = false;
// 可选择地包含或移除类型检查
notSure.ifItExists();
notSure.toFixed();
// let prettySure: Object = 4;
// prettySure.toFixed(); //Property 'toFixed' does not exist on type 'Object'.
let listAny: any[] = [1, true, "free"];
listAny[1] = 100;

// Void
// 与any相反，表示没有任何类型
function warnUser(): void {
    console.log("This is my warning messsage");
}
// 声明一个void值只能赋予它undefined和null值
let unusable: void = undefined; 

// Null和Undefined
// TS中undefined和null各自有自己的类型undefined和null
let u: undefined = undefined;
let n: null = null;
// 理论上null和undefined是所有类型的子类型，可以将null和undefined赋值给number

// Never
// 表示那些用不存在的值的类型；那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；
// never类型是任何类型的子类型，也可以赋值给任何类型；所有类型除了never本身，可以赋值给never，即使any也不可以
// 返回never函数必须存在无法到达的终点
function error(messsage: string): never {
    throw new Error(messsage);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never函数必须存在无法到达的终点
function infiniteLoop(): never {
    while (true) {
    }
}

// Object
// object表示非原始类型
declare function create(o: object | null): void;
create({ prop: 0 });
create(null);
// create(42);
// create("string");
// create(false); //Error
create(undefined); //OK

// 类型断言
// 建设比TS更清楚地知道某个值的详细信息，确信告诉编译器来编译
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length; //第一种写法，尖括号形式

let someValueInfo: any = "this is as string";
let strLengthInfo: number = (someValueInfo as string).length; //第二种写法，as形式，只在jsx中才被允许 