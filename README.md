# Angular-Knob-Directive
Angular Directive for jQuery knob

// Include jQuery & Angular Library
```html<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
.
```html<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.min.js"></script>.

// Include jquery.knob.min.js for Knob & ng-Knob.js wrapper directive of jquery.knob.min.js
html<script src="lib/jquery.knob.min.js"></script>.
html<script src="js/Directive/ng-Knob.js"></script>.

//Then access directive 'ng-Knob' in app.js using

angular.module('ngKnobExample',['ng-Knob'])

//Create Knob using 

html<ng-knob  ng-model=change id="hh"/>.

// Unique id is compulsory to each knob 

Original jQuery Knob Link for Another Option like Color, Height, Width

https://github.com/aterrien/jQuery-Knob

//If you want to Change or Add the Option to Directive then edit .knob function under ng-Knob.js 

//for example you wnat add your color to knob then add  "fgColor":"#FF0000" option in .knob function under ng-Knob.js 

#before 

 .knob({
        'min':0,
        'max':100,
        'step':1,
        'release':function(v){
             scope.value=v;
         }
       });      

#after adding Color option  

 .knob({
        'fgColor':'#FF0000',
        'min':0,
        'max':100,
        'step':1,
        'release':function(v){
             scope.value=v;
         }
       });      