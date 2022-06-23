<script >
import Sidebar from './Child/Sidebar.vue'
import Header from './Child/Header.vue'
import Footer from './Child/Footer.vue'

export default{
 name:'Index',
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

          <!-- Sale & Revenue Start -->
            <div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                    
                    <div class="col-6 ">
                        <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-5">
                            <i class="fa fa-th-list fa-5x text-primary"></i>
                            <div class="ms-3">
                                <p class="mb-2" style="font-size:1.4rem;">Total Categories</p>
                                <h6 class="mb-0" style="font-size:1.4rem;">0</h6>

                            </div>
                        </div>
                    </div>

                    <div class="col-6 ">
                        <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-5">
                            <i class="fa fa-book fa-5x text-primary"></i>
                            <div class="ms-3">
                                <p class="mb-2" style="font-size:1.4rem;">Total Courses</p>
                                <h6 class="mb-0" style="font-size:1.4rem;">0</h6>

                            </div>
                        </div>
                    </div>

                    <div class="col-6 ">
                        <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-5">
                            <i class="fa fa-users fa-5x text-primary"></i>
                            <div class="ms-3">
                                <p class="mb-2" style="font-size:1.4rem;">Total Students</p>
                                <h6 class="mb-0" style="font-size:1.4rem;">0</h6>

                            </div>
                        </div>
                    </div>
                    <div class="col-6 ">
                        <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-5">
                            <i class="fa fa-graduation-cap fa-5x text-primary"></i>
                            <div class="ms-3">
                                <p class="mb-2" style="font-size:1.4rem;">Total Instructors</p>
                                <h6 class="mb-0" style="font-size:1.4rem;">0</h6>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <!-- Sale & Revenue End -->


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