console.log(users);
//laurie.appts[2].time='2222';
//users;
//laurie.appts.length;
// check if neww appointment matches lauries appts

{let newAppt = {date:"05/24/2021",time:"1730"};
let check = laurie.appts.includes(newAppt);
console.log(newAppt.date && check);
if (check=false){
    console.log(`${laurie.name} has no appointment schedules on ${newAppt.date} at ${newAppt.time}`);
}
}