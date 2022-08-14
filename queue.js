console.log("You will make everything fine");


let queueData=[];
let max=5;
let queueLength=queueData.length;


function enqueue(){
    let newItem=document.querySelector('#inp').value;
    
    if(queueLength<max && newItem){
        queueData[queueLength++]=newItem;
        console.log('Element inserted',newItem);
      
    }else if(!newItem){
        alert('Insert correct data')
    }else{
        alert('Can not insert more item, already full')
    }
    document.querySelector('#inp').value='';
    return ;
}

function denqueue(){
    if(queueData.length>0){
        let frontItem=queueData[0];
        for(let i=0; i <queueLength;i++){
            queueData[i]=queueData[i+1];
        }
        queueLength--;
        queueData.length=queueLength;
        console.log('Removed Item:',frontItem)
        return frontItem;
    }else{
        alert('Queue is already empty');
        return ;
    }
}


function DisplayQueue(){
    console.log(queueData)
}


function frontElement(){
    if(!isEmpty()){
        console.log('front Element of Queue :',queueData[0])
    }else{
        alert('Queue is Empty')
    }

}

function rearElement(){
    if(!isEmpty()){

        console.log('Rear element of Queue:',queueData[queueLength-1]);
    }else{
        alert('Queue is empty')
    }
}

function isEmpty(){
    if(queueData.length>0){
        return false;
    }else{
        return true;
    }
}