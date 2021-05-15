var ms = 0, s = 0, m = 0;
			var timer;

			var stopwatchEl = document.querySelector('.stopwatch')
			var lapscontainer = document.querySelector('.laps')

			function start(){
				if(!timer){
				timer = setInterval(run,10);
			}
		}
			function run(){
				stopwatchEl.textContent = (m < 10 ? "0" + m:m) + ":" + (s < 10 ? "0" + s:s) + ":" + (ms < 10 ? "0" + ms:ms);
				ms++;
				if(ms==100){
					ms = 0;
					s++;
				}
				if (s == 60){
					s = 0;
					m++;
				}
			}
			function pause(){
				clearInterval(timer);
				timer = false;
                alert("You are amazing, and better than yesterday")
			}
			function stop(){
				clearInterval(timer);
				timer = false;
				ms = 0;
				s = 0;
				m = 0;
				stopwatchEl.textContent = (m < 10 ? "0" + m:m) + ":" + (s < 10 ? "0" + s:s) + ":" + (ms < 10 ? "0" + ms:ms);
              
            }



