/*-----------------------------------Call Notes (Tab 1)----------------------------------------*/
function submit() {
  var field_names = [
    document.getElementById('field1').value,
    document.getElementById('field2').value,
  ];

  var submit = document.getElementById('fields').innerHTML = `${field_names[0]}; ${field_names[1]}: `;
}

function clear_fields() {
  var ids = ['field1', 'field2'];
  for (let id of ids) {
    document.getElementById(id).value = "";
    console.log('This button works')
  }
}

/*--------------------------------------------------------------------------------------------*/
/*-----------------------------------Blurb Tool (Tab 2)-----------------------------------*/




/*--------------------------------------------------------------------------------------------*/
/*-----------------------------------Case Converter (Tab 3)-----------------------------------*/
function lowerCase(id) {
  // This will be used to convert text to lowercase.  This will mostly be used for email addresses.
  var string = document.getElementById(id).value;
  var converted = document.getElementById(id).value = string.toLowerCase();
}

function titleCase(id) {
  // This will be used to convert text to title case.  This will be used for phyiscal addresses.
  var string = document.getElementById(id).value.toLowerCase().split(' ');
  for (var i = 0; i < string.length; i++) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    var converted = document.getElementById(id).value = string.join(' ');
  }
}
/*-------------------------------------------------------------------------------------------*/
/*------------------------Add Advocate/Database Request (Tab 4)------------------------------*/
function advocate_submit() {
  var field_names = [
    document.getElementById('advocate_name').value,
    document.getElementById('site_name').value,
    document.getElementById('site_address').value,
    document.getElementById('site_phone').value,
    document.getElementById('site_fax').value,
    document.getElementById('patient_id').value
  ];

var submit = document.getElementById('submit_info').innerHTML = `
Advocate Name: ${field_names[0]}
Site Name: ${field_names[1]}
Site Address: ${field_names[2]}
Site Phone: ${field_names[3]}
Site Fax: ${field_names[4]}
Patient ID: ${field_names[5]}`;
}

function advocate_clear() {
  var ids = ['advocate_name', 'site_name', 'site_address', 'site_phone', 'site_fax', 'patient_id'];
  for (let id of ids) {
    document.getElementById(id).value = "";
    console.log('This button works')
  }
}

