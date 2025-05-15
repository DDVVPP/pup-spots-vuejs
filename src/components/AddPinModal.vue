<script setup lang="ts"></script>

<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/5 backdrop-blur-sm"
  >
    <div
      class="bg-white rounded-lg p-6 shadow-md max-w-md w-full flex-col flex gap-y-2"
    >
      <h1 class="text-lg font-semibold mb-2">Add Pup Spot</h1>
      <p class="text-sm text-gray-600">
        Add a title, description, and category for this pin..
      </p>
      <label for="title">Title</label>
      <input placeholder="Elysian Park" class="border p-2 rounded-md" />
      <label for="notes">Notes</label>
      <input
        placeholder="Great views, green, coyotes around"
        class="border p-2 rounded-md"
      />

      <label for="categories">Choose a category:</label>
      <select name="categories" id="categories" class="border p-2 rounded-md">
        <option value="restaurants">Restaurant</option>
        <option value="bars">Bar</option>
        <option value="hikes">Hike</option>
        <option value="shops">Shop</option>
        <option value="parks">Park</option>
        <option value="cafes">Cafe</option>
      </select>
      <button class="bg-red-300 rounded-md">Add Pin</button>
      <button class="border-red-500 border rounded-md">Cancel</button>
    </div>
  </div>
</template>
