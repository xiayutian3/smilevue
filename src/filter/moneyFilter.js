/*export function toMoney(money){
  if(money){
    money = money.toFixed(2);
  }else{
    money = 0;
    money = money.toFixed(2);
  }
return money;
}*/

/*<!-- 代码优化 --> */
export function toMoney(money=0){
  return money.toFixed(2)
}