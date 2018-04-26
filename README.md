# emberJS-DeclaringObserver
Defining the inline observers by using the Ember.observer method without the prototype extensions.

open the app.js file and add the following line at the top of the file −

import outsideclassdefinitions from './outsideclassdefinitions';
Where, outsideclassdefinitions is a name of the file specified as "outsideclassdefinitions.js" and created under the "app" folder.

Next call the inherited "outsideclassdefinitions" at the bottom, before the export. It executes the outsideclassdefinitions function 
which is created in the outsideclassdefinitions.js file −

outsideclassdefinitions();

Only outsideclassdefinitions.js is included in this Repository.
