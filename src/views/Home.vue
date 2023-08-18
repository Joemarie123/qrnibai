<template>
    <v-app>
      <v-main>
        <v-container>
          <v-combobox
            v-model="selectedFullName"
            :items="fullNames"
            label="Select a Full Name"
          ></v-combobox>
  
          <v-text-field v-model="selectedId" label="ID" readonly></v-text-field>
          <v-text-field v-model="selectedBarangay" label="Barangay" readonly></v-text-field>
          <v-text-field v-model="selectedCourse" label="Course" readonly></v-text-field>
          <v-text-field v-model="selectedSchoolIntended" label="School Intended" readonly></v-text-field>
          <v-text-field v-model="selectedExamSet" label="Exam Set" readonly></v-text-field>
          <v-text-field v-model="selectedYearLevel" label="Year Level" readonly></v-text-field>
  
          <v-text-field v-model="selectedLastName" label="Last Name"></v-text-field>
          <v-text-field v-model="selectedFirstName" label="First Name"></v-text-field>
          <v-text-field v-model="selectedMiddleName" label="Middle Name"></v-text-field>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        selectedFullName: '',
        selectedId: '',
        selectedBarangay: '',
        selectedCourse: '',
        selectedSchoolIntended: '', // New property for School Intended
        selectedExamSet: '', // New property for Exam Set
        selectedYearLevel: '', // New property for Year Level
        fullNames: [],
        selectedLastName: '',
        selectedFirstName: '',
        selectedMiddleName: '',
        namesData: [], // Array to store names data
      };
    },
    methods: {
      async fetchFullNames() {
        try {
          const response = await axios.get('http://10.0.1.23:80/PEESOCESPRO/view.php');
  
          // Handle the specific data format with "users" property
          if (response.data && Array.isArray(response.data.users)) {
            this.namesData = response.data.users.map(user => {
              const [lastName, firstName, middleName] = user.fullname.split(' ');
              return {
                id: user.id,
                fullName: user.fullname,
                Barangay: user.Barangay,
                Course: user.Course,
                schoolIntended: user.schoolIntended, // Set School Intended value
                examSet: user.examSet, // Set Exam Set value
                yearLevel: user.yearLevel, // Set Year Level value
                lastName,
                firstName,
                middleName,
              };
            });
  
            this.fullNames = this.namesData.map(nameData => nameData.fullName);
          } else {
            console.error('Invalid data format:', response.data);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
      updateSelectedInfo() {
        const selectedNameData = this.namesData.find(nameData => nameData.fullName === this.selectedFullName);
  
        if (selectedNameData) {
          this.selectedId = selectedNameData.id;
          this.selectedBarangay = selectedNameData.Barangay;
          this.selectedCourse = selectedNameData.Course;
          this.selectedSchoolIntended = selectedNameData.schoolIntended; // Set School Intended value
          this.selectedExamSet = selectedNameData.examSet; // Set Exam Set value
          this.selectedYearLevel = selectedNameData.yearLevel; // Set Year Level value
          this.selectedLastName = selectedNameData.lastName;
          this.selectedFirstName = selectedNameData.firstName;
          this.selectedMiddleName = selectedNameData.middleName;
        } else {
          this.selectedId = '';
          this.selectedBarangay = '';
          this.selectedCourse = '';
          this.selectedSchoolIntended = '';
          this.selectedExamSet = '';
          this.selectedYearLevel = '';
          this.selectedLastName = '';
          this.selectedFirstName = '';
          this.selectedMiddleName = '';
        }
      },
    },
    watch: {
      selectedFullName: 'updateSelectedInfo', // Call updateSelectedInfo whenever selectedFullName changes
    },
    mounted() {
      this.fetchFullNames();
    },
  };
  </script>
  
  <style>
  /* Add any custom styles here */
  </style>
  