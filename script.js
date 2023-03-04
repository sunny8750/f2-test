//declaring variables by id
var headername = document.getElementById('name');
var postcontent = document.getElementById('msg');
let arr = [];
var Save_changes = "Publish Post";
//function to display the blog
function display(){
    var time = new Date();//timer to get update
    let showdiv = "";
    console.log(arr.length);
    arr.forEach((q , i)=>{
        //pushing the data in to empty div 
        showdiv +=`
    <div class="container mt-3 line">
        <h1 class="h2" id="name">${q.head}</h1><br>
        <div class="content" >
            <p id="content">${q.p}</p>
        </div><br>
        <div class="btn d-flex justify-content-between">
            <div class="btn-container d-flex">
            <button type="button" class="btn  border-light text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="edityourpost(${i})">
            Edit Post
        </button>
                <button type="button" class="btn  border-light text-white ms-1" onclick='deletefun(${i})'>Delete Post</button>
            </div>
            <div class="update">
                <p id="update" class="text-muted">Last Updated At : ${time.toLocaleString('en-US', { hour: 'numeric', hour12: true }+" : "+time.getMinutes())}</p>
            </div>
        </div>
    </div>`;
    });
    
    document.getElementById('cid').innerHTML = showdiv;
}

var sid = null;

function TakeData(){
    var name = headername.value;
    var msg1 = postcontent.value;

    if(sid!= null){
        arr.splice(sid,1,{head: name, p: msg1});
    }else{
        arr.push({head: name, p: msg1});
    }

    document.getElementById('ppublish').innerHTML = Save_changes;
    display();

    document.getElementById('name').value = "";
    document.getElementById('msg').value = "";

}


function edityourpost(id){

    sid = id;
   // document.getElementById('cancel').innerHTML="Delete Post"
    document.getElementById('h31').innerText="Edit Post"
    document.getElementById('ppublish').innerHTML = 'Save changes';
    document.getElementById('name').value = arr[id].head;
    document.getElementById('msg').value = arr[id].p;

}

function deletefun(id){
    arr.splice(id,1);
    display();
}


