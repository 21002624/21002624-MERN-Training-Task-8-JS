document.getElementById('addTask').addEventListener('click',()=>{
    const input=document.getElementById('textInput');
    const text=input.value;
    const display=document.getElementById('display');
    console.log(text);
    if(text!==''){
        const li=document.createElement('li');
        li.textContent=text;
        const deleteBtn=document.createElement('button');
        deleteBtn.setAttribute('id','deleteBtn');
        deleteBtn.textContent='Delete';
        deleteBtn.addEventListener('click',()=>{
            display.removeChild(li);
        })

        li.appendChild(deleteBtn);
        display.appendChild(li);
    }
    input.value='';
})