export default class List{

    constructor(){
      this.start = null
      this.last = null
      this.length = 0
    }
    
    add(item){
      if (this.start == null){
        this.start = item
      } else if (this.start.code > item.code){
        item.next = this.start 
        this.start.prev = item
        this.start = item
      } else {
        let current = this.start
        while(current.next != null && current.next.code <= item.code){
          current = current.next
        }
        let currentA = current
        let currentB = current.next

        item.next = currentB
        item.prev = currentA
        current.next = item
        current.next.next = currentB
      }

      this.length += 1
      return item
    }

    delete(code){

      let deleted = null

      if(!this.start){
        return null
      }
      if(this.start.code == code){
        deleted = this.start
        this.start = this.start.next
        this.length -= 1
        return deleted
      } else {
        let currentA = this.start
        let currentB = this.start.next

        while(currentB != null){
          if(currentB.code == code){
            currentA.next = currentA.next.next
            currentA.next.prev = currentA
            deleted = currentB
            deleted.next = null
            deleted.prev = null
            this.length -= 1
            return deleted
          }else{
            currentA = currentB
            currentB = currentB.next
          }
        }

        this.length -= 1
        return null
        }

    }  

    findItem(code){
      if(!this.start){
        return null
      } 

      let item = this.start
      
      while(item != null){
      if(item.code == code){
        return item
      }
      item = item.next
      }
      return null
    }

    list(){
      let info = ""
      let current = this.start
      while(current != null){
        info += current.infoHtml() + "\n"
        current = current.next
      }

      return info
    }

    inverseList(){
      let info = ""
      let current = this.start
      while(current != null){
        info = current.infoHtml() + "\n" + info
        current = current.next
      }

      return info
    }


}