<template>
  <div class="container">
    <app-breadcrumbs :props-data="breadcrumbs"></app-breadcrumbs>
    <sections-render :props-data="construcnor"></sections-render>
    <app-articles :props-data="articles"></app-articles>
  </div>
</template>

<script>
import { fetchArticle } from '~/services/newsService.js'
import appBreadcrumbs from '@/components/common/app-breadcrumbs.vue'
import AppArticles from '@/components/admin-components/widgets/default/app-articles.vue'
import SectionsRender from '@/components/sections-render.vue'

export default {
  components: { appBreadcrumbs, AppArticles, SectionsRender },
  name: 'ArticlePage',
  async asyncData(ctx) {
    const data = await fetchArticle(ctx)
    return {
      breadcrumbs: data.breadcrumbs,
      articles: data.see_also,
      constructor: data.constructor,
    }
  },
}
</script>

<style
  lang="scss"
  scoped
></style>


<!-- <template>
  <category-news-page
      v-if="type === 'category'"
      :props-data="res"
  ></category-news-page>
  <article-page
      v-else-if="type === 'article'"
      :props-data="res"
  ></article-page>
</template>

<script>
import articlePage from '../../components/conflict-pages/article-page.vue'
import CategoryNewsPage from '../../components/conflict-pages/category-news-page.vue'
import { fetchArticleOrCAtegory } from '~/services/newsService.js'

export default {
  components: { articlePage, CategoryNewsPage },
  name: 'ArticlePage',
  async asyncData(ctx) {
      const data = await fetchArticleOrCAtegory(ctx)
      return {
          res: data,
          type: data.type

      }
  },
}
</script>

<style lang="scss" scoped></style> -->