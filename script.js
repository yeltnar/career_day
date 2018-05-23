fetch("https://script.googleusercontent.com/macros/echo?user_content_key=U4gSs35aKSi207upNZdL6iVWn_lLBS5Dj09s0yHA0nGQrYcaSgRIuEwSEIVkSdVCMbgvE8fy8kI1-v_lxqdyOy5zseOdGdF6m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLJjccQemsyC9XjglTxppLOGD8Tf4tNfc1gUOBfeOTZ8xVRRz89izkt141PbqHO5Pa9Ru-aTgqmS&lib=MljJzP0oW8KQMhjX5TUxr-OSHbXOg7Oj3")
.then((data)=>{
	data.text().then((data)=>{
		data = data.split(/<.*?>/);
		data=data.reduce((acc,cur)=>{
			if( cur!=="" ){
				acc.push(cur);
			}
			return acc;
		},[]);

		let number = parseInt(Math.random()*data.length);

		printName(data[number]+" you win!");
	})
})

function printName(name){
	alert(name)
}