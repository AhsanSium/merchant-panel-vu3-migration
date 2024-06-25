<template>
    <div class="container pt-10">
        <h3 class="text-2xl px-6 mb-2">All Orders</h3>
        <div id="orders" class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="px-2 w-full text-sm text-left rtl:text-right text-gray-800 dark:text-gray-700">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr class="table-row">
                        <th scope="col" class="px-2 py-3">Cons. ID</th>
                        <th scope="col" class="px-2 py-3">Order ID</th>
                        <th scope="col" class="px-2 py-3">Store</th>
                        <th scope="col" class="px-2 py-3">Recipient Info</th>
                        <th scope="col" class="px-2 py-3">Delivery Status</th>
                        <th scope="col" class="px-2 py-3">Amount</th>
                        <th scope="col" class="px-2 py-3">Payment</th>
                        <th scope="col" class="px-2 py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(order, i) in orders" :key="i" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" class="px-2 py-4" >{{ order.order_consignment_id }}</td>
                        <td scope="row" class="px-2 py-4"> {{ order.merchant_order_id }}</td>
                        <td scope="row" class="px-2 py-4 "> {{ order.store_name }}</td>
                        <td scope="row" class="px-2 py-4 ">
                            <div class="flex_table flex-col  justify-start">
                                <p class="px-2">{{ order.recipient_name }}</p>
                                <p class="px-2">{{ order.recipient_address }}</p>
                                <p class="px-2">{{ order.recipient_phone }}</p>
                            </div>
                        </td>
                        <td scope="row" class="px-2 py-4 "> 
                            <div class="flex_table flex-col flex-wrap justify-start">
                                <p class="my-2"> 
                                    <span class="text-sm text-blue-700 px-2 py-1 bg-blue-200 rounded-lg "> {{ order.order_status }} </span>
                                </p>
                                <p class="px-2">{{ order.order_status_updated_at }}</p>
                            </div>
                        </td>
                        <td scope="row" class="px-2 py-4 "> 
                            <div class="flex_table flex-col flex-wrap justify-start">
                                <p class="px-2">Cod: {{ order.cod_fee }}</p>
                                <p class="px-2">Charge: {{ order.delivery_fee }}</p>
                                <p class="px-2">Discount: {{ order.discount }}</p>
                            </div>
                        </td>
                        <td scope="row" class="px-2 py-4 "> 
                            <div class="flex_table flex-col flex-wrap justify-start">
                                <p class="">
                                    <span class="text-sm text-blue-700 px-2 py-1 my-2 bg-blue-200 rounded-lg">
                                        {{ order.billing_status }}
                                    </span>
                                </p>
                            </div>
                        </td>
                        <td scope="row" class="px-2 py-4 "> 
                            <div class="flex_table flex-col flex-wrap justify-start">
                                
                                <button class="block px-8 py-1 border border-red-500 text-red-500 rounded mb-2">View</button>
                                <button class="block px-8 py-1 border border-grey-600 text-grey-500 rounded">POD</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
// import { token, storesApi } from '../helpers/validation';
import { onMounted } from "vue";

export default {
    setup() {
    // expose the ref to the template
    
    // return {
    //   count
    // }
    },
    data(){
        return{
            orders : []
        }
    },
    mounted (){
        const getData = async () => {

        const url = import.meta.env.VITE_STORE_API;
        const token = import.meta.env.VITE_AUTH_TOKEN;

        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
        };

        await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            if(result.code == 200){
                this.orders = result.data.data;
                console.log(result.data.data);
            }
            else{
                alert("Error " +  result.message);
            }
            // this.orders = result.data.data;
            // console.log(result.data.data);
        })
        .catch((error) => {
            console.error(error);
        });
        }
        getData();
    },
    computed : {},
}
</script>

<style scoped>
.container {
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
}
/* table {
    border-collapse: collapse;
}
p{
    display: block;
}
.flex_table{
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: space-evenly;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-end;
    align-items: flex-start;
}
h2 {
  text-align: center;
  padding: 20px 0;
}

table caption {
	padding: .5em 0;
}

table.dataTable th,
table.dataTable td {
  white-space: nowrap;
  padding: 5px;
}

tr{
    padding: 10px !important;
}

.p {
  text-align: center;
  padding-top: 140px;
  font-size: 14px;
}

body {
  font-family: 'lato', sans-serif;
}
.container {
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
}

h2 {
  font-size: 26px;
  margin: 20px 0;
  text-align: center;
  small {
    font-size: 0.5em;
  }
}

.responsive-table {
    margin: 0 auto;
    border-radius: 3px;
    padding: 25px 30px;
    justify-content: space-between;
    margin-bottom: 25px;
}
  .table-header {
    background-color: #95A5A6;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
  .table-row {
    background-color: #ffffff;
    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
  }
  .col-1 {
    flex-basis: 10%;
  }
  .col-2 {
    flex-basis: 40%;
  }
  .col-3 {
    flex-basis: 25%;
  }
  .col-4 {
    flex-basis: 25%;
  } */
  
</style>