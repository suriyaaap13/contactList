console.log('javascript is connected');
document.querySelector('.create-button').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display = 'flex';
});
document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display = 'none';
});
document.getElementById("save").addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display = 'none';
});