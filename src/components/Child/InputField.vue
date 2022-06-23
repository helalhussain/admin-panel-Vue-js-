<script setup>
    
 defineProps({
  msg: {
    type: CharacterData,
    required: true
  },
   class: {
    type: CharacterData,
    required: true
  },
});


</script>

<template>

  <div class="form-floating mb-3">
        <input type="email"  class="class" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">Email address</label>
   </div>

</template>