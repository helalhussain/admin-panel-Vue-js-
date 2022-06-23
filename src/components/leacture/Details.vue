<script>
import Header from '../Child/Header.vue'
import Sidebar from '../Child/Sidebar.vue'
import Footer from '../Child/Footer.vue'
export default{
    name:'AddLeacture',
    components:{
        Header,
        Sidebar,
        Footer
    }

}
</script>

<template>
 <div class="container-fluid position-relative d-flex p-0">

   <Sidebar />
        <!-- Content Start -->
    <div class="content">

     <Header />


     <Footer />

     </div>
        <!-- Content End -->

 </div>
</template>