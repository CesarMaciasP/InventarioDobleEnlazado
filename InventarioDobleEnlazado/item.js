export default class Item{

    constructor(code, name, quantity, cost){
      this.code= Number(code)
      this.name=name
      this.quantity=Number(quantity)
      this.cost=Number(cost)
      this.totalValue = cost * quantity
      this.next = null
      this.prev = null // previous
    }

    infoHtml(){
      return `<div>
        <h3>${this.name}   #${this.code}</h3>
        <p>${this.quantity}   x   $${this.cost}</p>
        <p>TOTAL: ${this.totalValue}</p>
      </div>`;
    }
  }

