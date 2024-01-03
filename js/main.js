const app = new Vue({
   el: '#app',
   data: {
      error: false,
      contact_name: null,
      contact_number: null,
      contact_description: null,
      contact_search: null,
      contacts: [{name: 'Sherman', number: 1564388161,  description: 'Developer'}]
   }, //End data obj
   methods: {
      addContact() {
         if (this.contact_name != null && this.contact_number != null && this.contact_description != null) { //If the contact is empty not create
            this.contacts.push({ //Add to array contact
               name: this.contact_name, //create name
               number: this.contact_number, //create number
               description: this.contact_description //create description
            });
            if (this.error) {
               this.error = false; //if error is visible just disappear
            }
            //Clean inputs
            this.contact_name = '';
            this.contact_number = '';
            this.contact_description = '';
         } else {
            this.error = true; //Shpw error message
         }
      }, //End addContact method
      deleteContact(arrayItem) {
         let index = this.contacts.indexOf(arrayItem); //get element/contact
         this.contacts.splice(index, 1); //delete
      },
   } //End methods obj 
});
