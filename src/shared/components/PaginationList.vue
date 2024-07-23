<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: page == 1 }">
        <button class="page-link" @click="goPage(page - 1)">«</button>
      </li>
      <li
        v-for="p in totalPages"
        :key="p"
        class="page-item"
        :class="{ active: p === page }"
      >
        <button class="page-link" @click="goPage(p)">{{ p }}</button>
      </li>
      <li class="page-item" :class="{ disabled: page === totalPages }">
        <button class="page-link" @click="goPage(page + 1)">»</button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps<{
  page: number;
  perPage: number;
  total: number;
}>();

const emit = defineEmits<{
  (event: "pageChange", page: number): void;
}>();

const totalPages = computed(() => Math.ceil(props.total / props.perPage));

const goPage = (p: number) => {
  if (p >= 1 && p <= totalPages.value) {
    emit("pageChange", p);
  }
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.page-item.disabled .page-link {
  pointer-events: none;
  color: #ccc;
}

.page-item.active .page-link {
  background-color: #007bff;
  color: white;
}

.page-link {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
}

.page-link:hover {
  background-color: #0056b3;
  color: white;
}
</style>
