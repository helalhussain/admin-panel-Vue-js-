<script >
import Header from '../Child/Header.vue'
import Sidebar from '../Child/Sidebar.vue'

import Footer from '../Child/Footer.vue'

export default{
 name:'StudentList',
    components:{
       Sidebar,
       Header,
       Footer
    }
};
</script>

<template>
 <div class="container-fluid position-relative d-flex p-0">

   <Sidebar />


        <!-- Content Start -->
        <div class="content">

             <Header />

         <!-- Table Start -->
      <div class="container-fluid pt-4 px-4">
        <div class="row g-4">
          <div class="col-12">
            <div class="bg-secondary rounded h-100 p-4">
              <h6 class="mb-4">Student List</h6> 
              <div class="table-responsive">
                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">SL</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>                
                        <td>Itmam Ahmed</td>
                        <td>itmam@gmail.com</td>
                        <td><button class="btn btn-primary">view profile</button></td>
                      </tr>
                      <tr>
                          <td>2</td>                
                          <td>Towfiq Khan</td>
                          <td>towfiq@gmail.com</td>
                          <td><button class="btn btn-primary">view profile</button></td>
                        </tr>
                    </tbody>
                  </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Table End -->
                  <!-- Recent Sales Start -->
            <div class="container-fluid pt-4 px-4">
                <div class="bg-secondary text-center rounded p-4">
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        <h6 class="mb-0">Current Month Statistics</h6>
                    </div>
                    <div class="table-responsive">
                        <table class="table text-start align-middle table-bordered table-hover mb-0">

                            <tbody>
                                <tr class="text-white">
                                    <td><b>New Student</b></td>
                                    <td>0</td>

                                </tr>
                                <tr class="text-white">
                                    <td class="text-white"><b>New Courses</b></td>
                                    <td>0</td>
                                </tr>
                                <tr class="text-white">
                                    <td><b>New Instructors</b></td>
                                    <td>0</td>
                                </tr>
                                <tr class="text-white">
                                    <td><b>Enrolled Courses</b></td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- Recent Sales End -->         

        <Footer />
        
        </div>
        <!-- Content End -->


    </div>
</template>