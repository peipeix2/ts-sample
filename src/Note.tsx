const Note = () => {
  //String
  let name: string;
  name = "小明";
  name = 5; //報錯：Type 'number' is not assignable to type 'string'

  //Number
  // "|" 寫法：age可以接受number和string的型別
  let age: number | string;
  age = 5;
  age = "五歲";

  //Boolean
  let isStudent: boolean;
  isStudent = true;

  //Array
  let hobbies: string[]; //設定hobbies為一個由string組成的Array
  hobbies = ["Typescript", "javascript"];

  //Tuple
  let seat: [number, string]; //Tuple: seat[0]一定要是number；seat[1]一定要是string
  seat = [5, "B"];

  //Object：type & interface
  //type的語法
  type Person = {
    name: string;
    age: number;
    action: () => void; //Type中可以包含property和method
  };

  //interface的語法
  interface Person2 {
    name: string;
    age: number;
    action: () => void;
  }

  //用type、interface宣告變數的方法
  const student1: {name: string; age: number; action: () => void} = {
    name: '小明',
    age: 5,
    action: () => console.log('Hello'),
  }

  const student2: Person = {
    name: "小明",
    age: 5,
    action: () => console.log("Hello!"),
  };

  //Array of Object
  // 定義aLotOfPeople是由Person object所組成的陣列
  let aLofOfPeople: Person[];

  //Union
  // "|" 寫法：age可以接受number和string的型別
  let height: number | string;
  height = 160;
  height = "160公分";

  //Any:可以接受所有型別，但濫用就失去寫typescript的意義
  let lotteryBox: any;

  //Unknown：適合在不確定資料類型時使用，例如：串接API時
  let fetchData: unknown;

  //Function
  //定義參數型別的語法
  function printName(name: string) {
    console.log(name);
  }
  //定義參數、回傳值型別的語法
  function returnName(name: string): string {
    return name;
  }

  //可選參數和默認參數
  //age被設定為可選參數，不傳入參數也不會報錯
  function printPerson(name: string, age?: number) {
    console.log(`My name is ${name}, I'm ${age} years old.`);
  }

  printPerson("小明");

  //void、never
  //函數沒有回傳值，因此return為undefined
  function greeting(name: string): void {
    console.log(`Hello! ${name}`);
    return; //此時只寫return也不會報錯，因為沒有回傳值，若寫明回傳值就會報錯
  }

  //never不會回傳任何東西，常見的使用情境：檢查錯誤、無限迴圈時
  function checkError(message: string): never {
    throw new Error(message);
  }

  //型別推斷
  //即使沒有下型別定義，Typescript也會自動推斷型別
  let applePrice = 5;
  applePrice = "一百元"; //報錯，因為Typescript已推斷applePrice為number

}

export default Note