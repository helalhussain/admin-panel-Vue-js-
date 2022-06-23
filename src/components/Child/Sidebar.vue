
<script>
    export default{
        name:'Sidebar',
    
       
    };

</script>

<template>
  <!-- Sidebar Start -->
        <div class="sidebar pe-4 pb-3">
            <nav class="navbar bg-secondary navbar-dark">
                <a class="navbar-brand mx-4 mb-3">
                    <h3 class="text-primary"><i class="fa fa-user-edit me-2"></i>Blockchain</h3>
                </a>
                <div class="d-flex align-items-center ms-4 mb-4">
                    <div class="position-relative">
                        <img class="rounded-circle" src="../../assets/img/user.jpg" alt="" style="width: 40px; height: 40px;">
                        <div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div class="ms-3">
                        <h6 class="mb-0">Jhon Doe</h6>
                        <span>Admin</span>
                    </div>
                </div>
                <div class="navbar-nav w-100">
                  <router-link to="/index">
                    <a  class="nav-item nav-link active"><i class="fa fa-tachometer-alt me-2"></i>Dashboard</a>
                   </router-link>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i
                            class="fa fa-laptop me-2"></i>Course</a>
                        <div class="dropdown-menu bg-transparent border-0">
                            <router-link  to="/add-course">
                            <a class="dropdown-item">Add Course</a>
                            </router-link>
                            <router-link to="/course-list">
                            <a  class="dropdown-item">Course List</a>
                            </router-link>
                        </div>
                    </div>
                    <router-link to="category-list">
                     <a class="nav-item nav-link "><i
                         class="fa fa-th-list me-2"></i>Category
                     </a>
                     </router-link>
                     <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i
                            class="fa fa-laptop me-2"></i>Leacture</a>
                        <div class="dropdown-menu bg-transparent border-0">
                            <router-link  to="/add-leacture">
                                 <a class="dropdown-item">Add Leacture</a>
                            </router-link>
                      
                            <router-link to="/leacture-list">
                                <a class="dropdown-item">Leacture List</a>
                            </router-link>
                        </div>
                    </div>

                    <!-- <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle " data-bs-toggle="dropdown"><i class="far fa-file-alt me-2"></i>Pages</a>
                        <div class="dropdown-menu bg-transparent border-0">
                            <router-link to="signin">
                                <a class="dropdown-item">Sign In</a>
                            </router-link>
                            <router-link to="signup">
                                <a href="signup.html" class="dropdown-item">Sign Up</a>
                            </router-link>
                            <a href="" class="dropdown-item active">404 Error</a>
                            <a href="" class="dropdown-item">Blank Page</a>
                        </div>
                    </div> -->
                </div>
            </nav>
        </div>
        <!-- Sidebar End -->
</template>