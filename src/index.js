import _ from 'lodash';

// must have css loader
import 'jif-dashboard/dashboard.css'

import 'jif-dashboard/dashboard-core'
import 'jif-dashboard/dashboard-util'
import 'jif-dashboard/dashboard-template'


function component() {
  var element = document.createElement('div');

  console.log("iyyo");
   
  //Lodash now imported from script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
