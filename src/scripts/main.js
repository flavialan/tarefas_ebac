const eventDate = new Date("Aug 30 2024 7:00:00");
const timeStampOfEvent = eventDate.getTime();

const countHours = setInterval (function(){
    const now = new Date();
    const timeStampNow = now.getTime();

    const distanceToEvent = timeStampOfEvent - timeStampNow;
    
    const daysUntilEvent = Math.floor(distanceToEvent / (1000 * 60 * 60 * 24));
    const hoursUntilEvent = Math.floor((distanceToEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesUntilEvent = Math.floor(distanceToEvent % (1000 * 60 * 60) / (1000 * 60));
    const secondsUntilEvent = Math.floor(distanceToEvent % (1000 * 60) / 1000);

    document.getElementById('counter').innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`;

    if(distanceToEvent < 0) {
        clearInterval(countHours);

        document.getElementById('counter').innerHTML = 'The biggest technology event of Brazil started at: 12/12/2023';
    }
}, 1000);