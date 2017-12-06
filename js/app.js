document.addEventListener("DOMContentLoaded",function(){

    const data = [
                    ['2.06.2015','Festiwal', 'ikona'],
                    ['11.06.2015','Festiwal', 'ikona'],
                    ['15.06.2015','Festiwal', 'ikona'],
                    ['22.06.2015','Festiwal', 'ikona'],
                    ['30.06.2015','Festiwal', 'ikona']
                ];
    const eventContener = document.querySelector('.time-line__progress');
    let lastPosition = -12;

    function createEvent(data, place){
        data.map((el,index) => {
            console.log(el,index);
            let newEvent = document.createElement('div');
            newEvent.classList.add('event__background');
            newEvent.style.left = calculatePosition(30,lastPosition,place);

            let newEventCircle = document.createElement('div');
            newEventCircle.classList.add('event__circle');

            newEvent.appendChild(newEventCircle);
            place.appendChild(newEvent);

            lastPosition = lastPosition + 37;
        })
    }

    function calculatePosition(numberOfDay, lastPosition, scale){
        const width = scale.clientWidth;
        if(width < numberOfDays*37){
            console.log('ok');
        }
        else {
            console.log('za małe');
        }
        let position = lastPosition + 18;
        return `${position}px`;
    }

    createEvent(data,eventContener);
})
