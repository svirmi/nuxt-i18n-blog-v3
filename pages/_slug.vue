<template>
<div class="container mx-auto flex flex-wrap py-6">
  <section class="w-full md:w-2/3 flex flex-col px-3">

    <article class="flex flex-col shadow my-4">
      <div class="bg-white flex flex-col justify-start p-6">
        <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
        <h1 class="text-3xl font-bold pb-4">{{ post.title }}</h1>
        <p href="#" class="text-sm pb-8">Published on {{ post.date }}</p>  

        <nuxt-content :document="post"></nuxt-content>
      </div>
    </article>

    <div class="w-full flex pt-6 items-center">
        <a href="#" class="w-1/2 bg-white shadow hover:shadow-md text-left p-6">
          <p class="text-lg text-blue-800 font-bold flex items-center"><i class="fas fa-arrow-left pr-1"></i> Previous</p>
          <p class="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
        </a>
        <a href="#" class="w-1/2 bg-white shadow hover:shadow-md text-right p-6">
          <p class="text-lg text-blue-800 font-bold flex items-center justify-end">Next <i class="fas fa-arrow-right pl-1"></i></p>
          <p class="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
        </a>
    </div>

  </section>
  <Sidebar />
</div>
</template>

<script>
  export default {
    async asyncData({ $content, app, params }) {
      const post = await $content(`${app.i18n.locale}/posts`, params.slug).fetch()

      return { post }
    },
    
    head () {
    return {
      title: this.post.title
    }
  }
  }
</script>
