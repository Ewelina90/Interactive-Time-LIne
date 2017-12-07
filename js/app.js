document.addEventListener("DOMContentLoaded",function(){

    const data = [
                    ['1.06.2015','LOREM IPSUM DOLOR SIT', 'fa-trophy'],
                    ['11.06.2015','LOREM IPSUM DOLOR SIT', 'fa-heart'],
                    ['15.06.2015','LOREM IPSUM DOLOR SIT', 'fa-graduation-cap'],
                    ['22.06.2015','LOREM IPSUM DOLOR SIT', 'fa-flask'],
                    ['30.06.2015','LOREM IPSUM DOLOR SIT', 'fa-gavel']
                ];
    const eventContener = document.querySelector('.time-line__scale');
    const numberOfDaysInMonth = 30; // June
    const today = 10;
    const windowWidth = window.innerWidth;

    if(windowWidth >= 1200){
        // set length of a scale
        eventContener.style.width = `${numberOfDaysInMonth*37}px`;
        // set length of scale background
        eventContener.parentNode.style.width = `${numberOfDaysInMonth*37}px`;
        // set length of time-line progress
        eventContener.firstElementChild.style.width = `${today*37 -18}px`;
    }

    function createEvent(data, place){
        data.map((el,index) => {

            // get number of day
            let dayNumber = getNumberOfDay(el[0]);

            // create elements
            let newEvent = document.createElement('div');
            newEvent.classList.add('event__background');
            // set position of event on timeline
            newEvent.style.left = calculatePosition(dayNumber,numberOfDaysInMonth,place);

            let newEventCircle = document.createElement('div');
            newEventCircle.classList.add(dayNumber <= today ? 'event__circle--finished' : 'event__circle');

            let newEventIcon = document.createElement('i');
            newEventIcon.classList.add('fa',el[2]);

            let newEventTooltip = document.createElement('div');
            newEventTooltip.classList.add('event__tooltip');

            let newEventTooltipData = document.createElement('div');
            newEventTooltipData.classList.add('event__tooltip--data');
            newEventTooltipData.textContent = (el[0]);

            let newEventTooltipName = document.createElement('div');
            newEventTooltipName.classList.add('event__tooltip--name');
            newEventTooltipName.textContent = (el[1]);

            // append elements
            newEventTooltip.appendChild(newEventTooltipData);
            newEventTooltip.appendChild(newEventTooltipName);
            newEventCircle.appendChild(newEventIcon);
            newEvent.appendChild(newEventCircle);
            newEvent.appendChild(newEventTooltip);
            place.appendChild(newEvent);
        })
    }

    function calculatePosition(dayNumber, numberOfDaysInMonth, scale){
        const widthOfPiece = scale.clientWidth / numberOfDaysInMonth;

        let position = 0;

        if(dayNumber === numberOfDaysInMonth){
            position = (widthOfPiece*dayNumber)-widthOfPiece+4;
        }
        else {
            position = (widthOfPiece*dayNumber)-widthOfPiece-4;
        }

        return `${position}px`;
    }

    function getNumberOfDay(date){
        return parseInt(date.slice(0,date.indexOf('.')));
    }

    createEvent(data,eventContener);
})
