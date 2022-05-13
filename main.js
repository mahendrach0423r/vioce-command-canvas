x =0;
y =0;
draw_rectangle =" ";
draw_circle =" ";

var SpeechRecognition =wibkitSpeechrecognition

var recognition = new SpeechRecognition();

function start()
{
   document.getElementById("status").innerHTML="system is listening plase speck"
   recognition.start();
}
 recognition.onresult =function(event)
 {
     console.log(event)

     var content = results[0][0].transcript;
     document.getElementById("status").innerHTML="The speech has been recoginesed as- " + content;
     if(content=="circle")
     {
         x = Math.floor(Math.random()*900)
         y = Math.floor(Math.random()*600)
         document.getElementById("status").innerHTML="Started drawing circle"
         draw_circle="set";
     }
     if(content=="rectangle")
     {
         x = Math.floor(Math.random()*900)
         y = Math.floor(Math.random()*600)
         document.getElementById("status").innerHTML="Started drawing circle"
         draw_rectangle="set"
     }

     function setup()
     {
         canvas =createCanvas(900,800);

     }

     function draw()
     {
         if(draw_circle=="set")
         {
             radius=Math.floor(Math.random()*100)
             circle(x,y,radius)
             document.getElementById("status").innerHTML="circle has been drawn"
             draw_circle=" ";
         }
         if(draw_rectangle=="set")
         {
             rect(x,y,70,50)
             document.getElementById("status").innerHTML="rectangle has been drawn"
         }
     }


 }
