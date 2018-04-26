import Ember from 'ember';

export default function() {
   var Person = Ember.Object.extend ({
      Name: null,
      
      //Defining the Details1 and Details2 computed property function
      Details1: Ember.computed('Name', function() {
         
         //get the Name value
         var Name = this.get('Name');
         //return the Name value
         return Name;
      }),
      Details2: Ember.observer('Details1', function() {})
   });
   
   //initializing the Person details
   var person = Person.create ({
      Name: 'Steve',
   });
   
   person.set('Name', 'Jhon');
   document.write('Name is Changed To: ' + person.get('Details1'));
}