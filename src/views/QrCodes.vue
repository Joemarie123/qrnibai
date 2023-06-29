<template>
<v-app>
<h1> THIS IS QRCODES GENERATOR</h1>

<v-row>
    
 <!--    <v-col cols="12">
      
    <v-text-field v-model="search"></v-text-field>
 <div v-for="person in filteredCustomers" >  
   <span>
    ID: {{person.id}} 
    FullName:{{person.FullName}}
</span>
</div>


</v-col> -->


    <v-col cols="4">
<v-card>
</v-card>
</v-col>
</v-row>
<div class="d-flex-column justify-center w-50">
<v-text-field  v-model="QRValue" label="Type Number to Generater">

</v-text-field>
</div>
<qrcode-vue v-if="QRValue" :value="QRValue" :size="300" level="H" />

<v-btn color="green" @click="dialog = true" >

Read QR CODES
</v-btn>

<v-dialog v-model="dialog" max-width="700px">
<v-card>
    
    <div class="text-center ">
<v-alert class="px-n7" dense dark color="blue darken-3">
QR CODES READER<strong>
     </strong>

 </v-alert>
</div>

    <v-container>

<v-row>

    <v-col cols="12" md="6">
    <v-card>


<qrcode-stream @init="onInit"  @decode="onDecode" ></qrcode-stream>

<p>
 {{ error }}  
  
</p>


</v-card>
</v-col>

<v-col cols="12"  md="6">

<v-card>
 <!--  :value="decodedString" -->
 <v-text-field :value="decodedString"  v-model="search" @change="fetchData"  ></v-text-field>
    <!-- <p > ID Number: {{ decodedString }}</p> -->
  <!--   <div v-for="person in filteredCustomers" >
  <p> Full Name: {{ person.FullName }}</p>
  <p> Address: {{ person.Address }}</p>
   <p> Civil Status: {{ person.Civil_Status }}</p>
</div> -->

<div v-if="found">
      <h2>Results:</h2>

  <p> Full Name: {{ result.FullName }}</p>
  <p> Address: {{ result.Address }}</p>
   <p> Civil Status: {{ result.Civil_Status }}</p>
</div>

    <div v-else-if="searched">
      <p>No results found for {{ search }}</p>
    </div>

</v-card>   
</v-col>

</v-row>

</v-container>
</v-card>

</v-dialog>
</v-app>
</template>


<script>
import QrcodeVue from 'qrcode.vue'
import { QrcodeStream } from 'vue3-qrcode-reader'

export default{
    name: "qrcodesbai",
    data(){ 
      
        return{
            dialog:false,
            QRValue:null, 
            error:'',
            decodedString:'',

            search: "",
      found: false,
      searched: false,
      result: {},
             
            persons: [

            {
         
              id: '123', 
          FullName: 'None',
           Address: 'None',
          Civil_Status:'None', 
          
          },


          {
          id: 'DDN48242F4DE', 
         
          FullName: 'Joemarie Rendon',
           Address: 'Purok 2-A Magatos,Asuncion',
          Civil_Status:'Married', 
          
          },


          {
          id: 'DDN26DF58AD3', 
         
          FullName: 'Milanie Rendon',
           Address: 'Purok 2 Andap LAAK',
          Civil_Status:'Married', 
          
          },

          {
          id: 'DDN89B4787F3', 
         
          FullName: 'Rebecca Waga',
           Address: 'Purok 4 Buhol',
          Civil_Status:'Married', 
          
          }



      ],

    

        }

    },


    components:{

        QrcodeVue,
        QrcodeStream,
    },


    methods: {

     

  async onInit (promise) {
    // show loading indicator

    try {
      const { capabilities } = await promise

      // successfully initialized
    } catch (error) {
      if (error.name === 'NotAllowedError') {
        // user denied camera access permisson
      } else if (error.name === 'NotFoundError') {
        // no suitable camera device installed
      } else if (error.name === 'NotSupportedError') {
        // page is not served over HTTPS (or localhost)
      } else if (error.name === 'NotReadableError') {
        // maybe camera is already in use
      } else if (error.name === 'OverconstrainedError') {
        // did you requested the front camera although there is none?
      } else if (error.name === 'StreamApiNotSupportedError') {
        // browser seems to be lacking features
      }
    } finally {
      // hide loading indicator
    }
  },

  onDecode(decodedString){

    this.decodedString = decodedString;

    this.search = decodedString;
      const foundData = this.data.find((item) => item.id === decodedString);
      if (foundData) {
        this.result = foundData;
        this.found = true;
      } else {
        this.found = false;
      }
      this.searched = true;

  }

},

  computed: {

    fetchData() {
      const searchLower = this.search.toLowerCase();
      const foundData = this.persons.find(
        (item) =>
          item.id.toLowerCase().includes(searchLower) ||
          item.FullName.toLowerCase().includes(searchLower) ||
          item.Address.toLowerCase().includes(searchLower)
      );
      if (foundData) {
        this.result = foundData;
        this.found = true;
      } else {
        this.found = false;
      }
      this.searched = true;
    },

  }


   /*   computed: {
        filteredCustomers() {
    	 var self = this;
       return this.persons.filter((cust) => {
         return cust.id.toLowerCase().indexOf(self.search.toLowerCase()) >= 0 ||                                       
           cust.FullName.toLowerCase().indexOf(self.search.toLowerCase()) >= 0;
           
       });
       
       
    },

},  */








}



</script>