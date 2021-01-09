<template>
  <div class="grid gap-4 grid-cols-4">
    <div v-if="currentPage === 1" :class="disabledStyle">
      <span class="hidden sm:inline">First</span>
    </div>

    <nuxt-link
      v-else
      :to="{ name: 'pages-page', params: { page: 1 } }"
      :class="buttonStyles"
    >
      <span class="hidden sm:inline">First</span>
    </nuxt-link>

    <div v-if="currentPage === 1" :class="disabledStyle">
      <span class="hidden sm:inline">Prev</span>
    </div>

    <nuxt-link
      v-else
      :to="{ name: 'articles-page-page', params: { page: prevPage } }"
      :class="buttonStyles"
    >
      <span class="hidden sm:inline">Prev</span>
    </nuxt-link>

    <div v-if="currentPage === totalPages" :class="disabledStyle">
      <span class="hidden sm:inline">Next</span>
    </div>

    <nuxt-link
      v-else
      :to="`/page/${nextPage}`"
      :class="buttonStyles"
    >
      <span class="hidden sm:inline">Next</span>
    </nuxt-link>

    <div v-if="currentPage === totalPages" :class="disabledStyle">
      <span class="hidden sm:inline">Last</span>
    </div>

    <nuxt-link
      v-else
      :to="`/page/${totalPages}`"
      :class="buttonStyles"
    >
      <span class="hidden sm:inline">Last</span>
    </nuxt-link>
  </div>
</template>

<script>

export default {
  name: 'Pagination',
  props: {
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    buttonStyles() {
      return 'border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase hover:bg-blue-500 hover:text-white transform duration-500 ease-in-out';
    },
    disabledStyle() {
      return 'border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase text-gray-300';
    },
    totalPages() {
      return Math.ceil(this.total / this.perPage);
    },
    currentPage() {
      return parseInt(this.$route.params.page) || 1;
    },
    prevPage() {
      return this.currentPage > 1 ? this.currentPage - 1 : 1;
    },
    nextPage() {
      return this.currentPage < this.totalPages
        ? this.currentPage + 1
        : this.totalPages;
    },
  },
};
</script>
