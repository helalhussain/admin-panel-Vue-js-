<script>
import Header from '../Child/Header.vue'
import Sidebar from '../Child/Sidebar.vue'
import Footer from '../Child/Footer.vue'
export default{
    name:'CategoryList',
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
              <h6 class="mb-4">Category list</h6>
              <div class="row mb-3">
                <div class="col-6">
                  <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCat">
                    Add Category
                  </button>
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
                      <th scope="col">Category</th>
                      <th scope="col">Sub category</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Comp. Sci</td>
                      <td><i class="text-success far fa-eye " type="button" data-bs-toggle="modal"
                          data-bs-target="#exampleModal"></i>
                      </td>

                      <td>
                        <a class="mx-1" href="#" title="Edit"><i class="text-blue far fa-edit" type="button"
                            data-bs-toggle="modal" data-bs-target="#exampleModalCatE"></i></a>
                        <a class="mx-1" href="#" data-bs-toggle="modal" data-bs-target="#deleteModal" title="Trash"><i
                            class="text-primary far fa-trash-alt"></i></a>
                      </td>
                    </tr> 
                    <tr>  
                      <td>2</td>
                      <td>Business</td>
                      <td><i class="text-success far fa-eye " type="button" data-bs-toggle="modal"
                          data-bs-target="#exampleModal"></i>
                      </td>

                      <td>
                        <a class="mx-1" href="#" title="Edit"><i class="text-blue far fa-edit" type="button"
                            data-bs-toggle="modal" data-bs-target="#exampleModalCatE"></i></a>
                        <a class="mx-1" href="#" data-bs-toggle="modal" data-bs-target="#deleteModal" title="Trash"><i
                            class="text-primary far fa-trash-alt"></i></a>
                      </td>
                    </tr>  
                    <tr>  
                      <td>3</td>
                      <td>Development</td>
                      <td><i class="text-success far fa-eye " type="button" data-bs-toggle="modal"
                          data-bs-target="#exampleModal"></i>
                      </td>

                      <td>
                        <a class="mx-1" href="#" title="Edit"><i class="text-blue far fa-edit" type="button"
                            data-bs-toggle="modal" data-bs-target="#exampleModalCatE"></i></a>
                        <a class="mx-1" href="#" data-bs-toggle="modal" data-bs-target="#deleteModal" title="Trash"><i
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
       <!--Modal-->


      <!-- Modal for Sub Category -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog ">
          <div class="modal-content bg-secondary">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Subcategories</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="table-responsive">
                <ul>
                  <li>Data Structure</li>
                  <li>Algorithm</li>
                  <li>Machine learning</li>
                  <li>Web Development</li>
                  <li>App Development</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!--MOdal for Adding Courses-->
      <div class="modal fade" id="exampleModalCat" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog ">
          <div class="modal-content bg-secondary">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"> Add Category</h5>
              <button type="button " class="btn-primary" data-bs-dismiss="modal" aria-label="Close">X</button>
            </div>
            <div class="modal-body">
              <div class="container-fluid pt-2 px-1">
                <div class="">
                  <div class="bg-secondary rounded h-100 p-1">

                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" id="floatingInput">
                      <label for="floatingInput">Category</label>
                    </div>

                    <div class="form-floating mb-3">
                      <select class="form-select">
                        <option selected=""></option>
                        <option value="1">Computer Science</option>
                        <option value="2">Business</option>
                        <option value="3">Development</option>
                      </select>
                      <label for="floatingSelect">Select Parent Category</label>
                    </div>


                    <button type="submit" class="btn btn-primary">Edit</button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      <!--Modal to End -->

       <!--MOdal for Edit Courses-->
      <div class="modal fade" id="exampleModalCatE" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog ">
          <div class="modal-content bg-secondary">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"> Edit Category</h5>
              <button type="button " class="btn-primary" data-bs-dismiss="modal" aria-label="Close">X</button>
            </div>
            <div class="modal-body">
              <div class="container-fluid pt-2 px-1">
                <div class="">
                  <div class="bg-secondary rounded h-100 p-1">

                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" id="floatingInput" value="Android Development">
                      <label for="floatingInput">Category</label>
                    </div>

                    <div class="form-floating mb-3">
                      <select class="form-select">
                        <option selected=""></option>
                        <option value="1" >Computer Science</option>
                        <option value="2">Business</option>
                        <option value="3" selected>Development</option>
                      </select>
                      <label for="floatingSelect">Select Parent Category</label>
                    </div>


                    <button type="submit" class="btn btn-primary">Save</button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="modal fade" id="deleteModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content bg-secondary">
            <div class="modal-header">
              <h5 class="modal-title">Delete Categoty</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Are you sure want to delete this category?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary">Delete</button>
            </div>
          </div>
        </div>
      </div>

      <!--Modal to End -->

     <Footer />

     </div>
        <!-- Content End -->

 </div>
</template>