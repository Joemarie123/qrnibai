<template>
  <router-view />
</template>

<script>

</script>

<style>
.colorforbutton{
  background-color: rgba(4, 51, 40, 0.895)!important;
  color: aliceblue!important;
}

.colorfortext{
      color: rgba(4, 51, 40, 0.895)!important;
           /*  color: aliceblue!important; */
    }

.v-data-table thead {
  position: sticky;
  top: 0;
  background-color: #f5f5f5;
  z-index: 1;

}


.my_class td{
             font-size: 15px!important;
            height: 0!important;
            padding-left: 6px!important;
            padding-right: 7px!important;
            padding-top: 7px!important;
            overflow-x: hidden;
   }
   .my_class th{
             font-size: 15px!important;
            height: 0!important;
            padding: 1px!important;
            background-color: rgba(4, 51, 40, 0.895)!important;
            color: aliceblue!important;
            padding-left: 7px!important;
            padding-right: 7px!important;

   }

@media screen and (max-width: 600px) {
.v-data-table > .v-data-table__wrapper > table {
    border-spacing: 0 0.5rem;
    padding:2px;

}

          .my_class td{
             font-size: 11px!important;
            height: 0!important;
            padding-left: 6px!important;
            padding-right: 7px!important;
            padding-top: 7px!important;
            }


   .my_class th{
             font-size: 12px!important;
            height: 0!important;
            padding: 1px!important;
            background-color: rgba(4, 51, 40, 0.895)!important;
            color: aliceblue!important;
            padding-left: 7px!important;
            padding-right: 7px!important;

   }

  }


</style>
