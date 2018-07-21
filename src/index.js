//Excersice 1
//Get numbers above 70 
const numbers =[,3,4,6,9,6,3,2,6,44,67,99,33,22,6,6,89,90];

let numsGreaterThan70= numbers.filter((num)=>{
    return num>70;
});

console.log(numsGreaterThan70);

//Excersice 2

/*
<ul>
    <li data-time="5:17">Flexbox Video</li>
    <li data-time="8:22">Flexbox Video</li>
    <li data-time="3:34">Redux Video</li>
    <li data-time="5:23">Flexbox Video</li>
    <li data-time="7:12">Flexbox Video</li>
    <li data-time="7:24">Redux Video</li>
    <li data-time="6:46">Flexbox Video</li>
    <li data-time="4:45">Flexbox Video</li>
    <li data-time="4:40">Flexbox Video</li>
    <li data-time="7:58">Redux Video</li>
    <li data-time="11:51">Flexbox Video</li>
    <li data-time="9:13">Flexbox Video</li>
    <li data-time="5:50">Flexbox Video</li>
    <li data-time="5:52">Redux Video</li>
    <li data-time="5:49">Flexbox Video</li>
    <li data-time="8:57">Flexbox Video</li>
    <li data-time="11:29">Flexbox Video</li>
    <li data-time="3:07">Flexbox Video</li>
    <li data-time="5:59">Redux Video</li>
    <li data-time="3:31">Flexbox Video</li>
</ul>


1. Select all the list items on the page and convert to array
  2. Filter for only the elements that contain the word 'flexbox'
  3. map down to a list of time strings
  4. map to an array of seconds
  5. reduce to get total
  OR 🔥 This can also be done in a single .reduce(), but we're practicing arrow functions here, so chain them!
*/


var items = document.querySelectorAll("[data-time]");
debugger;
console.log(items.length);

const videoTimimgs=[];
items.forEach((item)=>{
    if (item.innerHTML ==="Flexbox Video"){
        videoTimimgs.push(item.getAttribute("data-time"));
    }
})
 let totalCOurseTime= videoTimimgs.map((time)=>{
        return time.replace(":",".");
        
 });

 let totaltime=0;
totalCOurseTime.forEach((item)=>{
   totaltime += parseFloat(item); 
});
console.log(totaltime.toFixed(2));

//OR Below is an another new smplified approach


var items =Array.from( document.querySelectorAll("[data-time]"));
const result= items.filter((item)=>{
    return item.innerHTML.includes("Flexbox")
}).
map((item)=>{
    return item.dataset.time;
}).
map((item)=>{
    return item.replace(':','.');
}).
map((item)=>{
    return parseFloat(item);
}).
reduce((item1,item2 )=>{
  return  (item1+item2);
},0);
console.log(result.toFixed(2));

