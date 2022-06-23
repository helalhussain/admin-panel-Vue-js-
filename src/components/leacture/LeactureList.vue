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
             <!-- Table Start -->
      <div class="container-fluid pt-4 px-4">
        <div class="row g-4">
          <div class="col-12">
            <div class="bg-secondary rounded h-100 p-4">
              <div class="row mb-3">
                <h6 class="mb-4">Lecture List</h6>
                <div class="col-6">
               <router-link to="add-leacture">
                   <a class="btn btn-primary">
                    Add New Lecture
                  </a>
               </router-link>
                </div>
                <div class="col-6">
                  <input type="text" placeholder="Search Here" class="form-control">
                </div>
              </div>
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">SL</th>
                      <th scope="col">Lecture</th>
                      <th scope="col">Duration</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <td>2</td>
                      <td>Basic Graphs and Trees</td>
                      <td>00:18:23</td>
                      <td class="">
                        <a class="mx-1" href="details.html" title="View"><i class="text-success far fa-eye"></i></a>
                        <router-link to="/edit-leacture">
                          <a class="mx-1" title="Edit"><i class="text-blue far fa-edit"></i></a>
                        </router-link>
                        <a class="mx-1" href="#" title="Trash" data-bs-toggle="modal" data-bs-target="#deleteModal"><i
                            class="text-primary far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <nav aria-label="Page navigation example" class="mt-5">
                  <ul class="pagination" style="width:20%;margin-left: auto; margin-right: auto;">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Table End -->

     <Footer />

     </div>
        <!-- Content End -->

 </div>
</template>