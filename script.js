
const delay =(ms)=> new Promise(resolve => setTimeout(resolve,ms));
async function displaymessage() {
	 const text=document.getElementById('text').value.trim();
     const delayTime=parseInt(document.getElementById('delay').value);
     const output=document.getElementById('output');
	
	output.textContent='';
	if(!text||isNaN(delayTime)||delayTime<0){
		output.textContent = 'Please enter valid text and a non-negative delay.';
        return;
	}
	await delay(delayTime)
	output.textContent=text;
}



document.getElementById('btn').addEventListener("click",displaymessage);