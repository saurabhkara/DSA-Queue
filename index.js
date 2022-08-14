let queue=[];
let queueLength=queue.length;
let max=5


function enqueue(newVal){
    if(queueLength<max){
        queue[queueLength++]=newVal;

    }else{
        alert('Can not add more element inside')
        return
    }

}

function deQueue(){
    let d1=queue[0];
    for(let i=0;i<queueLength;i++){
        queue[i]=queue[i+1];
    }
    queueLength--;
    queue.length=queueLength;
    return d1;
}

function display(){
    console.log(queue);
}


// enqueue(2);
// enqueue(3);
// enqueue(4);
// enqueue(5);
// enqueue(5);
// enqueue(5);
// enqueue(5);
// display();
// deQueue()
// display()
// deQueue()