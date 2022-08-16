console.log("Circular Queue");

class CircularQueue {
  max;
  QueueData;
  front;
  rear;
  currrentSize;
  constructor(size) {
    this.max = size;
    this.QueueData = new Array(size);
    this.front = -1;
    this.rear = -1;
    this.currrentSize = 0;
  }

  enqueue(newItem) {
    if (this.currrentSize != this.max) {
        if(this.rear==this.max-1){
            this.rear=0;
        }else{
            this.rear++;
        }
        if(this.rear==0 && this.currrentSize==0){
            this.front=this.rear;
        }
        this.QueueData[this.rear]=newItem;
        this.currrentSize++;
        
    } 
  }
  

  dequeue(){
    if(this.currrentSize!=0){
        let d1= this.QueueData[this.front];
        this.QueueData[this.front++]=null;
        this.currrentSize--;

        if(this.currrentSize==0){
            this.front=-1;
            this.rear=this.front;
        }
        if(this.front==this.max-1){
            this.front=0;
        }
    }
  }





  enqueueIn(newItem){
    if(this.front==(this.rear+1)%this.max){
      alert('Queue is overflowing');
    }else{
      if(this.front==-1 && this.rear==-1){
        this.rear=0;
        this.front=0;
        this.QueueData[this.rear]=newItem;
      }else{
        this.rear=(this.rear+1)%this.max;
        this.QueueData[this.rear]=newItem
      }
    }
  }



  dequeueIn(){
    let data;
    if(this.front==-1 && this.rear==-1){
      alert('Queue is already Empty')
      return;
    }else if(this.front==this.rear){
      data=this.QueueData[this.front];
      this.QueueData[this.front]=null;
      this.front=-1;
      this.rear=-1;
      console.log('Now queue became empty');
      return data;
    }else{
        data=this.QueueData[this.front];
        this.QueueData[this.front]=null;
        this.front=(this.front+1)%this.max;
        return data;
    }
  }


  displayQueue(){
    for(let i=this.front;i!=this.rear; i=(i+1)%this.max){
      console.log(this.QueueData[i]);
    }
    console.log(this.QueueData[this.rear])
  }

}

let cq = new CircularQueue(5);
// cq.enqueue(5);
// cq.enqueue(4);
// cq.enqueue(4);
// cq.enqueue(4);
// cq.enqueue(4)
// cq.dequeue()
// cq.enqueue(8)
// cq.dequeue()
cq.enqueueIn(5)
cq.dequeueIn();
cq.enqueueIn(5)
cq.enqueueIn(5)
cq.enqueueIn(3);
cq.enqueueIn(3);
cq.enqueueIn(3);
cq.dequeueIn();
cq.enqueueIn(1)
console.log(cq);
cq.displayQueue()
