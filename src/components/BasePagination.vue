<template>
  <ul class="catalog__pagination pagination" v-if="pages > 0">
    <li class="pagination__item">
      <a
        href="#"
        class="pagination__link pagination__link--arrow"
        aria-label="Предыдущая страница"
        :class="{ 'pagination__link--disabled': page === 1 }"
        @click.prevent="paginate(page > 1 ? page - 1 : page)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="arcs">
          <path d="M15 18l-6-6 6-6"></path>
        </svg>
      </a>
    </li>

    <li
      class="pagination__item"
      v-for="(pagintationTrigger, index) in paginationTriggers"
      :key="index"
    >
      <template v-if="pagintationTrigger === '...'">
        <div class="pagination__link--dotted"> {{ pagintationTrigger }} </div>
      </template>
      <a
        v-else
        href="#"
        class="pagination__link"
        :class="{ 'pagination__link--current': pagintationTrigger === page }"
        @click.prevent="paginate(pagintationTrigger)"
      >
        {{ pagintationTrigger }}
      </a>
    </li>

    <li class="pagination__item">
      <a
        class="pagination__link pagination__link--arrow"
        href="#"
        :class="{ 'pagination__link--disabled': page === pages }"
        @click.prevent="paginate(page < pages ? page + 1 : page)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="arcs">
          <path d="M9 18l6-6-6-6"></path>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BasePagination',
  model: {
    prop: 'page',
    event: 'paginate',
  },
  props: {
    page: Number,
    perPage: Number,
    count: Number,
    visiblePagesCount: Number,
  },
  data: () => ({
    currentPage: 1,
  }),
  computed: {
    pages(): number {
      return Math.ceil(this.count / this.perPage);
    },

    paginationTriggers(): unknown[] {
      const pageCount: number = this.pages;
      const visiblePagesThreshold: number = Math.round((this.visiblePagesCount - 1) / 2);
      const pagintationTriggersArray: number[] = Array(this.visiblePagesCount - 1).fill(0);
      let pagintationTriggers: unknown[] = [];

      this.firstPage();
      if (pageCount <= this.visiblePagesCount) {
        for (let i = 1; i < pageCount + 1; i += 1) {
          pagintationTriggers.push(i);
        }
        return pagintationTriggers;
      }

      if (this.currentPage === pageCount - (visiblePagesThreshold + 1)) {
        pagintationTriggersArray[0] = this.currentPage - visiblePagesThreshold;
        pagintationTriggers = (pagintationTriggersArray).map(
          (paginationTrigger, index) => pagintationTriggersArray[0] + index,
        );
        pagintationTriggers.unshift(1, '...');
        pagintationTriggers.push('...', pageCount);
        return pagintationTriggers;
      }
      if (this.currentPage <= visiblePagesThreshold + 1) {
        pagintationTriggersArray[0] = 1;
        pagintationTriggers = pagintationTriggersArray.map(
          (paginationTrigger, index) => pagintationTriggersArray[0] + index,
        );
        pagintationTriggers.push('...', pageCount);
        return pagintationTriggers;
      }
      if (this.currentPage >= pageCount - visiblePagesThreshold - 1) {
        pagintationTriggers = pagintationTriggersArray.map(
          (paginationTrigger, index) => pageCount - index,
        );
        pagintationTriggers.reverse().unshift(1, '...');
        return pagintationTriggers;
      }
      pagintationTriggersArray[0] = this.currentPage - visiblePagesThreshold + 1;
      pagintationTriggers = (pagintationTriggersArray).map(
        (paginationTrigger, index) => pagintationTriggersArray[0] + index,
      );
      pagintationTriggers.unshift(1, '...');
      pagintationTriggers.push('...', pageCount);

      return pagintationTriggers;
    },
  },
  methods: {
    paginate(clickPage: string): void {
      this.$emit('paginate', +clickPage);
      this.currentPage = +clickPage;
    },
    firstPage(): void {
      if (this.page === 1) {
        this.currentPage = 1;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.catalog__pagination {
  margin: 70px auto 70px;
}
.pagination {
  padding: 0;
  list-style: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  &__item {

    &:first-child {
      margin-right: 25px;
    }
    &:last-child {
      margin-left: 25px;
    }
  }
  &__link {
    display: block;
    padding: 5px 3px;
    min-width: 40px;
    font-size: 16px;
    line-height: 1;
    color: #222;
    text-align: center;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    text-decoration: none;

      &:hover,
      &:focus {
        color: #42b983;
        opacity: 1;
      }
    &--dotted {
      color: #222;
    }
    &--current {
      font-weight: 700;
      cursor: default;
      color: #42b983;
    }
    &--arrow {
      margin-top: 3px;
      &:hover {
        svg {
          stroke: #42b983;
        }
      }
    }
    &--arrow, &--disabled {
      &:hover {
        svg {
          opacity: .4;
          stroke: black;
          opacity: .4;
        }
      }
    }
    &--disabled {
      opacity: .4;
      cursor: not-allowed;
    }
  }
}
</style>
